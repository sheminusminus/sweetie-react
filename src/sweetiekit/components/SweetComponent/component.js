import React from 'react';

/**
 * Base internal component.
 */
class SweetComponent extends React.Component {
  ref = React.createRef();

  api = () => {
    if (this.ref.current) {
      if (typeof this.ref.current.api === 'function') {
        return this.ref.current.api();
      }

      return this.ref.current;
    }

    return undefined;
  };

  render() {
    throw new Error('Classes extending SweetComponent must override render()');
  }
}

export default SweetComponent;
