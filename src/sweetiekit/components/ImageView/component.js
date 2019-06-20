// @flow

import React from 'react';

import View from '../View';

import type { Color, Frame, Layer } from '../sharedTypes';

type ImageViewProps = {
  children?: any,
  image?: any,
  backgroundColor?: Color,
  frame?: Frame,
  layer?: Layer,
  type?: string,
};

class ImageView extends React.Component<ImageViewProps> {
  static defaultProps: ImageViewProps = {
    type: 'ui-image-view',
  };

  render() {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default ImageView;
