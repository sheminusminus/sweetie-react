import React from 'react';
import PropTypes from 'prop-types';

import { types } from '../../utils';

import BaseViewController from '../BaseViewController';

class ViewController extends React.Component {
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
      <BaseViewController
        {...rest}
        baseType={baseTypes}
        type={type}
      >
        {children}
      </BaseViewController>
    )
  }
}

export default ViewController;
