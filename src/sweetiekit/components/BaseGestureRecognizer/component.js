import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, types } from '../../utils';

/**
 * Internal component that renders a ui-gesture-recognizer.
 * @see https://developer.apple.com/documentation/uikit/uigesturerecognizer?language=swift
 */
class BaseGestureRecognizer extends React.Component {
  /**
   * @type {{baseTypes: string[], type: string}}
   */
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    target: propTypes.targetActionProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.gestureRecognizer],
    target: undefined,
    type: types.gestureRecognizer,
  };

  _ref = React.createRef();

  get api() { return this._ref.current; }

  render() {
    const {
      baseTypes,
      type,
      ...rest
    } = this.props;

    return (
      <ui-gesture-recognizer
        {...rest}
        baseTypes={baseTypes}
        type={type}
        ref={this._ref}
      />
    )
  }
}

export default BaseGestureRecognizer;
