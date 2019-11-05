import request from '../../utils/request';

export default {
  state: {
    user: {}
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
    async getUser(payload, state) {
      const res = await request.get(
        'https://mock.kaikeba.com/mock/5da5baccd5218b0021998f3b/demo/user'
      );
      this.updateState({ user: res.data });
    }
  }
};
