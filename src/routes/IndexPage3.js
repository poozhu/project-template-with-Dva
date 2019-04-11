import React from 'react';
import { connect } from 'dva';
import Page3 from '../Views/page3';

class Index extends React.Component {
  render() {
    return <Page3></Page3>;
  }
}
export default connect()(Index);
