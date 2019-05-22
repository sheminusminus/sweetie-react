import React from 'react';


class Text extends React.Component {
  render() {
    const { children, font, textColor } = this.props;

    return (
      <text font={font} textColor={textColor}>
        {children}
      </text>
    )
  }
}

export default Text;
