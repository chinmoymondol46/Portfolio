describe('Portfolio Website - Download CV Button', () => {
  it('Checks if the Download CV button exists', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Download CV').should('exist');
  });

  it('Downloads the CV when the button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Download CV')
      .should('have.attr', 'href')
      .then((href) => {
        expect(href).to.contain('.pdf');
        cy.contains('Download CV').click();
      });
  });
});