import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import BaseView from '../BaseView';

/**
 * View
 */
class View extends React.Component {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    baseTypes: [types.view],
    children: undefined,
    frame: undefined,
    layer: undefined,
    type: types.view,
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <BaseView
        {...rest}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </BaseView>
    )
  }
}

export default View;
