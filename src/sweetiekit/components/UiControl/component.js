import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import BaseControl from '../BaseControl';
import SweetComponent from '../SweetComponent';

class UiControl extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.control, types.view],
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    type: types.control,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <BaseControl
        {...rest}
        baseTypes={baseTypes}
        type={type}
        ref={this.ref}
      >
        {children}
      </BaseControl>
    )
  }
}

export default UiControl;
