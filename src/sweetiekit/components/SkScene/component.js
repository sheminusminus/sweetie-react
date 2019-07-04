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
      <SkNode
        {...rest}
        ref={this.ref}
        type={types.skScene}
      >
        {children}
      </SkNode>
    )
  }
}

export default SkScene;
