import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiViewController from '../UiViewController';

class UiTabBarController extends SweetComponent {
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    delegate: PropTypes.any,
    selectedIndex: PropTypes.number,
    tabBar: propTypes.tabBarProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.tabBarController, types.viewController],
    children: undefined,
    delegate: undefined,
    selectedIndex: undefined,
    tabBar: undefined,
    type: types.tabBarController,
  };

  render() {
    const {
      baseTypes,
      children,
      delegate,
      type,
      ...rest
    } = this.props;

    return (
      <UiViewController
        {...rest}
        baseTypes={baseTypes}
        delegate={delegate}
        ref={this.ref}
        type={type}
      >
        {children}
      </UiViewController>
    )
  }
}

export default UiTabBarController;
