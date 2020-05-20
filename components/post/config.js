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
    name: 'editor',

    // test component store
    store: {
      target: undefined,
      defaultValue: undefined,
    },

    // test component dispatcher
    dispatcher(dispatch) {
      return {
        setTarget(value) {
          dispatch(value)
        },
      }
    },
  },
}
