import React from 'react';


class Text extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <text>
        {children}
      </text>
    )
  }
}

export default Text;
