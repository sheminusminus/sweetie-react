import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, types } from '../../utils';

import ViewController from '../ViewController';

class TabBarController extends React.Component {
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

  _ref = React.createRef();

  api = () => this._ref.current;

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <ViewController
        {...rest}
        ref={this._ref}
        type={types.tabBarController}
      >
        {children}
      </ViewController>
    )
  }
}

export default TabBarController;
