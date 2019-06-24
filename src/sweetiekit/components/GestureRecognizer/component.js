import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, types } from '../../utils';

import BaseGestureRecognizer from '../BaseGestureRecognizer';

class GestureRecognizer extends React.Component {
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    target: propTypes.targetActionProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.gestureRecognizer],
    target: undefined,
    type: types.gestureRecognizer,
  };

  render() {
    const {
      baseTypes,
      type,
      ...rest
    } = this.props;

    return (
      <BaseGestureRecognizer
        {...rest}
        baseTypes={baseTypes}
        type={type}
      />
    )
  }
}

export default GestureRecognizer;
