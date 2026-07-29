describe('Central de Atendimento ao Cliente TAT', () => {
    //Antes de cada testes este bloco será executado
    beforeEach(() => {
    cy.visit('./src/index.html')
})
   it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
})

  it.only('preenche os campos obrigatórios e envia o formulário.', () => {
    cy.get('#firstName').type('Gabriela')
    cy.get('#lastName').type('Mohamed')
    cy.get('#email').type('gabriela.mohamedb@gmail.com')
    cy.get('#open-text-area').type('Obrigada!')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
})
