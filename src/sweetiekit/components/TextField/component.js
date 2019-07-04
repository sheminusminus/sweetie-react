import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import Control from '../Control';
import SweetComponent from '../SweetComponent';

class TextField extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    font: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    numberOfLines: PropTypes.number,
    target: propTypes.targetActionEventsProp,
    text: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    frame: undefined,
    layer: undefined,
    numberOfLines: 1,
    target: undefined,
    text: '',
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        ref={this.ref}
        type={types.textField}
      />
    )
  }
}

export default TextField;
