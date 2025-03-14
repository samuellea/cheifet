import React from 'react';

const ProgressGraph = ({ progress, series }) => {
  return (
    <div className="seasonsProgress">
      {window.innerWidth > 768 && (
        <div
          className="progressHeader"
          style={{
            animation: `fadeIn 0.5s ease-in 0.5s forwards`,
          }}
        >
          PROGRESS...
        </div>
      )}
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
                  <div key={index} className={`dot`}>
                    <div className={`blob ${seasonKey}`} />
                  </div>
                ))}

                {Array.from({ length: total - watched }).map(
                  (_, index, arr) => (
                    <div key={index} className="dot">
                      <div
                        className={`blob unwatched ${
                          index === arr.length - 1 ? 'endBlob' : ''
                        }`}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProgressGraph;
