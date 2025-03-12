import React, { useEffect } from 'react';
import Row from './Row';

const Table = ({
  episodeObjs,
  sortOn,
  order,
  series,
  watchedFilter,
  searchTerm,
}) => {
  useEffect(() => {
    console.log('Sorting has changed:', { sortOn, order });
  }, [sortOn, order]);
  // Apply filter and sort directly to episodeObjs
  const filteredEpisodes = episodeObjs
    .filter((episode) => !watchedFilter || episode.watched) // Apply watched filter
    .sort((a, b) => {
      if (!sortOn) return 0; // If sortOn is falsy, don't sort

      // Handle sorting logic for different types of values
      const valA =
        sortOn === 'titles'
          ? a[sortOn]?.[0]?.toLowerCase() || '' // Use first title
          : sortOn === 'streamTitle'
          ? a[sortOn]?.toLowerCase() || null // Handle streamTitle as a string, allow null
          : sortOn === 'streamDate'
          ? a[sortOn] ?? null // Allow null for streamDate
          : a[sortOn] ?? 0; // Assume numeric value for everything else

      const valB =
        sortOn === 'titles'
          ? b[sortOn]?.[0]?.toLowerCase() || ''
          : sortOn === 'streamTitle'
          ? b[sortOn]?.toLowerCase() || null
          : sortOn === 'streamDate'
          ? b[sortOn] ?? null
          : b[sortOn] ?? 0;

      // Move null values to the end of the array
      if (valA === null && valB !== null) return 1;
      if (valB === null && valA !== null) return -1;

      // Compare the values normally
      return (valA > valB ? 1 : valA < valB ? -1 : 0) * order;
    });

  console.log(filteredEpisodes[0]);

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

  return (
    <div className="tableContainer">
      {filteredEpisodes
        .filter((episode) => {
          const searchTermLower = searchTerm.toLowerCase(); // Case-insensitive search

          // Filtering logic
          const titleMatch = episode.titles.some((title) =>
            title.toLowerCase().includes(searchTermLower)
          );
          const streamTitleMatch =
            episode.streamTitle &&
            episode.streamTitle.toLowerCase().includes(searchTermLower);

          // Format both .date and .streamDate, and check against the search term
          const dateMatch =
            episode.date &&
            formatDate(episode.date).toLowerCase().includes(searchTermLower);
          const streamDateMatch =
            episode.streamDate &&
            formatDate(episode.streamDate)
              .toLowerCase()
              .includes(searchTermLower);

          return titleMatch || streamTitleMatch || dateMatch || streamDateMatch;
        })
        .map((episode, i) => {
          const isNewSeason = episode.season !== prevSeason;
          prevSeason = episode.season; // Update the prevSeason for the next iteration

          return (
            <React.Fragment key={i}>
              {isNewSeason && !searchTerm.length && !sortOn && (
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
