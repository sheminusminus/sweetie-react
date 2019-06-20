// @flow

import React from 'react';

import BaseGestureRecognizer from '../BaseGestureRecognizer';

type GestureRecognizerProps = {
  baseTypes?: string[],
  type?: string,
};

class GestureRecognizer extends React.Component<GestureRecognizerProps> {
  static defaultProps: GestureRecognizerProps = {
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
