/// <reference types="Cypress" />

beforeEach(() => {
	cy.visit('/');
	cy.get('button.fjs-set-consent').first().click();
});

describe('basic Navigation on the site', function() {
	it('Opening the site', function() {
		cy.get('.nav__identity').should('be.visible');
		cy.get('.ubersection-cultuur').should('be.visible');
		cy.get('.ubersection-magazine').should('be.visible');
		cy.get('.ubersection-plus').should('be.visible');
		cy.get('.nav-search').should('be.visible');
	});

	it('Using the search option', function() {
		let term;
		let searchTerm;
		cy.get('.nav-search').should('be.visible').click();
		cy.get('.col--primary--wide > .ankeiler > a > .ankeiler__header > .ankeiler__title').then(($div) => {
			term = $div.text();
			searchTerm = term.match(/[-A-Za-z]*/)[0];

			cy.get('.input--block').should('be.visible').type(searchTerm);

			cy.get('.omega > .button').click();
			cy.get('.results-listing__actions > h5').should('be.visible');
		});
	});

	it('Navigate to the subsection binnenland', function() {
		cy
			.get('.ubersection-nieuws >> .nav__caret')
			.invoke('show')
			.get(
				'.ubersection-nieuws > .subsection-menu > .subsection-menu__list > .item-1 > .subsection-menu__list__item__link'
			)
			.click({ force: true });

		cy.get('.section-title').should('be.visible');
	});

	it('Validate the CustomerSupport link', function() {
		cy
			.get('.tertiary-nav >> :nth-child(3)> .nav__list__item__link')
			.should('have.attr', 'href')
			.and('include', 'service');
	});
});
