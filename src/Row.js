import React, { useState } from 'react';
import { format } from 'date-fns';

const Row = ({ episode, index, lastInSeason }) => {
  const {
    id,
    season,
    episodeOfSeason,
    titles,
    date,
    internetArchiveURL,
    youtubeURL,
    youtubeThumbnail,
    framesURL,
    watched,
    streamTitle,
    streamDate,
    streamURL,
    streamThumbURL,
  } = episode;

  const [showFrames, setShowFrames] = useState(false);

  /*
  
  https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_1999Codi99

  https://storage.googleapis.com/data.gdeltproject.org/gdeltv3/iatv/visualexplorer/IAITEM_1999Codi99.jpg

  https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Year2000
  
  https://storage.googleapis.com/data.gdeltproject.org/gdeltv3/iatv/visualexplorer/IAITEM_Year2000.jpg
  */

  const formattedDate = date ? format(new Date(date), 'MMM d, yyyy') : null;
  const formattedStreamDate = streamDate
    ? format(new Date(streamDate), 'MMM d, yyyy')
    : null;
  const rowFramesClass = `rowFrames showFrames-${showFrames}`;

  const extractId = (url) => {
    if (!url.length) return null;
    // console.log(url);
    const match = url[0].match(/[?&]id=([^&]+)/);
    return match.length ? match[1] : null; // Return the matched id or null if no match is found
  };

  const handleClickFrames = () => {
    if (!framesURL) return;
    if (!showFrames) {
      setShowFrames(true);
    } else {
      setShowFrames(false);
    }
  };

  const imageURLStart = `https://storage.googleapis.com/data.gdeltproject.org/gdeltv3/iatv/visualexplorer/`;
  const imageNamePortion = extractId(framesURL);
  const fullFramesImgURL = `${imageURLStart}${imageNamePortion}.jpg`;

  // Determine the background color based on the index
  const rowBackgroundColor = index % 2 === 0 ? 'odd' : 'even';

  return (
    <div
      className={`row rowBackground-${rowBackgroundColor} watched-${watched}`}
      style={{
        borderBottom: lastInSeason ? '1px solid rgb(244, 244, 244)' : 'none',
      }}
    >
      <div className="rowInfo">
        <div className={`cell ep season${season}`}>{episodeOfSeason}</div>
        <div
          className="cell title"
          style={{
            background:
              watched === 'partial'
                ? 'rgb(255, 243, 184)'
                : watched === true
                ? 'rgb(205, 250, 215)'
                : rowBackgroundColor === 'odd'
                ? 'white'
                : 'rgb(244, 244, 244)',
          }}
        >
          <p>
            {titles.join(' / ')}
            {watched === 'partial' ? ' ⏳' : watched === true ? ' ✅' : null}
          </p>
        </div>
        <div className="cell date">
          <p>{formattedDate}</p>
        </div>
        <div className="cell youtube">
          {youtubeURL ? (
            <a target="_blank" href={youtubeURL} rel="noreferrer">
              <img
                className="youtubeImg"
                src="/youtubeicon.png"
                style={{ height: '20px' }}
              />
              <br />
              YouTube
            </a>
          ) : null}
        </div>
        <div className="cell internetArchive">
          {internetArchiveURL.length ? (
            <a target="_blank" href={internetArchiveURL[0]} rel="noreferrer">
              <img className="internetArchiveImg" src="/intarchico.png" />
              <br />
              Internet Archive
            </a>
          ) : null}
        </div>
        <div
          className="cell frames"
          style={{ cursor: framesURL.length ? 'pointer' : 'default' }}
          onClick={() => (framesURL.length ? handleClickFrames() : null)}
        >
          {framesURL.length ? (
            <>
              🎞️ 👁️
              {/* <br /> */}
              <p>show Frames</p>
            </>
          ) : null}
        </div>

        <div className="cell streamDate">
          {watched === true || watched === 'partial' ? (
            <p className="">{formattedStreamDate}</p>
          ) : null}
        </div>

        <div
          className="cell streamTitle"
          id={!framesURL ? 'unclickable' : null}
        >
          {watched === true || watched === 'partial' ? (
            <>
              <img src={streamThumbURL} />
              <p>
                {' '}
                <a target="_blank" href={streamURL} rel="noreferrer">
                  {window.innerWidth > 768 && '🔗'}
                  {streamTitle}
                </a>
              </p>
            </>
          ) : null}
        </div>
      </div>
      <>
        {showFrames ? (
          <div className={rowFramesClass}>
            <div className="left">
              <div className="leftSticky">
                <button
                  className="closeFramesButton"
                  type="button"
                  onClick={handleClickFrames}
                >
                  <div className="closeFramesButtonInside">
                    {window.innerWidth <= 768 ? 'Close Frames' : 'Close'}
                  </div>
                </button>
              </div>
            </div>
            <div className="right">
              <img src={fullFramesImgURL} alt="episode thumbs" />
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Row;
