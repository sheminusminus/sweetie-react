import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import SpriteKitNode from '../SpriteKitNode';

/**
 * SpriteKitScene
 */
class SpriteKitScene extends React.Component {
  /**
   * @type {{children: *}}
   */
  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: undefined,
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
