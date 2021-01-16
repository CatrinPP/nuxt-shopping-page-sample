export const state = () => ({
  category: 1,
  productsList: []
})

export const mutations = {
  SET_CATEGORY (state, category) {
    state.category = category
  },
  SET_PRODUCTS_LIST (state, products) {
    state.productsList = products
  }
}

export const actions = {
  async getProductsList ({ commit, state }) {
    try {
      const products = await fetch(
        `https://frontend-test.idaproject.com/api/product?category=${state.category}`
      ).then(res => res.json())
      await commit('SET_PRODUCTS_LIST', products)
    } catch (err) {
      console.error(err)
    }
  }
}
