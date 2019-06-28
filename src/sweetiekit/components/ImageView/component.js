import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import View from '../View';

class ImageView extends React.Component {
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

  #ref = React.createRef();

  get api() { return this.#ref.current; }

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        type={types.imageView}
        ref={this.#ref}
      >
        {children}
      </View>
    )
  }
}

export default ImageView;
