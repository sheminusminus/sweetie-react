import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

class UiImageView extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    image: PropTypes.instanceOf(UIImage),
    layer: propTypes.layerProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.imageView, types.view],
    children: undefined,
    frame: undefined,
    image: undefined,
    layer: undefined,
    type: types.imageView,
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
        type={type}
        ref={this.ref}
      >
        {children}
      </UiView>
    )
  }
}

export default UiImageView;
