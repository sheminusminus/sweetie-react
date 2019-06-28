import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import BaseControl from '../BaseControl';

class Control extends React.Component {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    target: propTypes.targetActionEventsProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    baseTypes: [types.control, types.view],
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    layer: undefined,
    target: undefined,
    type: types.control,
  };

  #ref = React.createRef();

  get api() { return this.#ref.current; }

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <BaseControl
        {...rest}
        baseTypes={baseTypes}
        type={type}
        ref={this.#ref}
      >
        {children}
      </BaseControl>
    )
  }
}

export default Control;
