import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import Control from '../Control';

class Switch extends React.Component {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    on: PropTypes.bool,
    onTintColor: propTypes.colorProp,
    target: propTypes.targetActionEventsProp,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    frame: undefined,
    layer: undefined,
    on: false,
    onTintColor: undefined,
    target: undefined,
  };

  #ref = React.createRef();

  get api() { return this.#ref.current; }

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Control
        {...rest}
        ref={this.#ref}
        type={types.uiSwitch}
      />
    )
  }
}

export default Switch;
