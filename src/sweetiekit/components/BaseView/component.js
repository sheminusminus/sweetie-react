import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';

/**
 * Internal component that renders a UIView.
 * @see https://developer.apple.com/documentation/uikit/uiview?language=swift
 */
class BaseView extends SweetComponent {
  /**
   * @type {{backgroundColor: Color, children: *, baseTypes: string[], type: string, layer: Layer, frame: Frame}}
   */
  static propTypes = {
    alpha: PropTypes.number,
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    alpha: 1,
    backgroundColor: colors.clear,
    baseTypes: [types.view],
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: types.view,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <ui-view
        {...rest}
        baseTypes={baseTypes}
        type={type}
        ref={this.ref}
      >
        {children}
      </ui-view>
    )
  }
}

export default BaseView;
