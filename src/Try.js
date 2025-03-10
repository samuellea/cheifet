import React from 'react';

const Try = ({ episodeOfSeason, title, date, watchDate, streamTitle }) => {
  return (
    <div class="row">
      <div className="cell episodeOfSeason">{episodeOfSeason}</div>
      <div className="cell title">
        <p>{title}</p>
      </div>
      <div className="cell date">{date}</div>
      <div className="cell">▶️ YouTube</div>
      <div className="cell">🎞️ Frames</div>
      <div className="cell date">{watchDate}</div>
      <div className="cell streamTitle">
        🖼️🖼️🖼️ <p className="">{streamTitle}</p>
      </div>
    </div>
  );
};

export default Try;
