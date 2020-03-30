export default {
  setCount: async ({ dispatch }, count) => {
    await new Promise((r) => setTimeout(r, 300))
    dispatch({ count: Number(count) })
  },
  getCount({ getStore }) {
    return getStore().count
  },
}
