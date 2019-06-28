import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import BaseResponder from '../BaseResponder';

/**
 * Component that creates a BaseResponder.
 * @see https://developer.apple.com/documentation/spritekit/sknode?language=swift
 */
class SKNode extends React.Component {
  /**
   * @type {{children: *, baseTypes: string[]}}
   */
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.skNode, types.responder],
    children: undefined,
    type: types.skNode,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <BaseResponder
        {...rest}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </BaseResponder>
    )
  }
}

export default SKNode;
