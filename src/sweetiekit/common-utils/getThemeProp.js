export default (theme, key, prop) => {
  if (theme && theme[key] && theme[key][prop]) {
    return theme[key][prop];
  }
  return undefined;
};
