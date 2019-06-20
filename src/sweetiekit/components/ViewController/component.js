// @flow

import React from 'react';

import type { ViewControllerProps } from '../sharedTypes';

import { viewController } from '../../utils/types';


class ViewController extends React.Component<ViewControllerProps> {
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
        baseType={baseTypes || [viewController]}
        type={type || viewController}
      >
        {children}
      </ui-view-controller>
    )
  }
}


export default ViewController;
