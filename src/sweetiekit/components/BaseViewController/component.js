import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

/**
 * Internal component that renders a ui-view-controller
 * @see https://developer.apple.com/documentation/uikit/uiviewcontroller?language=swift
 */
class BaseViewController extends React.Component {
  /**
   * @type {{children: *, baseTypes: string[], type: string}}
   */
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.viewController],
    children: undefined,
    type: types.viewController,
  };

  render() {
    const {
      children,
      baseTypes,
      type,
      ...rest
    } = this.props;

    return (
      <ui-view-controller
        {...rest}
        baseType={baseTypes}
        type={type}
      >
        {children}
      </ui-view-controller>
    )
  }
}

export default BaseViewController;
