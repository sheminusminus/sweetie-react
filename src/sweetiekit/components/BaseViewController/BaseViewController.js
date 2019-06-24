import React from 'react';
import PropTypes from 'prop-types';

class BaseViewController extends React.Component {
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: ['ui-view-controller'],
    children: undefined,
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

export default BaseViewController;
