import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import Control from '../Control';

/**
 * Renders a Control of type ui-segmented-control.
 * @see https://developer.apple.com/documentation/uikit/uisegmentedcontrol?language=swift
 */
class SegmentedControl extends React.Component {
  /**
   * @type {{backgroundColor: Color, children: *, layer: Layer, frame: Frame, target: Target}}
   */
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    frame: propTypes.frameProp,
    items: propTypes.segmentItemsProp,
    layer: propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    tintColor: propTypes.colorProp,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    items: [],
    layer: undefined,
    target: undefined,
    tintColor: undefined,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        type={types.segmentedControl}
      />
    )
  }
}

export default SegmentedControl;