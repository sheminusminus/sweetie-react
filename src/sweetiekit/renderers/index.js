export default (platform) => {
  if (platform === 'ios') {
    return import('./ios');
  } else {
    return import('./web');
  }
};
