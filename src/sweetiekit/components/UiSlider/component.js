import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import UiControl from '../UiControl';
import SweetComponent from '../SweetComponent';

class UiSlider extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    continuous: PropTypes.bool,
    currentThumbImage: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    thumbTintColor: propTypes.colorProp,
    value: PropTypes.number,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    continuous: false,
    currentThumbImage: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    thumbTintColor: undefined,
    value: 0,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <UiControl
        {...rest}
        ref={this.ref}
        type={types.slider}
      />
    )
  }
}

export default UiSlider;
