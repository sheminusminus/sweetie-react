import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

class UiScrollView extends SweetComponent {
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

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <UiView
        {...rest}
        ref={this.ref}
        type={types.scrollView}
      >
        {children}
      </UiView>
    )
  }
}

export default UiScrollView;
