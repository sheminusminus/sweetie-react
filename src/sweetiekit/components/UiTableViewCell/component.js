import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SweetComponent from '../SweetComponent';
import UiView from '../UiView';

class UiTableViewCell extends SweetComponent {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node,
    contentView: PropTypes.node,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.clear,
    baseTypes: [types.tableViewCell, types.view],
    children: undefined,
    contentView: undefined,
    frame: undefined,
    layer: undefined,
    type: types.tableViewCell,
  };

  render() {
    const {
      baseTypes,
      children,
      contentView,
      type,
      ...rest
    } = this.props;

    const childCount = React.Children.count(children);

    return (
      <UiView
        {...rest}
        baseTypes={baseTypes}
        contentView={contentView || childCount === 1 ? children : undefined}
        ref={this.ref}
        type={type}
      />
    )
  }
}

export default UiTableViewCell;
