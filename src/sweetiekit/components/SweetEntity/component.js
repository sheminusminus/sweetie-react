import React from 'react';
import PropTypes from 'prop-types';

import SweetComponent from '../SweetComponent';

/**
 * Base internal component.
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

  ref = React.createRef();

  api = () => {
    if (this.ref.current) {
      if (typeof this.ref.current.api === 'function') {
        return this.ref.current.api();
      }

      return this.ref.current;
    }

    return undefined;
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
        type={type}
      >
        {children}
      </sweet-entity>
    );
  }
}

export default SweetEntity;
