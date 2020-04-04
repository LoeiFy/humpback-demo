module.exports = {
  // webpack amd externals
  externals: [
    {
      name: 'antd',
      amd: 'antd',
      root: 'antd',
    },
  ],

  // test component
  component: {
    // test component name
    name: 'card',

    // test component store
    store: {
      name: 'megggg',
    },

    // test component dispatcher
    dispatcher(dispatch) {
      return {
        setName(name) {
          dispatch({ name })
        },
      }
    },
  },
}
