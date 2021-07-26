describe('Material Components', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // after(() => {
  //   cy.scrollTo('top');
  // });

  it.only('Bottom Sheet', () => {
    cy.get('[data-cy=bottom-sheet-container]').should('not.exist');
    cy.get('[data-cy=bottom-sheet-overlay]').should('not.exist');
    cy.get('[data-cy=bottom-sheet-button]').click();
    cy.get('[data-cy=material-bottom-sheet]')
      .shadow()
      .find('[data-cy=bottom-sheet-container]')
      .should('be.visible');
    cy.get('[data-cy=material-bottom-sheet]')
      .shadow()
      .find('[data-cy=bottom-sheet-overlay]')
      .should('be.visible')
      .click()
      .should('not.be.visible');
  });

  it('Lazy Load Directive', () => {
    cy.visit('directives');
    cy.get('[data-cy=lazy-image]')
      .should('not.be.visible')
      .scrollIntoView()
      .should('be.visible');
  });

  it('Copy Directive', () => {
    cy.visit('directives');
    cy.get('[data-cy=copy-directive-button]').click();
    cy.get('[data-cy=snackbar]')
      .should('be.visible')
      .and('contain', 'Copied Successfully');
  });

  it('Simple Popup', () => {
    cy.get('[data-cy=popup-content]')
      .should('be.visible')
      .click({ force: true });
    cy.get('[data-cy=popup-message]').should('be.visible');
    cy.get('[data-cy=popup-message]').should('not.exist');
  });

  it('Snackbar Component', () => {
    cy.visit('services');
    cy.get('[data-cy=snackbar]').should('not.be.visible');
    cy.get('[data-cy=snackbar-toggle]').click();
    cy.get('[data-cy=snackbar]').should('be.visible');
    cy.get('[data-cy=snackbar]').should('not.be.visible');
  });

  it('Scale Directive', () => {
    cy.visit('directives');
    cy.get('[data-cy=square]')
      .trigger('mouseover')
      .should('have.attr', 'style')
      .and('contain', 'transform: scale(1.25)');
    cy.get('[data-cy=square]')
      .trigger('mouseleave')
      .should('have.attr', 'style')
      .and('contain', 'transform: scale(1)');
  });

  context('Button Group', () => {
    it('Single Button Group', () => {
      cy.get('[data-cy=button-group-single]')
        .find('[data-cy=button-group-item]')
        .should('not.have.class', 'active')
        .first()
        .click({ force: true })
        .should('have.class', 'active')
        .next()
        .click({ force: true })
        .should('have.class', 'active')
        .next()
        .click({ force: true })
        .should('have.class', 'active')
        .prevAll()
        .should('not.have.class', 'active');
    });
    it('Multi Button Group', () => {
      cy.get('[data-cy=button-group-multi]')
        .find('[data-cy=button-group-item]')
        .first()
        .should('have.class', 'active')
        .next()
        .click({ force: true })
        .should('have.class', 'active')
        .next()
        .click({ force: true })
        .should('have.class', 'active')
        .prevAll()
        .should('have.class', 'active');
    });
  });

  it('Ribbon Component', () => {
    cy.get('[data-cy=ribbon]')
      .should('have.class', 'bottom-left')
      .should('have.class', 'info');
    cy.get('[data-cy=ribbon-button-top-left]').click();
    cy.get('[data-cy=ribbon-button-warning]').click();
    cy.get('[data-cy=ribbon]')
      .should('have.class', 'top-left')
      .should('have.class', 'warning');

    cy.get('[data-cy=ribbon-button-top-right]').click();
    cy.get('[data-cy=ribbon-button-error]').click();
    cy.get('[data-cy=ribbon]')
      .should('have.class', 'top-right')
      .should('have.class', 'error');

    cy.get('[data-cy=ribbon-button-bottom-right]').click();
    cy.get('[data-cy=ribbon-button-success]').click();
    cy.get('[data-cy=ribbon]')
      .should('have.class', 'bottom-right')
      .should('have.class', 'success');
  });
  context('Form Guard', () => {
    it('Form Dirty', () => {
      cy.on('window:confirm', () => false);
      cy.visit('other').url().should('include', 'other');
      cy.get('[data-cy=form-dirty-input]').type('1337');
      cy.get('.link-active').siblings().first().click();
      cy.url().should('include', 'other');
    });

    it('Confirm exit', () => {
      cy.on('window:confirm', () => true);
      cy.visit('other').url().should('include', 'other');
      cy.get('[data-cy=form-dirty-input]').type('1337');
      cy.get('.link-active').siblings().last().click();
      cy.url().should('include', 'pipes');
    });
  });

  context('Email Form', () => {
    it('Initial form disabled', () => {
      cy.get('[data-cy=form-submit]').should('have.attr', 'disabled');
      cy.get('[data-cy=form-name]').type('Username');
      cy.get('[data-cy=form-email]').type('username@email.com');
      cy.get('[data-cy=form-message]').type('Lorem Ipsum');
      cy.get('[data-cy=form-submit]').should('not.have.attr', 'disabled');
    });
    it('Invalid Form', () => {
      cy.get('[data-cy=form-invalid-email]').should('not.exist');
      cy.get('[data-cy=form-invalid-message]').should('not.exist');
      cy.get('[data-cy=form-invalid-name]').should('not.exist');
      cy.get('[data-cy=form-submit]').should('have.attr', 'disabled');
      cy.get('[data-cy=form-name]').type('7');
      cy.get('[data-cy=form-email]').type('notemail');
      cy.get('[data-cy=form-message]').type('1').clear();
      cy.get('[data-cy=form-name]').focus();
      cy.get('[data-cy=form-submit]').should('have.attr', 'disabled');
      cy.get('[data-cy=form-invalid-email]').should('be.visible');
      cy.get('[data-cy=form-invalid-message]').should('be.visible');
      cy.get('[data-cy=form-invalid-name]').should('be.visible');
    });
  });

  it('Tab Component', () => {
    cy.get('[data-cy=tab-item]')
      .first()
      .should('have.class', 'active')
      .contains('Tab 1');
    cy.get('[data-cy=tab-item]')
      .last()
      .should('not.have.class', 'active')
      .contains('Tab 4');
    cy.get('[data-cy=tab-item]')
      .first()
      .next()
      .should('not.have.class', 'active')
      .contains('Tab 2')
      .click();
    cy.get('[data-cy=tab-item]')
      .first()
      .should('not.have.class', 'active')
      .next()
      .should('have.class', 'active');
  });

  it('Pagination', () => {
    cy.get('[data-cy=paginator-prev]').should('have.attr', 'disabled');
    cy.get('[data-cy=paginator-next]').should('not.have.attr', 'disabled');
    cy.get('[data-cy=paginator-button]').first().contains(1);
    cy.get('[data-cy=paginator-button]').contains(3).click().contains(3);
    cy.get('[data-cy=paginator-prev]').should('not.have.attr', 'disabled');
    cy.get('[data-cy=paginator-next]').click().click();
    cy.get('[data-cy=paginator-next]').should('have.attr', 'disabled');
  });

  it('Counter Buttons', () => {
    cy.get('[data-cy=counter]').should('have.value', 0);
    cy.get('[data-cy=decrement-button]').click();
    cy.get('[data-cy=counter]').should('have.value', 0);
    cy.get('[data-cy=increment-button]').click();
    cy.get('[data-cy=counter]').should('have.value', 1);
    cy.get('[data-cy=decrement-button]').click();
    cy.get('[data-cy=counter]').should('have.value', 0);
  });

  it('Toggle Dark Mode', () => {
    cy.get('body').should('have.class', 'dark');
    cy.get('[data-cy=theme-switcher]').click();
    cy.get('body').should('not.have.class', 'dark');
    cy.get('[data-cy=theme-switcher]').click();
    cy.get('body').should('have.class', 'dark');
  });

  it('Search List', () => {
    cy.get('[data-cy=search-list]').find('input').type('Rus');
    cy.get('[data-cy=search-list-item]')
      .should('have.length', 4)
      .last()
      .click();
    cy.get('[data-cy=search-list]')
      .find('input')
      .should('have.value', 'Russian Federation');
  });

  it('Toggle Button', () => {
    cy.get('[data-cy=toggle-button]')
      .should('have.class', 'is-on')
      .first()
      .click({ force: true })
      .should('not.have.class', 'is-on');
  });

  it('Modal Window', () => {
    cy.get('[data-cy=modal-content]').should('not.be.visible');
    cy.get('[data-cy=open-modal]').click({ force: true });
    cy.get('[data-cy=modal-content]').should('be.visible');
    cy.get('[data-cy=modal-close]').click({ force: true });
    cy.get('[data-cy=modal-content]').should('not.be.visible');
    cy.get('[data-cy=open-modal]').click({ force: true });
    cy.get('[data-cy=modal-content]').should('be.visible');
    cy.get('[data-cy=modal-overlay]').click({ force: true });
    cy.get('[data-cy=modal-content]').should('not.be.visible');
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
    cy.get('[data-cy=loader-text]').click({ force: true });
    cy.get('h1').contains('Loading');
    cy.get('[data-cy=loader-circular]').click({ force: true });
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
    cy.get('[data-cy=progress-update]').click({ force: true });
    cy.get('[data-cy=progress-value]').contains(100);
    cy.get('[data-cy=progress-reset]').click({ force: true });
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
