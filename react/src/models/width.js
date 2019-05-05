
export default {
  //仓库名
  namespace: 'width',
  //存放的数据
  state: {
    collapsed: false,
  },


  reducers: {
    editWidthState(state, action) {
      // 把旧仓库的值放进去，并且把新的仓库值也放进去
      return { ...state, ...action.payload };
    },
  },

};
