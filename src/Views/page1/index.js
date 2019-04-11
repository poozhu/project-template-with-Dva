import React from 'react';
import { connect } from 'dva';

@connect(({ redux }) => ({ redux }))

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '我是这里的数据',
    };
  }
  componentDidMount() {
    console.log(this.state.data);
    console.log(this.props.data.a);
    console.log(this.props.redux.data)
  }

  componentWillUnmount() {

  }

  handleAddAfterGet = () => {
    this.props.dispatch({
      type: 'redux/getdata',
      payload: this.props.redux.num + 1,
    });
  }
  handleAdd = () => {
    this.props.dispatch({
      type: 'redux/save',
      payload: this.props.redux.num + 1,
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Page1</h1>
        <div onClick={this.handleAdd}>点我改变Redux中的变量</div>
        <div onClick={this.handleAddAfterGet}>点我在请求完成后改变Redux中的变量</div>
        {this.props.redux.num}
      </div>
    );
  }
}

export default Index;