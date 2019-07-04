import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, types } from '../../utils';

import UiGestureRecognizer from '../UiGestureRecognizer';
import SweetComponent from '../SweetComponent';

class UiTapGestureRecognizer extends SweetComponent {
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    target: propTypes.targetActionProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.tapGestureRecognizer, types.gestureRecognizer],
    target: undefined,
    type: types.tapGestureRecognizer,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <UiGestureRecognizer
        {...rest}
        baseTypes={baseTypes}
        ref={this.ref}
        type={type}
      />
    )
  }
}

export default UiTapGestureRecognizer;
