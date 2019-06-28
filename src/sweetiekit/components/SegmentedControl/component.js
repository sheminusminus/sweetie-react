import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import Control from '../Control';

import { UITabBarItem } from '../TabBarItem';

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
    items: PropTypes.arrayOf(PropTypes.shape()),
    layer: propTypes.layerProp,
    selectedSegmentIndex: PropTypes.number,
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
    selectedSegmentIndex: undefined,
    tintColor: undefined,
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
        ref={this._ref}
        type={types.segmentedControl}
      />
    )
  }
}

export default SegmentedControl;
