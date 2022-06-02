
describe('Mob Timer', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('input').eq(0).as('timeField')
    cy.get('input').eq(1).as('personNameField')

    cy.contains('button', /add/i).as('addPersonButton')
  })

  it('should add a person to the mob', () => {
    cy.get('@personNameField').type('Kent')
    
    cy.contains(/add/i).click()
    
    cy.get('li').should('have.length', 1)
    cy.get('li').eq(0).should('contain.text', 'Kent')
  })

  it('should remove a person from the mob', () => {
    cy.get('@personNameField').type('Martin')

    cy.get('@addPersonButton').click()

    cy.get('.remove').click()

    cy.get('li').should('have.length', 0)
  })

  it('should skip a person', () => {
    let drivers = ['Kent', 'Martin', 'Barry']
    
    for (const driver of drivers) {
      cy.get('input').eq(1).type(driver)
      cy.get('@addPersonButton').click()
    }


    drivers = ['Martin', 'Barry', 'Kent']
    for (const driver of drivers) {
      cy.contains(/skip/i).click()
      cy.contains(`Grab the keyboard ${driver}.`).should('exist')
    }
  })

  it('should set the driving time', () => {
    cy.get('@timeField').clear().type(4)
    cy.contains(/start/i).click()
    cy.contains('4:00')
  })

  it('should reset the driving time', () => {
    cy.get('@timeField').clear().type(10)
    cy.contains(/start/i).click()
    cy.contains(/pause/i).click()
    cy.contains(/reset/i).click()
    cy.contains('10:00')
  })
})