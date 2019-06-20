import React from 'react';

import { viewController } from '../../utils/types';


class ViewController extends React.Component {
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
