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

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <SpriteKitNode
        {...rest}
        type={types.skScene}
      >
        {children}
      </SpriteKitNode>
    )
  }
}

export default SpriteKitScene;
