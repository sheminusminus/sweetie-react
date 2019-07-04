import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiScrollView from '../UiScrollView';

class UiTableView extends SweetComponent {
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
    baseTypes: [types.tableView, types.scrollView],
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: types.tableView,

  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <UiScrollView
        {...rest}
        baseTypes={baseTypes}
        ref={this.ref}
        type={type}
      >
        {children}
      </UiScrollView>
    )
  }
}

export default UiTableView;
