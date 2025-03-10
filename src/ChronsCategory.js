import React from 'react';
import ProgressGraph from './ProgressGraph';

const ChronsCategory = ({ progress, series, stuImage }) => {
  return (
    <div className="categoryInfo">
      <div className="picAndTitle">
        <div className="StuPicContainer">
          <img className="stuImg" src={stuImage || '/stu95.png'} />
        </div>
        <div className="ph1Container">
          <h1 class="ph1 wave">
            <span>C</span>
            <span>o</span>
            <span>m</span>
            <span>p</span>
            <span>u</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span style={{ marginLeft: '15px' }}> </span>
            <span>C</span>
            <span>h</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>i</span>
            <span>c</span>
            <span>l</span>
            <span>e</span>
            <span>s</span>
            <span style={{ marginLeft: '15px' }}> </span>
            <span>🖥️</span>
          </h1>
        </div>
      </div>

      {progress.chrons && progress.netcafe ? (
        <ProgressGraph progress={progress} series={series} />
      ) : null}
    </div>
  );
};

export default ChronsCategory;
