import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import BaseViewController from '../BaseViewController';

class ViewController extends React.Component {
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

  _ref = React.createRef();

  api = () => this._ref.current;

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
        type={type}
        ref={this._ref}
      >
        {children}
      </BaseViewController>
    )
  }
}

export default ViewController;
