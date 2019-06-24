import React from 'react';

import { TextField } from '../sweetiekit/components';
import { colors } from '../sweetiekit/utils';
import { UIKit } from '../sweetiekit/enums';

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
        target={[onChange, UIControlEvents.allEditingEvents]}
        text={value}
      />
    );
  }
}


export default NameBox;
