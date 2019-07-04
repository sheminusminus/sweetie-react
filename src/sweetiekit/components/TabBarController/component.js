import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import ViewController from '../ViewController';

class TabBarController extends SweetComponent {
  static propTypes = {
    children: PropTypes.any,
    selectedIndex: PropTypes.number,
    tabBar: propTypes.tabBarProp,
  };

  static defaultProps = {
    children: undefined,
    selectedIndex: undefined,
    tabBar: undefined,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <ViewController
        {...rest}
        ref={this.ref}
        type={types.tabBarController}
      >
        {children}
      </ViewController>
    )
  }
}

export default TabBarController;
