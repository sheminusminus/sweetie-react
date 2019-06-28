import React from 'react';
import PropTypes from 'prop-types';

import { colors, propTypes, types } from '../../utils';

import SkView from '../SkView';

/**
 * ARSKView
 */
class ArSkView extends React.Component {
  static propTypes = {
    backgroundColor: propTypes.colorProp,
    baseTypes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.any,
    configuration: PropTypes.oneOfType([
      PropTypes.instanceOf(ARWorldTrackingConfiguration),
      PropTypes.instanceOf(ARBodyTrackingConfiguration),
      PropTypes.instanceOf(AROrientationTrackingConfiguration),
      PropTypes.instanceOf(ARImageTrackingConfiguration),
      PropTypes.instanceOf(ARFaceTrackingConfiguration),
      PropTypes.instanceOf(ARObjectScanningConfiguration),
    ]),
    delegate: PropTypes.instanceOf(ARSKViewDelegate),
    frame: propTypes.frameProp,
    layer: propTypes.layerProp,
    showsFPS: PropTypes.bool,
    type: PropTypes.string,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    baseTypes: [types.arSkView, types.skView, types.view],
    children: undefined,
    configuration: undefined,
    delegate: undefined,
    frame: undefined,
    layer: undefined,
    showsFPS: false,
    type: types.arSkView,
  };

  #ref = React.createRef();

  get api() { return this.#ref.current; }

  get session() {
    return this.#ref.current
      ? this.#ref.current.session : undefined;
  };

  render() {
    const {
      baseTypes,
      children,
      type,
      ...rest
    } = this.props;

    return (
      <SkView
        {...rest}
        ref={this.#ref}
        baseTypes={baseTypes}
        type={type}
      >
        {children}
      </SkView>
    )
  }
}

export default ArSkView;
