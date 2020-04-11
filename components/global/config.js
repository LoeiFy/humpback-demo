module.exports = {
  // webpack amd externals
  externals: [
    {
      name: 'antd',
      amd: 'antd',
      root: 'antd',
    },
  ],

  output: '[name]/[version]/index.js',

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
        setName: async (name) => {
          await new Promise((r) => setTimeout(r, 1000))
          dispatch({ name })
        },
      }
    },
  },
}
