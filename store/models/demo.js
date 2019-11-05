import request from '../../utils/request';

export default {
  state: {
    list: []
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    async query(payload, state) {
      const res = await request.get(
        'https://mock.kaikeba.com/mock/5da5baccd5218b0021998f3b/demo/list'
      );
      this.updateState({ list: res.data });
    }
  }
};
