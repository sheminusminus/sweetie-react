import React from 'react';
import PropTypes from 'prop-types';

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
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: ['ui-gesture-recognizer'],
    type: 'ui-gesture-recognizer',
  };

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
      />
    )
  }
}

export default BaseGestureRecognizer;
