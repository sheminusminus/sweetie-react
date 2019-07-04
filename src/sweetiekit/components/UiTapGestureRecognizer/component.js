import React from 'react';

import { propTypes, types } from '../../utils';

import UiGestureRecognizer from '../UiGestureRecognizer';
import SweetComponent from '../SweetComponent';

class UiTapGestureRecognizer extends SweetComponent {
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
      <UiGestureRecognizer
        {...rest}
        ref={this.ref}
        type={types.tapGestureRecognizer}
      />
    )
  }
}

export default UiTapGestureRecognizer;
