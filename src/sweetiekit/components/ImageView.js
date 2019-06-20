import React from 'react';

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
        type="ui-image-view"
      >
        {children}
      </View>
    )
  }
}


export default ImageView;
