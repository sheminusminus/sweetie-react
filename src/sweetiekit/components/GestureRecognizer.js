import React from 'react';

import { gestureRecognizer } from '../utils/types';


class GestureRecognizer extends React.Component {
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
