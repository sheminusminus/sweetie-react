export const colorProp = (props, propName, componentName) => {
  const compName = componentName || 'ANONYMOUS';

  const propVal = props[propName];

  if (propVal) {
    if (typeof propVal !== 'object') {
      return new Error(`${propName} in ${compName} expected type object, received ${typeof propVal}`);
    } else {
      const { red, green, blue } = propVal;
      if (
        typeof red !== 'number'
        || typeof green !== 'number'
        || typeof blue !== 'number') {
        return new Error(`${propName} in ${compName} expected properties red, green, and blue to be numbers`);
      }
    }
  }

  return null;
};

export const frameProp = (props, propName, componentName) => {
  const compName = componentName || 'ANONYMOUS';

  const propVal = props[propName];

  if (propVal) {
    if (typeof propVal !== 'object') {
      return new Error(`${propName} in ${compName} expected type object, received ${typeof propVal}`);
    } else {
      const { x, y, width, height } = propVal;
      if (
        typeof x !== 'number'
        || typeof y !== 'number'
        || typeof width !== 'number'
        || typeof height !== 'number'
      ) {
        return new Error(`${propName} in ${compName} expected properties x, y, width, and height to be numbers`);
      }
    }
  }

  return null;
};

export const layerProp = (props, propName, componentName) => {
  const compName = componentName || 'ANONYMOUS';
  const allowedKeys = [
    'borderColor',
    'borderWidth',
    'cornerRadius',
    'shadowColor',
    'shadowOpacity',
    'shadowOffset',
    'shadowRadius',
  ];

  const propVal = props[propName];

  if (propVal) {
    if (typeof propVal !== 'object') {
      return new Error(`${propName} in ${compName} expected type object, received ${typeof propVal}`);
    } else {
      const keys = Object.keys(propVal);
      const disallowed = keys.filter(key => !allowedKeys.includes(key));
      if (disallowed.length) {
        return new Error(`${propName} in ${compName} received unexpected keys in ${propName} prop`);
      }
    }
  }

  return null;
};

export const segmentItemsProp = (props, propName, componentName) => {
  const compName = componentName || 'ANONYMOUS';
  const allowedKeys = [
    'title',
    'image',
    'enabled',
  ];

  const propVal = props[propName];

  if (propVal) {
    if (!Array.isArray(propVal)) {
      return new Error(`${propName} in ${compName} expected type array, received ${typeof propVal}`);
    } else if (typeof propVal[0] !== 'object') {
      return new Error(`${propName} in ${compName} expected array elements to be objects, received ${typeof propVal[0]}`);
    } else {
      const keys = Object.keys(propVal);
      const disallowed = keys.filter(key => !allowedKeys.includes(key));
      if (disallowed.length) {
        return new Error(`${propName} in ${compName} received unexpected keys in ${propName} prop`);
      }
    }
  }

  return null;
};

export const targetActionEventsProp = (props, propName, componentName) => {
  const compName = componentName || 'ANONYMOUS';

  const propVal = props[propName];

  if (propVal) {
    if (!Array.isArray(propVal)) {
      return new Error(`${propName} in ${compName} expected type array, received ${typeof propVal}`);
    } else if (propVal.length !== 2) {
      return new Error(`${propName} in ${compName} expected length of ${propName} to be 2, received ${propVal.length}`);
    } else if (typeof propVal[0] !== 'function') {
      return new Error(`${propName} in ${compName} expected first element of ${propName} to be a function, received ${typeof propVal[0]}`);
    } else if (typeof propVal[1] !== 'number') {
      return new Error(`${propName} in ${compName} expected first element of ${propName} to be a UIControlEvent, received ${typeof propVal[1]}`);
    }
  }

  return null;
};

export const targetActionProp = (props, propName, componentName) => {
  const compName = componentName || 'ANONYMOUS';

  const propVal = props[propName];

  if (propVal) {
    if (typeof propVal !== 'function') {
      return new Error(`${propName} in ${compName} expected type function, received ${typeof propVal}`);
    }
  }

  return null;
};

export const tabBarProp = (props, propName, componentName) => {
  const compName = componentName || 'ANONYMOUS';
  const allowedKeys = [
    'backgroundColor',
    'barTintColor',
    'tintColor',
    'unselectedItemTintColor',
  ];

  const propVal = props[propName];

  if (propVal) {
    if (typeof propVal !== 'object') {
      return new Error(`${propName} in ${compName} expected type object, received ${typeof propVal}`);
    } else {
      const keys = Object.keys(propVal);
      const disallowed = keys.filter(key => !allowedKeys.includes(key));
      if (disallowed.length) {
        return new Error(`${propName} in ${compName} received unexpected keys in ${propName} prop`);
      }
    }
  }

  return null;
};
