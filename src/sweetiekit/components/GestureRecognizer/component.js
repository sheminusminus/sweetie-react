import React from 'react';
import PropTypes from 'prop-types';

import BaseGestureRecognizer from '../BaseGestureRecognizer';

class GestureRecognizer extends React.Component {
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: ['ui-gesture-recognizer'],
    type: 'ui-gesture-recognizer',
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
