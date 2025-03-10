import React, { useEffect } from 'react';
import Row from './Row';

const Table = ({ episodeObjs, sortOn, order, series, watchedFilter }) => {
  const filteredEpisodes = episodeObjs
    .filter((episode) => !watchedFilter || episode.watched) // Apply filter first
    .sort((a, b) => {
      if (!sortOn) return 0; // If sortOn is falsy, don't sort
      const valA = sortOn === 'titles' ? a[sortOn].join(' ') : a[sortOn];
      const valB = sortOn === 'titles' ? b[sortOn].join(' ') : b[sortOn];
      return (valA > valB ? 1 : valA < valB ? -1 : 0) * order;
    }); // Then sort

  useEffect(() => {
    // Perform any additional operations when the 'series' prop changes (e.g., data fetching, etc.)
  }, [series, watchedFilter]);

  let prevSeason = null;

  return (
    <div className="tableContainer">
      {filteredEpisodes.map((episode, i) => {
        const isNewSeason = episode.season !== prevSeason;
        prevSeason = episode.season; // Update the prevSeason for the next iteration

        return (
          <React.Fragment key={i}>
            {/* Only render SeasonDivider if it's a new season */}
            {isNewSeason && (
              <div className="SeasonDivider">
                <p className={`color-season${episode.season}`}>
                  Season {episode.season}
                </p>
              </div>
            )}
            <Row
              episode={episode}
              index={i}
              lastInSeason={
                i === filteredEpisodes.length - 1 ||
                filteredEpisodes[i + 1].season > episode.season
              }
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Table;
