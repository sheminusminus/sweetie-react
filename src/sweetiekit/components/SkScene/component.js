import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SkNode from '../SkNode';
import SweetComponent from '../SweetComponent';

/**
 * SkScene
 */
class SkScene extends SweetComponent {
  /**
   * @type {{children: *}}
   */
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    size: propTypes.sizeProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    baseTypes: [types.skScene, types.skNode, types.responder],
    children: undefined,
    size: undefined,
    type: types.skScene,
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

export default SkScene;
