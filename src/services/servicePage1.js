import request from '../utils/request';

export async function getExampleData() {
  return request('https://api.genderize.io/?name=peter', {
    method: 'GET',
  });
}


// 对应页面请求汇总
