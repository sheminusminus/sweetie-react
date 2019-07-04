import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import UiControl from '../UiControl';
import SweetComponent from '../SweetComponent';

class UiSlider extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    continuous: PropTypes.bool,
    currentThumbImage: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    thumbTintColor: propTypes.colorProp,
    type: PropTypes.string,
    value: PropTypes.number,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.slider, types.control, types.view],
    continuous: false,
    currentThumbImage: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    thumbTintColor: undefined,
    value: 0,
    type: types.slider,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <UiControl
        {...rest}
        baseTypes={baseTypes}
        ref={this.ref}
        type={type}
      />
    )
  }
}

export default UiSlider;
