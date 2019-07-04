import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';
import { UIKit } from '../../enums';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

class UiLabel extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    font: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    text: PropTypes.string,
    textAlignment: PropTypes.any,
    textColor: propTypes.colorProp,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    layer: undefined,
    text: '',
    textAlignment: UIKit.NSTextAlignment.left,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <UiView
        {...rest}
        ref={this.ref}
        type={types.label}
      >
        {children}
      </UiView>
    )
  }
}

export default UiLabel;
