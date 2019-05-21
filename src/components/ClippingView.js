import React from 'react';

import colors from '../colors';

class ClippingView extends React.PureComponent {
  render() {
    const { children, frame } = this.props;
    return (
      <ui-view
        backgroundColor={colors.fitbodDarkGrey}
        frame={frame}
        maskToBounds={true}
      >
        {children}
      </ui-view>
    )
  }
}

export default ClippingView;
