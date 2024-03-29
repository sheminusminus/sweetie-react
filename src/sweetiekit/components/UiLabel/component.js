import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';
import { UIKit } from '../../enums';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

class UiLabel extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    font: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    text: PropTypes.string,
    textAlignment: PropTypes.any,
    textColor: propTypes.colorProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.label, types.view],
    children: undefined,
    frame: undefined,
    layer: undefined,
    text: '',
    textAlignment: UIKit.NSTextAlignment.left,
    type: types.label,
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

export default UiLabel;
