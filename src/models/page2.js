
import { get } from '../services/page1';

export default {

  namespace: 'redux2',

  state: {
    data: '我是Redux中的数据',
    num: 0
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
    },
  },

  effects: {
    *getdata({ payload }, { call, put }) {
      const res = yield call(get);
      if (res) {
        console.log('请求已完成')
        yield put({
          type: 'save',
          payload
        });
      }

    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        num: payload
      };
    },
  },

};
