/// <reference types='Cypress'/>

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 3);
        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click().then(function () {
            console.log("Amiraaaaaaaaaaa")

        })
            ;
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const vegName = $el.find('h4.product-name').text();
            if (vegName.includes('Carrot')) {
                // $el.find('button').click();
                cy.wrap($el).find('button').click();
            }

        }

        )
    })




    // it.only('ay 7aga', () => {
    //     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //     cy.log('Command log')
    //     cy.get('[href="#/offers"]').then(element => console.log(element))
    //     cy.get('[href="#/offers"]').invoke('text').should('eq', 'Top Dea!ls')
    // })
})