import React from 'react';
import PropTypes from 'prop-types';

import { mergeProps } from '../../utils';

import { colors } from '../../../sweetiekit/utils';

import { UiButton } from '../../../sweetiekit/components';

/**
 * @see https://developer.apple.com/documentation/uikit/uibutton?language=swift
 */
class Button extends React.Component {
  /**
   * @type {{backgroundColor: Color, children: *, type: string, layer: Layer, frame: Frame, target: Target}}
   */
  static propTypes = {
    backgroundColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    frame: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    layer: PropTypes.shape(),
    target: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.any])),
    title: PropTypes.string,
    titleColor: PropTypes.shape({
      red: PropTypes.number.isRequired,
      green: PropTypes.number.isRequired,
      blue: PropTypes.number.isRequired,
      alpha: PropTypes.number,
    }),
    titleLabel: PropTypes.any,
  };

  static defaultProps = {
    backgroundColor: colors.white,
    frame: undefined,
    layer: {
      cornerRadius: 12,
      borderWidth: 1,
      borderColor: colors.black,
    },
    target: undefined,
    title: 'Press Me',
    titleColor: colors.black,
    titleLabel: undefined,
  };

  render() {
    const props = mergeProps(Button.defaultProps, this.props);

    return (
      <UiButton {...props} />
    )
  }
}

export default Button;
