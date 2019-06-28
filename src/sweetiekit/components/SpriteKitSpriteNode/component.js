import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SpriteKitNode from '../SpriteKitNode';

/**
 * SpriteKitNode
 */
class SpriteKitSpriteNode extends React.Component {
  /**
   * @type {{baseTypes: string[], children: *, type: string}}
   */
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    color: propTypes.colorProp,
    image: PropTypes.shape(),
    position: propTypes.pointProp,
    size: propTypes.sizeProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.skNode, types.responder],
    children: undefined,
    color: colors.white,
    image: undefined,
    position: undefined,
    size: undefined,
    type: types.skSpriteNode,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <SpriteKitNode
        {...rest}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </SpriteKitNode>
    )
  }
}

export default SpriteKitSpriteNode;
