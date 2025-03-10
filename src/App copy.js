import React, { useState, useEffect } from 'react';
import './App.css';
import Row from './Row'; // Make sure the path to Row is correct
import episodes from './data.js'; // Adjust the path to your data.js file
import Try from './Try';

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const [episodeObjs, setEpisodeObjs] = useState([]);
  const [sortOn, setSortOn] = useState(null);
  const [order, setOrder] = useState(1); // 1 for asc, -1 for desc
  const [isGapiLoaded, setIsGapiLoaded] = useState(false);
  const [thumbnails, setThumbnails] = useState({}); // Store fetched thumbnails

  // Function to extract video ID from YouTube URL
  const extractVideoId = (url) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  // Initialize the Google API client (only run this once)
  const initGapiClient = () => {
    window.gapi.client
      .init({
        apiKey: API_KEY,
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
        ],
      })
      .then(() => {
        setIsGapiLoaded(true); // Set state to true when the client is initialized
      })
      .catch((error) => {
        console.error('Error initializing gapi client:', error);
      });
  };

  // Load the gapi client library only once
  useEffect(() => {
    window.gapi.load('client', initGapiClient);
  }, []); // Empty dependency array means this effect runs only once

  // Function to fetch the YouTube thumbnail using the YouTube API through gapi
  const fetchThumbnail = async (videoId) => {
    if (!videoId || !isGapiLoaded) {
      return null; // If gapi is not loaded or no videoId, return null
    }

    try {
      const response = await window.gapi.client.youtube.videos.list({
        part: 'snippet',
        id: videoId,
      });

      const thumbnailUrl =
        response.result.items?.[0]?.snippet?.thumbnails?.default?.url;
      console.log('⭐ ', thumbnailUrl);
      return thumbnailUrl || null;
    } catch (error) {
      console.error('Error fetching thumbnail with gapi:', error);
      return null;
    }
  };

  // Fetch thumbnails only if they haven't been fetched yet
  const getThumbnail = async (videoId) => {
    if (thumbnails[videoId]) return thumbnails[videoId]; // Return cached thumbnail if already fetched

    const thumbnail = await fetchThumbnail(videoId);

    // Update the thumbnails state with the new thumbnail
    setThumbnails((prevThumbnails) => ({
      ...prevThumbnails,
      [videoId]: thumbnail,
    }));

    return thumbnail;
  };

  // This useEffect will run when the component mounts to fetch thumbnails
  useEffect(() => {
    const updateVideosWithThumbnails = async () => {
      const updatedVideos = await Promise.all(
        episodes.map(async (video) => {
          console.log(video.streamURL);
          const videoId = extractVideoId(video.streamURL);
          const youtubeThumbnail = videoId ? await getThumbnail(videoId) : null;
          return {
            ...video,
            youtubeThumbnail,
          };
        })
      );
      console.log(updatedVideos, ' <--- updatedVideos');
      setEpisodeObjs(updatedVideos); // Set episodeObjs only once after thumbnails are fetched
    };

    if (isGapiLoaded) {
      updateVideosWithThumbnails(); // Only fetch thumbnails when gapi is loaded
    }
  }, [isGapiLoaded]); // Only re-run when gapi is loaded

  return (
    <div className="App">
      <div className="pageHeader">
        <h1>Cheifet Tracker</h1>
      </div>

      <div className="table">
        <div className="columnHeaders">
          <div className="cell epColumn">Ep.</div>
          <div className="cell titleColumn">Title</div>
          <div className="cell dateColumn">Air Date</div>
          <div className="cell youtubeColumn">YouTube Link</div>
          <div className="cell framesColumn">Frames</div>
          <div className="cell streamDateColumn">Stream Date</div>
          <div className="cell streamTitleColumn">Stream Title</div>
        </div>
        {episodeObjs
          .sort((a, b) => {
            if (!sortOn) return 0; // If sortOn is falsey, don't sort
            const valA = sortOn === 'titles' ? a[sortOn].join(' ') : a[sortOn];
            const valB = sortOn === 'titles' ? b[sortOn].join(' ') : b[sortOn];
            return (valA > valB ? 1 : valA < valB ? -1 : 0) * order;
          })
          .map((episode, i) => {
            if (
              !sortOn &&
              (i === 0 || episodeObjs[i].season > episodeObjs[i - 1].season)
            ) {
              return (
                <>
                  <div className="SeasonDivider">
                    <p className={`seasonHeader${episode.season}`}>
                      Season {episode.season}
                    </p>
                  </div>
                  <Row episode={episode} />
                </>
              );
            } else {
              return (
                <Row
                  episode={episode}
                  lastInSeason={
                    i === episodeObjs.length - 1 ||
                    episodeObjs[i + 1].season > episodeObjs[i].season
                  }
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default App;
