import React from 'react';
import { connect } from 'dva';
import Page2 from '../Views/page2';

class Index extends React.Component {
  render() {
    return <Page2></Page2>;
  }
}
export default connect()(Index);
