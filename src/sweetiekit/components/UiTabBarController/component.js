import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiViewController from '../UiViewController';

class UiTabBarController extends SweetComponent {
  static propTypes = {
    children: PropTypes.any,
    delegate: PropTypes.any,
    selectedIndex: PropTypes.number,
    tabBar: propTypes.tabBarProp,
  };

  static defaultProps = {
    children: undefined,
    delegate: undefined,
    selectedIndex: undefined,
    tabBar: undefined,
  };

  render() {
    const {
      children,
      delegate,
      ...rest
    } = this.props;

    return (
      <UiViewController
        {...rest}
        baseTypes={[types.tabBarController, types.viewController]}
        delegate={delegate}
        ref={this.ref}
        type={types.tabBarController}
      >
        {children}
      </UiViewController>
    )
  }
}

export default UiTabBarController;
