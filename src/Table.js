import React, { useState, useEffect } from 'react';
import Row from './Row';

const Table = ({
  episodeObjs,
  sortOn,
  setSortOn,
  order,
  setOrder,
  series,
  watchedFilter,
  finalSearch,
}) => {
  const [filteredEpisodes, setFilteredEpisodes] = useState([
    ...episodeObjs[series],
  ]);

  useEffect(() => {
    const filteredEpisodes = episodeObjs[series]
      .filter((episode) => {
        // 1. Apply watched filter
        if (watchedFilter && !episode.watched) {
          return false; // Skip episodes that are not marked as watched, if the filter is applied
        }

        const searchTermLower = finalSearch.toLowerCase(); // Case-insensitive search

        // 2. Apply search filter logic
        const titleMatch = episode.titles?.some((title) =>
          title.toLowerCase().includes(searchTermLower)
        );
        const streamTitleMatch =
          episode.streamTitle &&
          episode.streamTitle.toLowerCase().includes(searchTermLower);
        const dateMatch =
          episode.date &&
          formatDate(episode.date).toLowerCase().includes(searchTermLower);
        const streamDateMatch =
          episode.streamDate &&
          formatDate(episode.streamDate)
            .toLowerCase()
            .includes(searchTermLower);

        // Return true only if one of the search criteria is matched
        return titleMatch || streamTitleMatch || dateMatch || streamDateMatch;
      })
      .sort((a, b) => {
        if (!sortOn) return 0; // If no sorting criterion is defined, don't sort

        // Sorting logic for different types of values
        const getValue = (episode, key) => {
          if (key === 'titles') {
            return episode[key]?.[0]?.toLowerCase() || ''; // Use first title if available
          } else if (key === 'streamTitle') {
            return episode[key]?.toLowerCase() || null; // Handle streamTitle as a string, allow null
          } else if (key === 'streamDate') {
            return episode[key] ?? null; // Allow null for streamDate
          } else {
            return episode[key] ?? 0; // Assume numeric value for everything else
          }
        };

        const valA = getValue(a, sortOn);
        const valB = getValue(b, sortOn);

        // Move null values to the end of the array
        if (valA === null && valB !== null) return 1;
        if (valB === null && valA !== null) return -1;

        // Normal comparison for values
        return (valA > valB ? 1 : valA < valB ? -1 : 0) * order;
      });
    setFilteredEpisodes(filteredEpisodes);
  }, [watchedFilter, finalSearch, series]);

  useEffect(() => {
    console.log('Sorting has changed:', { sortOn, order });
  }, [sortOn, order]);
  // Apply filter and sort directly to episodeObjs

  useEffect(() => {
    // Perform any additional operations when the 'series' prop changes (e.g., data fetching, etc.)
  }, [series, watchedFilter]);

  let prevSeason = null;

  // Date formatting logic
  function formatDate(unixTimestamp) {
    if (!unixTimestamp) return ''; // Early return if the timestamp is invalid

    const date = new Date(unixTimestamp); // No need to multiply by 1000 because it's already in ms
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = date.toLocaleDateString('en-US', options);

    // Add suffix to the day of the month (st, nd, rd, th)
    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? 'st'
        : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
        ? 'rd'
        : 'th';
    formattedDate = formattedDate.replace(/\d+/, day + suffix); // Add the suffix

    return formattedDate;
  }

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

  return (
    <div className="tableContainer">
      <div className="columnHeaders">
        <div
          className={`cell column epColumn sort-${sortOn === 'index'}`}
          onClick={() => handleColumnClick('index')}
        >
          {window.innerWidth > 768 ? 'Ep.' : null}
        </div>
        <div
          className={`cell column titleColumn sort-${sortOn === 'titles'}`}
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
          className={`cell column dateColumn sort-${sortOn === 'date'}`}
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

        <div className="cell column youtubeColumn">YT Link</div>
        <div className="cell column internetArchiveColumn">I.A. Link</div>
        <div className="cell column framesColumn">Frames</div>
        <div
          className={`cell column streamDateColumn sort-${
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
          className={`cell column streamTitleColumn sort-${
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
      {filteredEpisodes.map((episode, i) => {
        const isNewSeason = episode.season !== prevSeason;
        prevSeason = episode.season; // Update the prevSeason for the next iteration

        return (
          <>
            {isNewSeason && !finalSearch.length && !sortOn && (
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
          </>
        );
      })}
    </div>
  );
};

export default Table;
