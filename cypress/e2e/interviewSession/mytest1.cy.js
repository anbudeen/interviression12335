/// <reference types="cypress" />

describe('patient details',()=>{
    it("submission of patient details",()=>{
        cy.visit("https://vinothqaacademy.com/demo-page-healthcare/")

    cy.title().should('eq','Demo Page Healthcare - Vinoth Q.A Academy')
    cy.get("#patient-name").clear().should('be.visible').type("Abi")
    cy.get('#patient-id').should('be.visible').type("654321",{force:true})
    cy.get("input[name='gender']").check('female').should("be.checked")
     cy.get("input[name='symptoms']").uncheck("cough").should('not.be.checked')
    cy.get("input[name='symptoms']").check(["fever","cough",'headache']).should("be.checked")

    cy.get(".submit-btn").click()

    cy.contains("Patient data is updated successfully").should("be.visible")


    })
// update screenshot
     afterEach(() => {
  cy.screenshot();
});

    })

    describe.only("Registration Form",()=>{
        it("validate whether the Registration Form is successful",()=>{
            cy.visit("https://vinothqaacademy.com/demo-site/")
            cy.get("fieldset[id='item-vfb-1'] h3").should('contain.text',"Registration Form")
            //user details
        const randamfrstname='Aleena' +Math.floor(Math.random()*10000)
        cy.get("#vfb-5").type(randamfrstname)

        const randomlastname= 'juliet' +Math.floor(Math.random()*9999)
        cy.get("#vfb-7").type(randomlastname)

        cy.get("#vfb-31-1").check('Male').should('be.checked')

        cy.get("li[id='item-vfb-20'] span input[type='checkbox']").uncheck()

        cy.get("li[id='item-vfb-20'] span input[type='checkbox']").check(['Selenium WebDriver','Java','Functional Testing']).should('be.checked')

        cy.fixture("address.json").then((data)=>{
            cy.get("#vfb-13-address").type(data.Address)
            cy.get("#vfb-13-address-2").type(data.StreetAddress)
            cy.get("#vfb-13-city").type(data.City)
            cy.get("#vfb-13-state").type(data.State)
            cy.get("#vfb-13-zip").type(data.ZipCode)

            cy.get("[aria-labelledby='select2-vfb-13-country-container']").click()
            cy.get("input[aria-label='Search']").type(data.Country)
            cy.get('.select2-results__option')
  .should('be.visible')
  .contains('India')
  .click();
  cy.fixture("userregistration.json").then((data1)=>{
    cy.get('[type="email"]').type(data1.email)
    cy.get('[data-dp-dateformat="mm/dd/yy"]').type(data1.dateofdemo).click()

    cy.get("#select2-vfb-16-hour-container").click({ force: true })
    cy.get('[aria-label="Search"]').type("15")
    cy.get('.select2-results__option--highlighted').should("be.visible").contains('15').click()

    cy.get("#select2-vfb-16-min-container").click({force:true})
    cy.get('[aria-label="Search"]').type("10")
    cy.get('.select2-results__option--highlighted').should("be.visible").contains("10").click({force:true})
    cy.get('#vfb-19').type(data1.mobilenumber)
    cy.get(".vfb-textarea").type(data1.query)
    cy.get("#vfb-3").type(data1.Verification)

    cy.get('[name="vfb-submit"]').click()

    cy.url().should('include','/transaction-id/')

    cy.get('#messageContainer').should('contain.text',"Registration Form is Successfully Submitted")
//test


  })

  
        })

        }) 

   afterEach(() => {
  cy.screenshot();
});

    
 })
