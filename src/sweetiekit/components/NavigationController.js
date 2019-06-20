import React from 'react';


class NavigationController extends React.Component {
  render() {
    const {
      viewControllers,
    } = this.props;

    return (
      <ui-navigation-controller
        viewControllers={viewControllers}
      />
    )
  }
}


export default NavigationController;
