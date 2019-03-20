/// <reference types="Cypress" />

beforeEach(() => {
	cy.visit('/het-weer/');
	cy.get('button.fjs-set-consent').first().click();
});

describe('The weather page', function() {
	it('Opening the weatherPage', function() {
		cy.get('.weather-title').should('be.visible');
		cy.get('.weather-map--national > figure > img').should('be.visible');
	});

	it('Searching a postalcode', function() {
		cy
			.get('.weather-searchbox>.form>>>.input--block')
			.should('be.visible')
			.type(Math.floor(Math.random() * 9999 + 1000));
		cy.get('.weather-searchbox >>>> .button').click();
	});

	it('Searching a city', function() {
		let selectRanTable = Math.floor(Math.random() * 9 + 1);
		let selectRanRow = Math.floor(Math.random() * 4 + 1);
		let selectCity = ':nth-child(' + selectRanTable + ') >.table>tbody>:nth-child(' + selectRanRow + ') >.key>a';
		//selecting a random city in the tabled list

		cy.get(selectCity).last().should('be.visible').then(($city) => {
			cy.get(selectCity).last().click();

			cy.get('.weather-title').should('be.visible').then(($weatherCity) => {
				expect($weatherCity.text()).to.contain($city.text());
			});
			cy.get('.weather-today__measuredTemp').should('be.visible');
		});
	});
});
