import React from 'react';

import { propTypes, types } from '../../utils';

import GestureRecognizer from '../GestureRecognizer';

class TapGestureRecognizer extends React.Component {
  static propTypes = {
    target: propTypes.targetActionProp,
  };

  static defaultProps = {
    target: undefined,
  };

  #ref = React.createRef();

  get api() { return this.#ref.current; }

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <GestureRecognizer
        {...rest}
        type={types.tapGestureRecognizer}
        ref={this.#ref}
      />
    )
  }
}

export default TapGestureRecognizer;
