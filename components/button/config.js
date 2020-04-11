module.exports = {
  // component name
  name: 'button',

  // route path
  path: '/',

  // webpack amd externals
  externals: [
    {
      name: 'antd',
      amd: 'antd',
      root: 'antd',
    },
  ],

  output: '[name]/[version]/index.js',

  // global container
  container: {
    // global store
    store: {
      count: 10,
    },

    // global dispatcher
    dispatcher: {
      setCount: async ({ dispatch }, count) => {
        await new Promise((r) => setTimeout(r, 300))
        dispatch({ count })
      }
    },
  },

  // test component
  component: {
    // test component name
    name: 'component-test',

    // test component store
    store: {
      message: 'test',
    },

    // test component dispatcher
    dispatcher(dispatch, getStore) {
      return {
        setMessage(message) {
          dispatch({ message })
        },
        getMessage() {
          return getStore().message
        },
      }
    },
  },
}
