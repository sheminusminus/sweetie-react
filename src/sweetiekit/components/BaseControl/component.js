import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

/**
 * Internal component that renders a UiView of type ui-control.
 * @see https://developer.apple.com/documentation/uikit/uicontrol?language=swift
 */
class BaseControl extends SweetComponent {
  /**
   * @type {{backgroundColor: Color, baseTypes: string[], children: *, type: string, layer: Layer, frame: Frame, target: Target}}
   */
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.control, types.view],
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: types.control,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <UiView
        {...rest}
        baseTypes={baseTypes}
        type={type}
        ref={this.ref}
      >
        {children}
      </UiView>
    )
  }
}

export default BaseControl;
