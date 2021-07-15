describe('Material Components', () => {
  beforeEach(() => cy.visit('/'));

  it('Accordion Component', () => {
    cy.get('[data-cy=accordion-header]').should('have.length', 2);
    cy.get('[data-cy=accordion-header] > i').should(
      'not.have.class',
      'is-expanded'
    );
    cy.get('[data-cy=accordion-content]').should('not.be.visible');
    cy.get('[data-cy=accordion-header]').click({ multiple: true });

    cy.get('[data-cy=accordion-header] > i').should(
      'have.class',
      'is-expanded'
    );
    cy.get('[data-cy=accordion-content]').should('have.class', 'is-expanded');
    cy.get('[data-cy=accordion-content]').should('be.visible');
  });
});
