import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils';

import BaseControl from '../BaseControl';

class Control extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    children: PropTypes.any,
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: ['ui-control', 'ui-view'],
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    type: 'ui-control',
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <BaseControl
        {...rest}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </BaseControl>
    )
  }
}

export default Control;
