import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import View from '../View';

class ScrollView extends React.Component {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    children: undefined,
    frame: undefined,
    layer: undefined,
  };

  _ref = React.createRef();

  api = () => this._ref.current;

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <View
        {...rest}
        ref={this._ref}
        type={types.scrollView}
      >
        {children}
      </View>
    )
  }
}

export default ScrollView;
