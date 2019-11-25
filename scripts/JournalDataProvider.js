/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
  {
      id: 1,
      date: "11/15/2019",
      concept: "HTML & CSS",
      entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Ok"
  },
  {
      id: 1,
      date: "11/22/2019",
      concept: "Javascript and automating",
      entry: "We discussed how we can automate HTML, and automate event listeners",
      mood: "sallright"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}