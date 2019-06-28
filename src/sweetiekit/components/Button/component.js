import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import Control from '../Control';

/**
 * Renders a Control of type ui-button.
 * @see https://developer.apple.com/documentation/uikit/uibutton?language=swift
 */
class Button extends React.Component {
  /**
   * @type {{backgroundColor: Color, children: *, type: string, layer: Layer, frame: Frame, target: Target, title: string, titleColor: Color, titleLabel: Object}}
   */
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer:propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    title: PropTypes.string,
    titleColor: propTypes.colorProp,
    titleLabel: PropTypes.any,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    children: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    title: 'Press Me',
    titleColor: colors.black,
    titleLabel: undefined,
  };

  _ref = React.createRef();

  get api() { return this._ref.current; }

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={types.button}
        ref={this._ref}
      />
    )
  }
}

export default Button;
