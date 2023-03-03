import { data } from "../data/data";
import { maxBy, minBy } from "../exercises/e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const yearCounts = data.asteroids.reduce((counts, asteroid) => {
    const year = asteroid.discoveryYear;
    counts[year] = (counts[year] || 0) + 1;
    return counts;
  }, {});

  const mostFrequentYear = Object.keys(yearCounts).reduce((a, b) => {
    return yearCounts[a] > yearCounts[b] ? a : b;
  });

  return parseInt(mostFrequentYear);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
