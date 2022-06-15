/**
 * @param {string} str date string
 */
const strToHnM = (str: string): string => {
  const a = str.split(/:| /);
  a.splice(2, 1);
  return a[0] + ":" + a[1] + " " + a[2];
};

export { strToHnM };
