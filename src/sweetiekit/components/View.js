import React from 'react';

import { view } from '../utils/types';


class View extends React.Component {
  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <ui-view
        {...rest}
        baseTypes={baseTypes || [view]}
        type={type || view}
      >
        {children}
      </ui-view>
    )
  }
}


export default View;
