describe('Material Components', () => {
  beforeEach(() => cy.visit('/'));

  it('Progress Bar', () => {
    cy.get('[data-cy=progress-value]').contains(25);
    cy.get('[data-cy=progress-update]').click();
    cy.get('[data-cy=progress-value]').contains(100);
    cy.get('[data-cy=progress-reset]').click();
    cy.get('[data-cy=progress-value]').contains(0);
  });

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
