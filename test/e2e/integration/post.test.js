/* eslint-disable */

describe('포스트 테스트', () => {
  it('관지자 페이지 메뉴 1 방문', () => {
    cy.visit('admin/menu1')
    // cy.contains('h1', 'Nuxt.js + Cypress')
  })

  it('로그인 페이지 방문', () => {
    cy.visit('user/login')
    cy.get('a.about-link').click()
    cy.contains('h1', 'About')
  })

  it('스토어가 cypress에 적용됨', () => {
    cy.visit('admin/menu1')
    cy.window().should('have.property', 'store')
  })
})
