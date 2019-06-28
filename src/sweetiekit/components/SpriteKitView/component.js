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

  _ref = React.createRef();

  get api() { return this._ref.current; }

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
        ref={this._ref}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </View>
    )
  }
}

export default SpriteKitView;
