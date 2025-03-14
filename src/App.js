import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import './App.css';
import chronsEpisodes from './chronsData.js'; // Adjust the path to your data.js file
import netcafeEpisodes from './netcafeData.js'; // Adjust the path to your data.js file
import Table from './Table';
import ChronsCategory from './ChronsCategory'; // Add this line to import ChronsCategory
import NetcafeCategory from './NetcafeCategory'; // Add this line to import NetcafeCategory
import FloatingObject from './FloatingObject';
import Search from './Search';

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

  const [isGapiLoaded, setIsGapiLoaded] = useState(false);
  const [episodeObjs, setEpisodeObjs] = useState({
    chrons: chronsEpisodes,
    netcafe: netcafeEpisodes,
  });
  const [progress, setProgress] = useState({ chrons: {}, netcafe: {} });
  const [sortOn, setSortOn] = useState(null);
  const [order, setOrder] = useState(1); // 1 for asc, -1 for desc
  const [series, setSeries] = useState('chrons'); // chrons or netcafe
  const [finalSearch, setFinalSearch] = useState('');
  const [watchedFilter, setWatchedFilter] = useState(false);
  const [thumbnails, setThumbnails] = useState({}); // Store fetched thumbnails

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

  const thumbsBin = [];

  // Load the gapi client library only once
  useEffect(() => {
    window.gapi.load('client', initGapiClient);
  }, []); // Empty dependency array means this effect runs only once

  // Function to fetch the YouTube thumbnail using the YouTube API through gapi
  // const fetchThumbnail = async (videoId) => {
  //   if (!videoId || !isGapiLoaded) {
  //     return null; // If gapi is not loaded or no videoId, return null
  //   }

  //   try {
  //     const response = await window.gapi.client.youtube.videos.list({
  //       part: 'snippet',
  //       id: videoId,
  //     });

  //     const thumbnailUrl =
  //       response.result.items?.[0]?.snippet?.thumbnails?.default?.url;
  //     thumbsBin.push({ streamVideoID: videoId, streamThumbURL: thumbnailUrl });
  //     return thumbnailUrl || null;
  //   } catch (error) {
  //     console.error('Error fetching thumbnail with gapi:', error);
  //     return null;
  //   }
  // };

  // Fetch thumbnails only if they haven't been fetched yet
  // const getThumbnail = async (videoId) => {
  //   if (thumbnails[videoId]) return thumbnails[videoId]; // Return cached thumbnail if already fetched

  //   const thumbnail = await fetchThumbnail(videoId);

  //   // Update the thumbnails state with the new thumbnail
  //   setThumbnails((prevThumbnails) => ({
  //     ...prevThumbnails,
  //     [videoId]: thumbnail,
  //   }));

  //   return thumbnail;
  // };

  // This useEffect will run when the component mounts to fetch thumbnails
  useEffect(() => {
    // const updateVideosWithThumbnails = async () => {
    //   const updatedChrons = await Promise.all(
    //     chronsEpisodes.map(async (video) => {
    //       const videoId = extractVideoId(video.streamURL);
    //       const youtubeThumbnail = videoId ? await getThumbnail(videoId) : null;
    //       return {
    //         ...video,
    //         youtubeThumbnail,
    //       };
    //     })
    //   );

    //   const updatedNetcafe = await Promise.all(
    //     netcafeEpisodes.map(async (video) => {
    //       const videoId = extractVideoId(video.streamURL);
    //       const youtubeThumbnail = videoId ? await getThumbnail(videoId) : null;
    //       return {
    //         ...video,
    //         youtubeThumbnail,
    //       };
    //     })
    //   );

    //   const removeDuplicates = (arr) => {
    //     const seen = new Set();
    //     return arr.filter((obj) => {
    //       if (!obj.streamVideoID) return true; // Keep objects without an ID
    //       if (seen.has(obj.streamVideoID)) return false; // Skip duplicates
    //       seen.add(obj.streamVideoID);
    //       return true;
    //     });
    //   };

    //   const uniqueThumbs = removeDuplicates(thumbsBin);
    //   console.log(uniqueThumbs);

    //   const updatedEpisodeObj = {
    //     chrons: updatedChrons,
    //     netcafe: updatedNetcafe,
    //   };

    //   console.log(updatedEpisodeObj);

    //   setEpisodeObjs(updatedEpisodeObj);
    // };

    if (isGapiLoaded) {
      // updateVideosWithThumbnails();
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

  useEffect(() => {
    console.log({ sortOn, order });
  }, [sortOn, order]);

  const images = [
    '/icotim.png',
    '/icoalp.png',
    '/icopri.png',
    '/icofra.png',
    '/icowin.png',
    '/icomen.png',
    '/icobox.png',
    '/icomag.png',
    '/icodocs.png',
    '/icorom2.png',
    '/icorom.png',
    '/icoput.png',
    '/icorecy.png',
  ];

  const objectCount = 17; // Number of floating objects

  const handleClear = () => {
    setFinalSearch('');
    setSortOn(null);
    setOrder(1);
  };

  return (
    <div className="App">
      <div className="floatyBackgroundContainer">
        <div className="floatyBackground">
          {Array.from({ length: objectCount }).map((_, index) => (
            <FloatingObject key={index} images={images} />
          ))}
        </div>
      </div>
      <div className="contentContainer">
        <div className="pageHeader">
          <div className="windowPicContainer">
            <img className="bannerGif" src="/banner.gif" />
            <div className="windowButtons">
              <p>Yes</p>
              <p>No</p>
            </div>
          </div>

          <p className="pageHeaderDescription">
            A resource for keeping track of{' '}
            <span style={{ fontWeight: 900 }}>Computer Chronicles</span> /{' '}
            <span style={{ fontWeight: 900 }}>Netcafe </span>
            episodes watched on{' '}
            <span style={{ fontWeight: 900 }}>Francis Higgins'</span>{' '}
            <a
              href="https://www.youtube.com/@FrancisHiggins/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              streams
            </a>
          </p>
          <div className="followContainer">
            <div className="followTextWrapper">
              <p className="followText">
                Follow:
                <a
                  href="https://www.youtube.com/@FrancisHiggins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-link"
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
            </div>
            <div className="followTextWrapper">
              <p className="followText">
                Webmaster:
                <a
                  href="https://soundcloud.com/samlea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-link"
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
        </div>

        <div className="table">
          <div className="pretableHeader">
            {window.innerWidth > 768 && <div className="gradientSash" />}

            <div className="tabs">
              <div
                className={chronsTabClass}
                onClick={() => handleTab('chrons')}
              >
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
              <ChronsCategory progress={progress} series={series} />
            </div>
            <div style={{ display: series === 'netcafe' ? 'block' : 'none' }}>
              <NetcafeCategory progress={progress} series={series} />
            </div>
          </div>
          <div className="toolbar">
            <button
              className="showWatchedAllButton"
              type="button"
              onClick={handleToggleWatched}
            >
              <div className="showWatchedAllButtonInside">
                {!watchedFilter
                  ? 'Show Watched Only 👁️ '
                  : 'Show All Episodes 📖'}
              </div>
            </button>
            <Search handleClear={handleClear} setFinalSearch={setFinalSearch} />
          </div>

          {episodeObjs.chrons.length && episodeObjs.netcafe.length && (
            <Table
              episodeObjs={episodeObjs}
              sortOn={sortOn}
              order={order}
              watchedFilter={watchedFilter}
              series={series}
              finalSearch={finalSearch}
            />
          )}
        </div>
        <div className="bottomSpace"></div>
      </div>
    </div>
  );
}

export default App;
