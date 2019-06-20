import React from 'react';

import { imageView } from '../utils/types';

import View from './View';


class ImageView extends React.Component {
  render() {
    const {
      image,
      children,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        image={image}
        type={imageView}
      >
        {children}
      </View>
    )
  }
}


export default ImageView;
