import React from 'react';
const SweetieKit = Require('std:sweetiekit.node');

const { UIKit } = SweetieKit;

import { TextField } from '../sweetiekit/components';
import { colors } from '../sweetiekit/utils';


const { UIControlEvents } = UIKit;

class NameBox extends React.Component {
  render() {
    const { frame, onChange, value } = this.props;

    return (
      <TextField
        backgroundColor={colors.white}
        frame={frame}
        layer={{
          cornerRadius: 4,
        }}
        placeholder="Your name"
        target={[onChange, UIControlEvents.valueChanged]}
        text={value}
      />
    );
  }
}


export default NameBox;
