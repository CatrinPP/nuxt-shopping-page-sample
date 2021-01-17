export const state = () => ({
  category: 1,
  productsList: [],
  showModal: false,
  selectedProducts: [],
  sortType: 'price',
  sortMenuShow: false,
  successOrderStatus: false
})

export const mutations = {
  SET_CATEGORY (state, category) {
    state.category = category
  },
  SET_PRODUCTS_LIST (state, products) {
    state.productsList = products
  },
  SHOW_MODAL (state) {
    state.showModal = true
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
  },
  HIDE_MODAL (state) {
    state.showModal = false
    document.body.style.height = 'auto'
    document.body.style.overflow = 'auto'
  },
  ADD_TO_CART (state, id) {
    if (state.selectedProducts.some(it => it.id === id)) {
      return
    }
    state.selectedProducts.push(state.productsList.find(it => it.id === id))
  },
  DELETE_FROM_CART (state, id) {
    state.selectedProducts.splice(state.productsList.indexOf(it => it.id === id), 1)
  },
  SORT_PRODUCTS_BY_PRICE (state) {
    state.productsList.sort((a, b) => a.price - b.price)
  },
  SORT_PRODUCTS_BY_RATING (state) {
    state.productsList.sort((a, b) => b.rating - a.rating)
  },
  SET_SORT_TYPE (state, sortType) {
    state.sortType = sortType
  },
  SET_SUCCESS_FORM_STATUS (state) {
    state.successOrderStatus = true
  },
  UNSET_SUCCESS_FORM_STATUS (state) {
    state.successOrderStatus = false
  },
  CLEAR_SELECTED_PRODUCTS (state) {
    state.selectedProducts = []
  },
  TOGGLE_SORT_MENU_SHOW (state) {
    state.sortMenuShow = !state.sortMenuShow
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
