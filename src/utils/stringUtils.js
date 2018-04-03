// eslint-disable-next-line import/prefer-default-export
export const replaceAtIdx = (str, idx, replacement) => str.substr(0, idx)
 + replacement + str.substr(idx + 1)
