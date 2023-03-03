export function minBy(array, callback) {
    if (!array.length) {
      return undefined;
    }
  
    let minValue = callback(array[0]);
    let minIndex = 0;
  
    for (let i = 1; i < array.length; i++) {
      const value = callback(array[i]);
  
      if (value < minValue || (value === minValue && i < minIndex)) {
        minValue = value;
        minIndex = i;
      }
    }
  
    return array[minIndex];
  }
  
  export function maxBy(array, callback) {
    if (!array.length) {
      return undefined;
    }
  
    let maxValue = callback(array[0]);
    let maxIndex = 0;
  
    for (let i = 1; i < array.length; i++) {
      const value = callback(array[i]);
  
      if (value > maxValue || (value === maxValue && i < maxIndex)) {
        maxValue = value;
        maxIndex = i;
      }
    }
    return array[maxIndex];
}