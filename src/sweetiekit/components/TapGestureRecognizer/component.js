import React from 'react';

import { propTypes, types } from '../../utils';

import GestureRecognizer from '../GestureRecognizer';
import SweetComponent from '../SweetComponent';

class TapGestureRecognizer extends SweetComponent {
  static propTypes = {
    target: propTypes.targetActionProp,
  };

  static defaultProps = {
    target: undefined,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <GestureRecognizer
        {...rest}
        ref={this.ref}
        type={types.tapGestureRecognizer}
      />
    )
  }
}

export default TapGestureRecognizer;
