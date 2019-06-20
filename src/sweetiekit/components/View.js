import React from 'react';


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
        baseTypes={baseTypes || ['ui-view']}
        type={type || 'ui-view'}
      >
        {children}
      </ui-view>
    )
  }
}


export default View;
