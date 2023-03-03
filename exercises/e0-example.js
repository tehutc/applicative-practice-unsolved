import { data } from "../data/data";

// SPACE DATA SAMPLE EXERCISE 0
// Return the name of the first Planet in the array
// Return example: 'Planet Name'

export function getFirstPlanetName(data) {
  const planets = data.planets;
  return planets[0].name;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-0"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
