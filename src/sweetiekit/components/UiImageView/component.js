import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

class UiImageView extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    frame: propTypes.frameProp,
    image: PropTypes.instanceOf(UIImage),
    layer: propTypes.layerProp,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    image: undefined,
    layer: undefined,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <UiView
        {...rest}
        type={types.imageView}
        ref={this.ref}
      >
        {children}
      </UiView>
    )
  }
}

export default UiImageView;
