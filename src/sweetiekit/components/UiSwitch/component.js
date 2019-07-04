import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import UiControl from '../UiControl';
import SweetComponent from '../SweetComponent';

class UiSwitch extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    on: PropTypes.bool,
    onTintColor: propTypes.colorProp,
    target: propTypes.targetActionEventsProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.uiSwitch, types.control, types.view],
    frame: undefined,
    layer: undefined,
    on: false,
    onTintColor: undefined,
    target: undefined,
    type: types.uiSwitch,
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

export default UiSwitch;
