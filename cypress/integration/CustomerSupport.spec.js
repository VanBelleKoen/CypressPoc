/// <reference types="Cypress" />

beforeEach(() => {
	cy.visit('https://www.demorgen.be/service/');
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
});
