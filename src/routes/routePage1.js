import React from 'react';
import Page1 from '../Views/page1';

class Index extends React.Component {
    render() {
        return <Page1 pram={{ a: '我是组件参数 from routePage1.js' }}></Page1>;
    }
}
export default Index;


// 路由封装用例，适用于同一页面上存在多个组件的场景
