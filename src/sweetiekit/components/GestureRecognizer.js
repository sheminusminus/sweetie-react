import React from 'react';

import { gestureRecognizer } from '../utils/types';


class GestureRecognizer extends React.Component {
  render() {
    const {
      target,
      baseTypes,
      type,
    } = this.props;

    return (
      <ui-gesture-recognizer
        target={target}
        baseTypes={baseTypes || [gestureRecognizer]}
        type={type || gestureRecognizer}
      />
    )
  }
}


export default GestureRecognizer;
