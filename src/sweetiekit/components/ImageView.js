import React from 'react';

import { imageView } from '../utils/types';

import View from './View';


class ImageView extends React.Component {
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
