// @flow

import React from 'react';

import { view } from '../../utils/types';

import type { ViewProps } from './types';


class View extends React.Component<ViewProps> {
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
