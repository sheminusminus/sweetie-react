import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

import Control from '../Control';

/**
 * Renders a Control of type ui-button.
 * @see https://developer.apple.com/documentation/uikit/uibutton?language=swift
 */
class Button extends React.Component {
  /**
   * @type {{backgroundColor: Color, children: *, type: string, layer: Layer, frame: Frame, target: Target}}
   */
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    children: PropTypes.any,
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    type: PropTypes.string,
  };

  /**
   * @type {{backgroundColor: {red: 1, green: 1, blue: 1, alpha: 1}, children: undefined, type: 'ui-button', layer: undefined, frame: undefined, target: undefined}}
   */
  static defaultProps = {
    backgroundColor: colors.white,
    children: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    type: 'ui-button',
  };

  render() {
    const {
      children,
      type,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={type}
      />
    )
  }
}

export default Button;
