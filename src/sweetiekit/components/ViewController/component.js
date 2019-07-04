import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import BaseViewController from '../BaseViewController';
import SweetComponent from '../SweetComponent';

class ViewController extends SweetComponent {
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    tabBarItem: PropTypes.instanceOf(UITabBarItem),
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.viewController],
    children: undefined,
    tabBarItem: undefined,
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
      <BaseViewController
        {...rest}
        baseType={baseTypes}
        ref={this.ref}
        type={type}
      >
        {children}
      </BaseViewController>
    )
  }
}

export default ViewController;
