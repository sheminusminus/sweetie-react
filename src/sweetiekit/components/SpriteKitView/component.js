import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import View from '../View';

/**
 * SpriteKitView
 */
class SpriteKitView extends React.Component {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    showsFPS: PropTypes.bool,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    baseTypes: [types.skView, types.view],
    children: undefined,
    frame: undefined,
    layer: undefined,
    showsFPS: false,
    type: types.skView,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default SpriteKitView;
