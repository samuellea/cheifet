import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import './App.css';
import chronsEpisodes from './chronsData.js'; // Adjust the path to your data.js file
import netcafeEpisodes from './netcafeData.js'; // Adjust the path to your data.js file
import Table from './Table';
import ChronsCategory from './ChronsCategory'; // Add this line to import ChronsCategory
import NetcafeCategory from './NetcafeCategory'; // Add this line to import NetcafeCategory

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
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!searchTerm.length) {
    } else {
    }
  }, [searchTerm]);

  // onClick handler for the column headers
  const handleColumnClick = (column) => {
    console.log('!');
    if (sortOn === column) {
      // If the same column is clicked again, toggle the order (ascending <-> descending)
      if (order === 1) {
        setOrder(-1); // Set to descending order
      } else if (order === -1) {
        setSortOn(null); // Reset sortOn
        setOrder(1); // Reset order to ascending
      }
    } else {
      // Set the new column to sort on, default to ascending order
      setSortOn(column);
      setOrder(1); // Always start with ascending order for a new column
    }
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

  // Function to generate a random time between 4-12 seconds
  const getRandomInterval = () =>
    Math.floor(Math.random() * (12000 - 4000) + 4000);

  function FloatingObject({ images, getRandomInterval }) {
    const [src, setSrc] = useState(
      images[Math.floor(Math.random() * images.length)]
    );

    useEffect(() => {
      const changeImage = () => {
        setSrc(images[Math.floor(Math.random() * images.length)]); // Pick a new random image
        const nextInterval = getRandomInterval();
        setTimeout(changeImage, nextInterval); // Schedule next change
      };

      const initialTimeout = getRandomInterval();
      const timeout = setTimeout(changeImage, initialTimeout);

      return () => clearTimeout(timeout); // Cleanup on unmount
    }, [images, getRandomInterval]);

    return (
      <div className="floating-object">
        <img src={src} alt="Floating" />
      </div>
    );
  }

  const handleClear = () => {
    setSearchTerm('');
    setSortOn(null);
    setOrder(1);
  };

  return (
    <div className="App">
      <div className="floatyBackgroundContainer">
        <div className="floatyBackground">
          {Array.from({ length: objectCount }).map((_, index) => (
            <FloatingObject
              key={index}
              images={images}
              getRandomInterval={getRandomInterval}
            />
          ))}
        </div>
      </div>
      <div className="contentContainer">
        <div className="pageHeader">
          <div className="windowPicContainer">
            <img className="bannerGif" src="/banner.gif" />
            <h1 className="pageHeaderTitle">
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
            <p className="followText">
              Follow:
              <a
                href="https://www.youtube.com/@FrancisHiggins/"
                target="_blank"
                rel="noopener noreferrer"
                className="header-link"
                style={{ marginLeft: '5px', marginRight: '5px' }}
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
            <p
              className="followText"
              style={{ marginLeft: '5px', marginRight: '5px' }}
            >
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
            <div className="searchAndClear">
              <div className="magnifContainer">
                <img className="magnif" src="/magnif.png" />
              </div>

              <div className="searchBarOuter">
                <div className="searchBarInner">
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                    value={searchTerm}
                  />
                </div>
              </div>
              <button className="clearButton" type="button" onClick={() => {}}>
                <div className="clearButtonInside" onClick={handleClear}>
                  Clear
                </div>
              </button>
            </div>
          </div>

          <div className="columnHeaders">
            <div
              className={`cell epColumn sort-${sortOn === 'index'}`}
              onClick={() => handleColumnClick('index')}
            >
              Ep.
            </div>
            <div
              className={`cell titleColumn sort-${sortOn === 'titles'}`}
              onClick={() => handleColumnClick('titles')}
            >
              <img
                class="sortChevrons"
                src={
                  sortOn !== 'titles'
                    ? `/sortWhite.png`
                    : order === 1
                    ? `/sortDesc.png`
                    : `/sortAsc.png`
                }
                alt={`sort`}
              />
              Title
            </div>
            <div
              className={`cell dateColumn sort-${sortOn === 'date'}`}
              onClick={() => handleColumnClick('date')}
            >
              <img
                class="sortChevrons"
                src={
                  sortOn !== 'date'
                    ? `/sortWhite.png`
                    : order === 1
                    ? `/sortDesc.png`
                    : `/sortAsc.png`
                }
                alt={`sort`}
              />
              Air Date
            </div>
            <div className="cell youtubeColumn">YT Link</div>
            <div className="cell internetArchiveColumn">I.A. Link</div>
            <div className="cell framesColumn">Frames</div>
            <div
              className={`cell streamDateColumn sort-${
                sortOn === 'streamDate'
              }`}
              onClick={() => handleColumnClick('streamDate')}
            >
              <img
                class="sortChevrons"
                src={
                  sortOn !== 'streamDate'
                    ? `/sortWhite.png`
                    : order === 1
                    ? `/sortDesc.png`
                    : `/sortAsc.png`
                }
                alt={`sort`}
              />
              Streamed
            </div>
            <div
              className={`cell streamTitleColumn sort-${
                sortOn === 'streamTitle'
              }`}
              onClick={() => handleColumnClick('streamTitle')}
            >
              <img
                class="sortChevrons"
                src={
                  sortOn !== 'streamTitle'
                    ? `/sortWhite.png`
                    : order === 1
                    ? `/sortDesc.png`
                    : `/sortAsc.png`
                }
                alt={`sort`}
              />
              Stream Title
            </div>
          </div>
          {episodeObjs.chrons.length && episodeObjs.netcafe.length && (
            <Table
              episodeObjs={episodeObjs[series]}
              sortOn={sortOn}
              order={order}
              watchedFilter={watchedFilter}
              series={series}
              searchTerm={searchTerm}
            />
          )}
        </div>
        <div className="bottomSpace"></div>
      </div>
    </div>
  );
}

export default App;
