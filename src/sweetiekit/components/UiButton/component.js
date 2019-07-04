import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import UiControl from '../UiControl';
import SweetComponent from '../SweetComponent';

/**
 * Renders a Control of type ui-button.
 * @see https://developer.apple.com/documentation/uikit/uibutton?language=swift
 */
class UiButton extends SweetComponent {
  /**
   * @type {{backgroundColor: Color, children: *, type: string, layer: Layer, frame: Frame, target: Target, title: string, titleColor: Color, titleLabel: Object}}
   */
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer:propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    title: PropTypes.string,
    titleColor: propTypes.colorProp,
    titleLabel: PropTypes.any,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    baseTypes: [types.button, types.control, types.view],
    children: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    title: 'Press Me',
    titleColor: colors.black,
    titleLabel: undefined,
    type: types.button,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <UiControl
        {...rest}
        baseTypes={baseTypes}
        type={type}
        ref={this.ref}
      />
    )
  }
}

export default UiButton;
