import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';
import { UIKit } from '../../enums';

import View from '../View';

class Label extends React.Component {
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
      <View
        {...rest}
        type={types.label}
      >
        {children}
      </View>
    )
  }
}

export default Label;
