import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import './App.css';
import chronsEpisodes from './chronsData.js'; // Adjust the path to your data.js file
import netcafeEpisodes from './netcafeData.js'; // Adjust the path to your data.js file
import Table from './Table';
import ChronsCategory from './ChronsCategory'; // Add this line to import ChronsCategory
import NetcafeCategory from './NetcafeCategory'; // Add this line to import NetcafeCategory

import Try from './Try';

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const playChrons = () => {
    const sound = new Howl({
      src: ['/chrons.mp3'], // Path relative to the public folder
      volume: 1.0, // Adjust volume (0.0 to 1.0)
    });
    sound.play();
  };

  const playNetcafe = () => {
    const sound = new Howl({
      src: ['/netcafe.mp3'], // Path relative to the public folder
      volume: 1.0, // Adjust volume (0.0 to 1.0)
    });
    sound.play();
  };

  const [episodeObjs, setEpisodeObjs] = useState({
    chrons: chronsEpisodes,
    netcafe: netcafeEpisodes,
  });
  const [progress, setProgress] = useState({ chrons: {}, netcafe: {} });
  const [sortOn, setSortOn] = useState(null);
  const [order, setOrder] = useState(1); // 1 for asc, -1 for desc
  const [isGapiLoaded, setIsGapiLoaded] = useState(false);
  const [thumbnails, setThumbnails] = useState({}); // Store fetched thumbnails
  const [series, setSeries] = useState('chrons'); // chrons or netcafe
  const [watchedFilter, setWatchedFilter] = useState(false);

  const [stuImage, setStuImage] = useState(null);
  const [janeImage, setJaneImage] = useState(null);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = '/stu95.png'; // Preload image
  //   img.onload = () => setStuImage(img.src);
  // }, []);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = '/jane95.png'; // Preload image
  //   img.onload = () => setJaneImage(img.src);
  // }, []);

  // Function to extract video ID from YouTube URL
  const extractVideoId = (url) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const countEpisodesBySeason = (episodes) =>
    episodes.reduce((acc, { season, watched }) => {
      const key = `season${season}`;
      acc[key] = acc[key] || { total: 0, watched: 0 };
      acc[key].total++;
      acc[key].watched += watched ? 1 : 0;
      return acc;
    }, {});

  useEffect(() => {
    const chronsProgressObj = countEpisodesBySeason(chronsEpisodes);
    const netcafeProgressObj = countEpisodesBySeason(netcafeEpisodes);
    setProgress({ chrons: chronsProgressObj, netcafe: netcafeProgressObj });
  }, []);

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
      const updatedChrons = await Promise.all(
        chronsEpisodes.map(async (video) => {
          const videoId = extractVideoId(video.streamURL);
          const youtubeThumbnail = videoId ? await getThumbnail(videoId) : null;
          return {
            ...video,
            youtubeThumbnail,
          };
        })
      );

      const updatedNetcafe = await Promise.all(
        netcafeEpisodes.map(async (video) => {
          const videoId = extractVideoId(video.streamURL);
          const youtubeThumbnail = videoId ? await getThumbnail(videoId) : null;
          return {
            ...video,
            youtubeThumbnail,
          };
        })
      );

      const updatedEpisodeObj = {
        chrons: updatedChrons,
        netcafe: updatedNetcafe,
      };

      console.log(updatedEpisodeObj);

      setEpisodeObjs(updatedEpisodeObj);
    };

    if (isGapiLoaded) {
      updateVideosWithThumbnails(); // Only fetch thumbnails when gapi is loaded
    }
  }, [isGapiLoaded]); // Only re-run when gapi is loaded

  const maxEpsInASeason = 34;

  const handleTab = (series) => {
    if (series === 'chrons') playChrons();
    if (series === 'netcafe') playNetcafe();

    setSeries(series);
  };

  const chronsTabClass = `tab chronsTab ${
    series === 'chrons' ? `activeTab` : null
  }`;
  const netcafeTabClass = `tab netcafeTab ${
    series === 'netcafe' ? `activeTab` : null
  }`;
  const chronsDashTab = `${series === 'chrons' ? 'isTabbed' : null}`;
  const netcafeDashTab = `${series === 'netcafe' ? 'isTabbed' : null}`;

  const handleToggleWatched = () => {
    setWatchedFilter((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div className="pageHeader">
        <div className="windowPicContainer">
          <img className="windowImg" src="/window.png" />
          <h1 className="pageHeaderTitle">
            Has{' '}
            <a
              href="https://www.youtube.com/@FrancisHiggins"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              Francis
            </a>{' '}
            watched...
            <div className="windowButtons">
              <p>Yes</p>
              <p>No</p>
            </div>
          </h1>
        </div>

        <p className="pageHeaderDescription">
          A resource for keeping track of{' '}
          <span style={{ fontWeight: 900 }}>Computer Chronicles</span> /{' '}
          <span style={{ fontWeight: 900 }}>Netcafe </span>
          episodes watched on{' '}
          <a
            href="https://www.youtube.com/@FrancisHiggins/playlists"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            stream
          </a>
        </p>
        <div className="followContainer">
          <p className="followText">
            Follow:
            <a
              href="https://www.youtube.com/@FrancisHiggins/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
              style={{ marginLeft: '5px' }}
            >
              francis_higgins
            </a>
          </p>
          <a
            href="https://www.youtube.com/@FrancisHiggins"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            <img className="youtubeImg" src="/youtubeicon.png" />
          </a>
          <p className="followText">
            Webmaster:
            <a
              href="https://soundcloud.com/samlea"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
              style={{ marginLeft: '5px' }}
            >
              sam_lea
            </a>
          </p>
          <a
            href="https://soundcloud.com/samlea"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            <img className="soundcloudImg" src="/soundcloudicon.png" />
          </a>
        </div>
      </div>

      <div className="table">
        <div className="pretableHeader">
          <div className="gradientSash" />

          <div className="tabs">
            <div className={chronsTabClass} onClick={() => handleTab('chrons')}>
              <div className={chronsDashTab}>Computer Chronicles</div>
            </div>
            <div
              className={netcafeTabClass}
              onClick={() => handleTab('netcafe')}
            >
              <div className={netcafeDashTab}>Net Cafe</div>
            </div>
          </div>
          <div className="greyDivider">
            <div className="whiteLineHalf" />
          </div>

          <div style={{ display: series === 'chrons' ? 'block' : 'none' }}>
            <ChronsCategory
              progress={progress}
              series={series}
              janeImage={janeImage}
            />
          </div>
          <div style={{ display: series === 'netcafe' ? 'block' : 'none' }}>
            <NetcafeCategory
              progress={progress}
              series={series}
              stuImage={stuImage}
            />
          </div>
        </div>
        <div className="toolbar">
          <button
            className="showWatchedAllButton"
            type="button"
            onClick={() => {}}
          >
            <div
              className="showWatchedAllButtonInside"
              onClick={handleToggleWatched}
            >
              {!watchedFilter
                ? 'Show Watched Only 👁️ '
                : 'Show All Episodes 📖'}
            </div>
          </button>
        </div>
        <div className="columnHeaders">
          <div className="cell epColumn">Ep.</div>
          <div className="cell titleColumn">Title</div>
          <div className="cell dateColumn">Air Date</div>
          <div className="cell youtubeColumn">YT Link</div>
          <div className="cell framesColumn">Frames</div>
          <div className="cell internetArchiveColumn">Int. Arch.</div>
          <div className="cell streamDateColumn">Streamed</div>
          <div className="cell streamTitleColumn">Stream Title</div>
        </div>
        <Table
          episodeObjs={episodeObjs[series]}
          sortOn={sortOn}
          order={order}
          watchedFilter={watchedFilter}
          series={series}
        />
      </div>
    </div>
  );
}

export default App;
