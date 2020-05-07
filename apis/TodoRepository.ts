const resource = '/todos'
export default ($axios: any) => ({
  all() {
    return $axios.get(`${resource}`)
  },

  show(id: any) {
    return $axios.get(`${resource}/${id}`)
  },

  create(payload: any) {
    return $axios.post(`${resource}`, payload)
  },

  update(id: any, payload: any) {
    return $axios.post(`${resource}/${id}`, payload)
  },

  delete(id: any) {
    return $axios.delete(`${resource}/${id}`)
  }
})
