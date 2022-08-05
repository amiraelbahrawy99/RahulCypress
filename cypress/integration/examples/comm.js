/// <reference types='Cypress'/>


describe('Freamework trial', function () {

    before(function () {

        cy.fixture('example').then(function (data) {
            this.user = data
        })
    })


    it("selectProduct", function () {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.contains('Shop').click()
        cy.selectProduct(this.user.mobileType)

    }
    )





})