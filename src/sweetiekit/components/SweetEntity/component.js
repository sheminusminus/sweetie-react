import React from 'react';
import PropTypes from 'prop-types';

import SweetComponent from '../SweetComponent';

/**
 * Base internal component.
 * @class
 * @augments SweetComponent
 */
class SweetEntity extends SweetComponent {
  static propTypes = {
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    baseTypes: undefined,
    children: undefined,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <sweet-entity
        {...rest}
        baseTypes={baseTypes || [type]}
        ref={this.ref}
        type={type}
      >
        {children}
      </sweet-entity>
    );
  }
}

export default SweetEntity;
