// @flow

import React from 'react';

type GestureRecognizerProps = {
  baseTypes?: string[],
  type?: string,
};

class BaseGestureRecognizer extends React.Component<GestureRecognizerProps> {
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
      <ui-gesture-recognizer
        {...rest}
        baseTypes={baseTypes}
        type={type}
      />
    )
  }
}

export default BaseGestureRecognizer;
