import React from 'react';

import colors from '../colors';
import { UIViewContentMode } from '../enums';

class BgImageView extends React.PureComponent {
  render() {
    const { frame } = this.props;
    return (
      <ui-image-view
        alpha={0.2}
        backgroundColor={colors.fitbodDarkGrey}
        frame={frame}
        maskToBounds={true}
      >
      </ui-image-view>
    )
  }
}

BgImageView.defaultProps = {
  contentMode: UIViewContentMode.scaleAspectFit,
};

export default BgImageView;
