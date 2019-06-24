import React from 'react';
import PropTypes from 'prop-types';

import GestureRecognizer from '../GestureRecognizer';

class TapGestureRecognizer extends React.Component {
  static propTypes = {
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    type: PropTypes.string,
  };

  static defaultProps = {
    target: undefined,
    type: 'ui-gesture-recognizer',
  };

  render() {
    const {
      type,
      ...rest
    } = this.props;

    return (
      <GestureRecognizer
        {...rest}
        type={type}
      />
    )
  }
}

export default TapGestureRecognizer;
