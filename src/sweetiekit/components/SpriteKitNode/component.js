import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import BaseResponder from '../BaseResponder';

/**
 * SpriteKitNode
 */
class SpriteKitNode extends React.Component {
  /**
   * @type {{baseTypes: string[], children: *, type: string}}
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

  _ref = React.createRef();

  api = () => this._ref.current;

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
        ref={this._ref}
      >
        {children}
      </BaseResponder>
    )
  }
}

export default SpriteKitNode;
