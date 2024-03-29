import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SkNode from '../SkNode';
import SweetComponent from '../SweetComponent';

/**
 * SkNode
 */
class SkSpriteNode extends SweetComponent {
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
      <SkNode
        {...rest}
        baseTypes={baseTypes}
        ref={this.ref}
        type={type}
      >
        {children}
      </SkNode>
    )
  }
}

export default SkSpriteNode;
