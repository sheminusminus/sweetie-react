import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import UiControl from '../UiControl';
import SweetComponent from '../SweetComponent';

/**
 * Renders a Control of type ui-segmented-control.
 * @see https://developer.apple.com/documentation/uikit/uisegmentedcontrol?language=swift
 */
class UiSegmentedControl extends SweetComponent {
  /**
   * @type {{backgroundColor: Color, children: *, layer: Layer, frame: Frame, target: Target}}
   */
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    items: PropTypes.arrayOf(UITabBarItem),
    layer: propTypes.layerProp,
    selectedSegmentIndex: PropTypes.number,
    target: propTypes.targetActionEventsProp,
    tintColor: propTypes.colorProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.segmentedControl, types.control, types.view],
    children: undefined,
    frame: undefined,
    items: [],
    layer: undefined,
    target: undefined,
    selectedSegmentIndex: undefined,
    tintColor: undefined,
    type: types.segmentedControl,
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
        ref={this.ref}
        type={type}
      />
    )
  }
}

export default UiSegmentedControl;
