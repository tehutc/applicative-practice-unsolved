import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  let totalAverageTemp = 0;
  let averageTemp = 0;
  let planetCount = 0;
  data.planets.forEach((planet) => {
    totalAverageTemp += parseInt(planet.avgTemp ?? 0);
    planetCount++;
    averageTemp = totalAverageTemp / planetCount;
  });
  return averageTemp;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
