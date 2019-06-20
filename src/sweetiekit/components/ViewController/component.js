// @flow

import React from 'react';

type ViewControllerProps = {
  baseTypes?: string[],
  children?: any,
  type?: string,
};

class ViewController extends React.Component<ViewControllerProps> {
  static defaultProps: ViewControllerProps = {
    baseTypes: ['ui-view-controller'],
    type: 'ui-view-controller',
  };

  render() {
    const {
      children,
      baseTypes,
      type,
      ...rest
    } = this.props;

    return (
      <ui-view-controller
        {...rest}
        baseType={baseTypes}
        type={type}
      >
        {children}
      </ui-view-controller>
    )
  }
}

export default ViewController;
