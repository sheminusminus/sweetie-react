import React from 'react';


class ViewController extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <ui-view-controller>
        {children}
      </ui-view-controller>
    )
  }
}


export default ViewController;
