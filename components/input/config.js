module.exports = {
  // component name
  name: 'input',

  // route path
  path: '/form/:id',

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
      paths: [],
    },

    // global dispatcher
    dispatcher: {
      savePath({ dispatch, getStore }, path) {
        const { paths } = getStore()
        if (!paths.includes(path)) {
          paths.push(path)
        }
        dispatch({ paths })
      },
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
