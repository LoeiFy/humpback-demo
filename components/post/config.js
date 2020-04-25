module.exports = {
  // component name
  name: 'post',

  // route path
  path: '/posts/:id',

  defaultPath: '/posts/5',

  // webpack amd externals
  externals: [
    {
      name: 'antd',
      amd: 'antd',
      root: 'antd',
    },
  ],

  // npm registry
  // registry: 'https://registry.npm.taobao.org',

  // webpack build output
  // version: package version
  // name: component name
  output: '[name]/[version]/index.js',

  // global container
  global: {
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
