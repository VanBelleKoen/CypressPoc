/// <reference types="Cypress" />

beforeEach(() => {
	cy.visit('/service/');
});

describe('The Customer Support Page', function() {
	it('Opening the CustomerSupportPage', function() {
		let txt = 'helpen';

		cy.get('h1 > p').then(($div) => {
			expect($div.text()).to.contain(txt);
		});
	});

	it('Vacation Option', function() {
		cy.get(':nth-child(1) >>> .action-item').should('be.visible').click();
		cy.get('.body-content-block > :nth-child(1)').should('be.visible');

		cy.get('.page-link-item').should('have.attr', 'href').and('include', 'subscription/holiday');
	});

	it('Delivery Option', function() {
		cy.get(':nth-child(2) >>> .action-item').should('be.visible').click();
		cy.get('.body-content-block > :nth-child(1)').should('be.visible');

		cy.get('.page-link-item').should('have.attr', 'href').and('include', 'subscription/complaints');
	});

	it('Moving Option', function() {
		cy.get(':nth-child(3) >>> .action-item').should('be.visible').click();
		cy.get('.body-content-block > :nth-child(1)').should('be.visible');

		cy.get('.page-link-item').should('have.attr', 'href').and('include', 'subscription/move');
	});

	it('Digital reading Option', function() {
		cy.get(':nth-child(4) >>> .action-item').should('have.attr', 'href').and('include', 'digitaallezen');
	});

	it('Searching help', function() {
		let searchTerm = 'Adreswijziging';
		cy.get('.form-control').should('be.visible').type(searchTerm);
		cy.get('.input-group-btn > .btn').click();

		cy.get('.search-info').should('be.visible').then(($txt) => {
			expect($txt.text()).to.contain(searchTerm);
		});
		cy.get(':nth-child(1) > .title > a').should('have.attr', 'href').and('include', 'service/verhuis');
	});
});
