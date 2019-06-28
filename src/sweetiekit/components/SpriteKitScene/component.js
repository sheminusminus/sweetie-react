import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SpriteKitNode from '../SpriteKitNode';

/**
 * SpriteKitScene
 */
class SpriteKitScene extends React.Component {
  /**
   * @type {{children: *}}
   */
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    size: propTypes.sizeProp,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    children: undefined,
    size: undefined,
  };

  _ref = React.createRef();

  get api() { return this._ref.current; }

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <SpriteKitNode
        {...rest}
        ref={this._ref}
        type={types.skScene}
      >
        {children}
      </SpriteKitNode>
    )
  }
}

export default SpriteKitScene;
