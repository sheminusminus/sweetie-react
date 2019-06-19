import React from 'react';


class TapGestureRecognizer extends React.Component {
  render() {
    const {
      target,
    } = this.props;

    return (
      <ui-tap-gesture-recognizer
        target={target}
      />
    )
  }
}


export default TapGestureRecognizer;
