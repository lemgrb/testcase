import faker from 'faker';

describe('Manage Projects', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000')
  })

  it('can add new project', () => {
    // Arrange
    const projectName = faker.lorem.word();
    const projectDescription = faker.lorem.words();

    // Act -> Assert
    cy.get('[data-testid=add-project-button-from-home]').click();
    
    cy.get('[data-testid=add-project-name-input]').type(`${projectName}`)
    cy.get('[data-testid=add-project-description-input]').type(`${projectDescription}`)
    cy.get('[data-testid=add-project-button]').click();

    cy.get('[data-testid=add-project-confirmation]')
      .should('have.text', projectName+" added. Close")

    cy.get('[data-testid=add-project-close-button]').click();
    cy.wait(5000);

    cy.get('.project-list-item')
      .last()
      .should('have.text', projectName+projectDescription)
  })

  it('can add new project without description', () => {
    // Arrange
    const projectName = faker.lorem.word();

    // Act -> Assert
    cy.get('[data-testid=add-project-button-from-home]').click();
    
    cy.get('[data-testid=add-project-name-input]').type(`${projectName}`)
    cy.get('[data-testid=add-project-button]').click();

    cy.get('[data-testid=add-project-confirmation]')
      .should('have.text', projectName+" added. Close")

    cy.get('[data-testid=add-project-close-button]').click();
    cy.wait(5000);

    cy.get('.project-list-item')
      .last()
      .should('have.text', projectName)
  })


})
