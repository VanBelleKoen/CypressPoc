/// <reference types="Cypress" />

beforeEach(() => {
	cy.visit('https://abonnement.demorgen.be/homepage');
	cy.get('button.fjs-set-consent').first().click();
});

describe('The abonnementen page', function() {
	it('Opening the abonnementen page', function() {
		cy.get('.tertiary-nav >> :nth-child(4)> .nav__list__item__link').should('be.visible').click();
	});
});
