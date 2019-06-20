// @flow

import React from 'react';

import GestureRecognizer from '../GestureRecognizer';

type TapGestureRecognizerProps = {
  type?: string,
};

class TapGestureRecognizer extends React.Component<TapGestureRecognizerProps> {
  static defaultProps: TapGestureRecognizerProps = {
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
