import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import UiControl from '../UiControl';
import SweetComponent from '../SweetComponent';

class UiTextField extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    font: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    numberOfLines: PropTypes.number,
    target: propTypes.targetActionEventsProp,
    text: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.textField, types.view],
    frame: undefined,
    layer: undefined,
    numberOfLines: 1,
    target: undefined,
    text: '',
    type: types.textField,
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

export default UiTextField;
