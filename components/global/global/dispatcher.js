export default {
  setCount: async ({ dispatch }, count) => {
    await new Promise((r) => setTimeout(r, 300))
    dispatch({ count: Number(count) })
  },
  savePath({ dispatch, getStore }, path) {
    const { paths } = getStore()
    if (!paths.includes(path)) {
      paths.push(path)
    }
    dispatch({ paths })
  },
}
