// @flow

import React from 'react';

import type { ImageViewProps } from './types';

import { imageView } from '../../utils/types';

import View from '../View';


class ImageView extends React.Component<ImageViewProps> {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={imageView}
      >
        {children}
      </View>
    )
  }
}


export default ImageView;
