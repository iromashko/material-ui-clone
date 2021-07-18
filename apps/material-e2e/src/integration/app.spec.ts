describe('Material Components', () => {
  beforeEach(() => cy.visit('/'));

  it.only('New test', () => {
    cy.visit('pipes');
  });

  it('Twitter Post', () => {
    cy.get('[data-cy=twitter-post]').invoke('removeAttr', 'target').click();
    cy.url().should(
      'eq',
      'https://twitter.com/intent/tweet?hashtags=Angular%2CNest.js%2CTypescript%2CKubernetes&url=https://google.com&text=Check%20out%20Material%20and%20become%20a%20CODING%20GOD!!!'
    );
  });

  it('Credit Card Input', () => {
    cy.get('[data-cy=credit-card-readonly]')
      .find('input')
      .should('have.value', 'xxxx-xxxx-xxxx-4321')
      .should('have.attr', 'readonly');
    cy.get('[data-cy=credit-card-editable]').find('input').clear().type('3');
    cy.get('[data-cy=credit-card-editable]')
      .find('i')
      .should('have.class', 'fa-cc-amex');
    cy.get('[data-cy=credit-card-editable]').find('input').clear().type('4');
    cy.get('[data-cy=credit-card-editable]')
      .find('i')
      .should('have.class', 'fa-cc-visa');
    cy.get('[data-cy=credit-card-editable]').find('input').clear().type('5');
    cy.get('[data-cy=credit-card-editable]')
      .find('i')
      .should('have.class', 'fa-cc-mastercard');
    cy.get('[data-cy=credit-card-editable]').find('input').clear().type('6');
    cy.get('[data-cy=credit-card-editable]')
      .find('i')
      .should('have.class', 'fa-cc-discover');
    cy.get('[data-cy=credit-card-editable]').find('input').clear().type('1');
    cy.get('[data-cy=credit-card-editable]')
      .find('i')
      .should('have.class', 'fa-credit-card');
  });

  it('Loader', () => {
    cy.get('[data-cy=loader-overlay]').should('not.be.visible');
    cy.get('[data-cy=loader-text]').click();
    cy.get('h1').contains('Loading');
    cy.get('[data-cy=loader-circular]').click();
    cy.get('.circular').should('be.visible');
    cy.get('[data-cy=loader-overlay]').should('be.visible');
    cy.get('[data-cy=loader-overlay]').should('not.be.visible');
  });

  it('Toolbar Routes', () => {
    cy.visit('directives');
    cy.url().should('eq', 'http://localhost:4200/directives');
    cy.visit('services');
    cy.url().should('eq', 'http://localhost:4200/services');
    cy.visit('pipes');
    cy.url().should('eq', 'http://localhost:4200/pipes');
    cy.visit('other');
    cy.url().should('eq', 'http://localhost:4200/other');
  });

  it('Top of Page', () => {
    cy.get('[data-cy=go-to-top]').should('not.be.visible');
    cy.scrollTo('bottom');
    cy.get('[data-cy=go-to-top]').should('be.visible');
    cy.get('[data-cy=go-to-top]').click();
    cy.window().its('scrollY').should('equal', 0);
  });

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
