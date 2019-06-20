// @flow

import React from 'react';

import type { BaseProps } from '../sharedTypes';

import { gestureRecognizer } from '../../utils/types';


class GestureRecognizer extends React.Component<BaseProps> {
  render() {
    const {
      baseTypes,
      type,
      ...rest
    } = this.props;

    return (
      <ui-gesture-recognizer
        {...rest}
        baseTypes={baseTypes || [gestureRecognizer]}
        type={type || gestureRecognizer}
      />
    )
  }
}


export default GestureRecognizer;
