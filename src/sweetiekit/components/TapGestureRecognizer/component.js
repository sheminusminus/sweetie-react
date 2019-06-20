import React from 'react';

import { tapGestureRecognizer } from '../../utils/types';

import GestureRecognizer from '../GestureRecognizer';


class TapGestureRecognizer extends React.Component {
  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <GestureRecognizer
        {...rest}
        type={tapGestureRecognizer}
      />
    )
  }
}


export default TapGestureRecognizer;
