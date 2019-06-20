// @flow

import React from 'react';

import type { GestureRecognizerProps } from '../sharedTypes';

import { tapGestureRecognizer } from '../../utils/types';

import GestureRecognizer from '../GestureRecognizer';


class TapGestureRecognizer extends React.Component<GestureRecognizerProps> {
  render() {
    return (
      <GestureRecognizer
        {...this.props}
        type={tapGestureRecognizer}
      />
    )
  }
}


export default TapGestureRecognizer;
