import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

/**
 * Internal component that renders a UIView.
 * @see https://developer.apple.com/documentation/uikit/uiview?language=swift
 */
class BaseView extends React.Component {
  /**
   * @type {{backgroundColor: Color, children: *, baseTypes: string[], type: string, layer: Layer, frame: Frame}}
   */
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: ['ui-view'],
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: 'ui-view',
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
        baseTypes={baseTypes || [type]}
        type={type}
      >
        {children}
      </ui-view>
    )
  }
}

export default BaseView;
