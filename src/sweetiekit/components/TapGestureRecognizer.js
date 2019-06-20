import React from 'react';

import { tapGestureRecognizer } from '../utils/types';

import GestureRecognizer from './GestureRecognizer';


class TapGestureRecognizer extends React.Component {
  render() {
    const {
      target,
    } = this.props;

    return (
      <GestureRecognizer
        target={target}
        type={tapGestureRecognizer}
      />
    )
  }
}


export default TapGestureRecognizer;
