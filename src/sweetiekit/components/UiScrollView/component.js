import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

class UiScrollView extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.scrollView, types.view],
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: types.scrollView,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <UiView
        {...rest}
        baseTypes={baseTypes}
        ref={this.ref}
        type={type}
      >
        {children}
      </UiView>
    )
  }
}

export default UiScrollView;
