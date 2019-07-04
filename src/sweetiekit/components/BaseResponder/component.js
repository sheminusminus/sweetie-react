import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import SweetComponent from '../SweetComponent';

/**
 * Internal component that creates a UIResponder.
 * @see https://developer.apple.com/documentation/uikit/uiresponder?language=swift
 */
class BaseResponder extends SweetComponent {
  /**
   * @type {{children: *, baseTypes: string[]}}
   */
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.responder],
    children: undefined,
    type: types.responder,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <ui-responder
        {...rest}
        baseTypes={baseTypes}
        type={type}
        ref={this.ref}
      >
        {children}
      </ui-responder>
    )
  }
}

export default BaseResponder;
