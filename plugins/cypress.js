const isCypress = process.client && typeof window.Cypress !== 'undefined'

export default ({ store }) => {
  if (isCypress) {
    window.store = store
  }
}
