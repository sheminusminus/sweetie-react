import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import UiView from '../UiView';
import SweetComponent from '../SweetComponent';

/**
 * UiPickerView
 */
class UiPickerView extends SweetComponent {
  static propTypes = {
    alpha: PropTypes.number,
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    dataSource: PropTypes.any,
    delegate: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    alpha: 1,
    backgroundColor: colors.white,
    baseTypes: [types.pickerView, types.view],
    children: undefined,
    dataSource: undefined,
    delegate: undefined,
    frame: undefined,
    layer: undefined,
    type: types.pickerView,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <UiView
        {...rest}
        baseTypes={baseTypes}
        ref={this.ref}
        type={type}
      >
        {children}
      </UiView>
    )
  }
}

export default UiPickerView;
