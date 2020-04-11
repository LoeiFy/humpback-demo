module.exports = {
  // component name
  name: 'description',

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
      name: 'humpback',
    },

    // global dispatcher
    dispatcher: {
      setName: async ({ dispatch }, name) => {
        await new Promise((r) => setTimeout(r, 300))
        dispatch({ name })
      },
      getName({ getStore }) {
        return getStore().name
      },
    },
  },

  // test component
  component: {
    // test component name
    name: 'user',

    // test component store
    store: {
      name: 'test',
    },

    // test component dispatcher
    dispatcher(dispatch) {
      return {
        async setName(name) {
          await new Promise((r) => setTimeout(r, 1000))
          dispatch({ name }, true)
        },
      }
    },
  },
}
