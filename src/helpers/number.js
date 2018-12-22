import _ from 'lodash';

export const getMinMaxFromObject = obj => {
  let highest = -Infinity;
  let lowest = Infinity;
  Object.entries(obj).forEach(([key, value]) => {
    let low = value['3. low'];
    let high = value['2. high'];

    if (Math.round(highest * 100) < Math.round(high * 100)) highest = high;
    if (Math.round(lowest * 100) > Math.round(low * 100)) lowest = low;
  });

  return {
    highest,
    lowest
  };
};

export const getPriceRange = (lowest, highest, count) => {
  const roundedLowest = Math.round(lowest);
  const roundedHighest = Math.round(highest);

  const step = (highest - lowest) / count;
  return _.range(roundedLowest, roundedHighest + step, step).reverse();
};

export const getMovement = (lowest, highest, low, high, open, close) => {
  const maxHeight = 500;
  const highestHeight = convertRange(high, [lowest, highest], [0, maxHeight]);
  const lowestHeight = convertRange(low, [lowest, highest], [0, maxHeight]);
  const openHeight = convertRange(open, [lowest, highest], [0, maxHeight]);
  const closeHeight = convertRange(close, [lowest, highest], [0, maxHeight]);

  const height = highestHeight - lowestHeight;

  return {
    maxHeight,
    height,
    highestHeight,
    lowestHeight,
    openHeight,
    closeHeight,
    isBull: open < close
  };
};

const convertRange = (value, r1, r2) => {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
};
