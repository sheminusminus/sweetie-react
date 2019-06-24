import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import ViewController from '../ViewController';

class TabBarController extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <ViewController
        {...rest}
        type={types.tabBarController}
      >
        {children}
      </ViewController>
    )
  }
}

export default TabBarController;
