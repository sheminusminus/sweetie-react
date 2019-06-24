import * as props from './propKeys';


export default (
  domElement,
  type,
  oldProps,
  newProps,
  rootContainerInstance,
  hostContext,
) => {
  const propKeys = new Set(
    Object.keys(newProps).concat(
      Object.keys(oldProps)
    )
  ).values();

  const payload = [];

  for (let key of propKeys) {
    if (
      // text children are already handled
      key !== props.children
      && oldProps[key] !== newProps[key]
    ) {
      payload.push({ [key]: newProps[key] })
    }
  }

  return payload;
};
