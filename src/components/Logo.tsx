import './Logo.less';
import React from 'react';

class Logo extends React.Component<{ height: number, }> {
  render() {
    let h:any = this.props.height;

    if (!h) {
      h = '100%';
    }

    return (<img alt="logo" src="/swannie_web.svg" height={512} width={512} style={{
      height: h,
      width: 'auto',
    }}/>);
  }
}

export default Logo;
