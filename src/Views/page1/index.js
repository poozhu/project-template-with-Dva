import React from 'react';
import { connect } from 'dva';

@connect(({ Page1 }) => ({
    data: Page1.data,  // 取出redux中的各个数据
    num: Page1.num,
}))

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '我是这里的数据 from page1/index.js',
        };
    }
    componentDidMount() {
        console.log(this.state.data);   // 输出本页面 state数据
        console.log(this.props.pram.a);  // 输出路由封装部分所传递的参数
        console.log(this.props.data)  // 输出redux中数据
    }

    componentWillUnmount() {

    }

    handleAddAfterGet = () => {
        this.props.dispatch({
            type: 'Page1/getdata',
            payload: this.props.num + 1,
        });
    }
    handleAdd = () => {
        this.props.dispatch({
            type: 'Page1/save',
            payload: this.props.num + 1,
        });
    }
    render() {
        return (
            <div>
                <h1>Page1</h1>
                <div onClick={this.handleAdd}>点我改变Redux中的变量</div>
                <div onClick={this.handleAddAfterGet}>点我在请求完成后改变Redux中的变量</div>
                {this.props.num}
            </div>
        );
    }
}

export default Index;


// redux以及数据等用例
