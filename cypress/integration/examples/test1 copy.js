/// <reference types='Cypress'/>




describe('Freamework trial', function () {

    before(function () {

        cy.fixture('example').then(function (data) {
            this.user = data
        })


    })

    it("Registration", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type(this.user.name)
        cy.get('select').select(this.user.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.user.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')

    })

    // it("Registration", () => {
    //     cy.visit("https://rahulshettyacademy.com/angularpractice/")
    //     cy.get('input[name="name"]:nth-child(2)').type(globalThis.user.name)
    //     cy.get('select').select(globalThis.user.gender)

    // })


})