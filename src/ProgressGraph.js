import React from 'react';

const ProgressGraph = ({ progress, series }) => {
  return (
    <div className="seasonsProgress">
      <div
        className="progressHeader"
        style={{
          animation: `fadeIn 0.5s ease-in 0.5s forwards`,
        }}
      >
        PROGRESS...
      </div>
      <div className="progressGraph">
        {Object.entries(progress[series]).map(
          ([seasonKey, { total, watched }]) => (
            <div key={seasonKey} className="seasonContainer">
              <div
                className="seasonName"
                style={{ marginRight: series === 'netcafe' ? '25px' : null }}
              >
                <p className={`color-${seasonKey}`}>
                  {seasonKey.replace('season', 'S')}
                </p>
              </div>
              <div className="seasonCount">{`${watched}/${total}`}</div>
              <div className="seasonBar">
                {Array.from({ length: watched }).map((_, index) => (
                  <div key={index} className={`dot`} style={{ width: `2.9%` }}>
                    <div className={`blob ${seasonKey}`} />
                  </div>
                ))}

                {Array.from({ length: total - watched }).map((_, index) => (
                  <div key={index} className={`dot`} style={{ width: `2.9%` }}>
                    <div className={`blob unwatched`} />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProgressGraph;
