/// <reference types="cypress" />

describe('My First Test', () => {
    it('First Test', () => {
        cy.visit('')
        
        cy.contains('Forms').click()
        
        cy.wait(1000)
        
        cy.contains('Form Layouts').click()
        
        cy.wait(1000)

        cy.get('form').within(() => {
            cy.get('input[placeholder="Jane Doe"]').click().type('Minggar Putra').wait(1000)
        })
        cy.contains('nb-card','Inline form')
            .find('[placeholder="Email"]').click().type('minggarputra24@gmail.com').parents('form').wait(1000)
            .find('span[class="custom-checkbox"]').click().parents('form').wait(1000)
            // .find('button[status="primary"]').click()                                           // Ini adalah Testing Button Submit Inline form

        cy.get('form').within(() => {
            cy.get('#inputEmail1').click().type('minggarputra24@gmail.com').wait(1000)
            cy.get('#inputPassword2').click().type('1841720111').wait(1000)
            cy.get('nb-radio').first().find('span[class="inner-circle"]').click().wait(1000)
        })

        // cy.contains('nb-card', 'Using the Grid').find('button[status="primary"]').click()       // Ini adalah Testing Button Submit Using the Grid

        cy.get('form').within(() => {
            cy.get('#exampleInputEmail1').click().type('1841720111@student.polinema.ac.id').wait(1000)
            cy.get('#exampleInputPassword1').click().type('1841720111').wait(1000)
        })

        cy.contains('nb-card','Basic form')
            .find('span[class="custom-checkbox"]').click().wait(1000)

        // cy.get('form').get('button[status="danger"]').click()                                   // Ini adalah Testing Button Submit Basic form

        cy.get('form').within(() => {
                cy.get('input[placeholder="Recipients"]').click().type('Putra Dhea Ramadhan').wait(1000)
                cy.get('[placeholder="Subject"]').click().type('Coba Data').wait(1000)
                cy.get('[placeholder="Message"]').click().type('Blackbox Testing - Web ngx-cypress-test').wait(1000)
                // cy.get('[status="success"]').click()                                            // Ini adalah Testing Button Submit Form without labels
            })
        
        cy.get('div[class="row"]').within(() => {
            cy.get('input[placeholder="First Name"]').click().type('Minggar').wait(1000)
            cy.get('input[placeholder="Last Name"]').click().type('Putra').wait(1000)
            cy.get('#inputEmail[placeholder="Email"]').click().type('1841720111@student.polinema.ac.id').wait(1000)
            cy.get('#inputWebsite[placeholder="Website"]').click().type('https://github.com/minggarputra24/PPL_BlackboxTesting-Cypress.git').wait(1000)
        })

        // cy.contains('nb-card','Block form').find('button').click()                              // Ini adalah Testing Button Submit Block form

        cy.get('form').within(() => {
            cy.get('#inputEmail3').click().type('minggarputra24@gmail.com').wait(1000)
            cy.get('#inputPassword3').click().type('1841720111').wait(1000)
            cy.get('span[class="custom-checkbox"]').click().wait(1000)
            // cy.get('button[status="warning"]').click()                                          // Ini adalah Testing Button Submit Horizontal form
        })
    })
  })
  