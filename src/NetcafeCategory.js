import React from 'react';
import ProgressGraph from './ProgressGraph';

const NetcafeCategory = ({ progress, series, janeImage }) => {
  return (
    <div className="categoryInfo">
      <div className="picAndTitle">
        <div className="StuPicContainer">
          <img className="janeImg" src={janeImage || '/jane95.png'} />
        </div>
        <div className="ph1Container">
          <h1 className="ph1 wave netcafeTitle">
            <span>T</span>
            <span>h</span>
            <span>e</span>
            <span style={{ marginLeft: '15px' }}> </span>
            <span>I</span>
            <span>n</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span>n</span>
            <span>e</span>
            <span>t</span>
            <span style={{ marginLeft: '15px' }}> </span>
            <span>C</span>
            <span>a</span>
            <span>f</span>
            <span>e</span>
            <span style={{ marginLeft: '15px' }}> </span>
            <span
              style={{
                visibility: window.innerWidth < 768 ? 'hidden' : 'visible',
              }}
            >
              ☕
            </span>
          </h1>
        </div>
      </div>

      {progress.chrons && progress.netcafe ? (
        <ProgressGraph progress={progress} series={series} />
      ) : null}
    </div>
  );
};

export default NetcafeCategory;
