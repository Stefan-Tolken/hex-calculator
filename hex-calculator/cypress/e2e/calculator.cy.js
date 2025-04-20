describe('Hex Calculator - Basic UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('shows all calculator buttons', () => {
    const buttons = [
      'A', 'B', 'C', 'D', 'E', 'F',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '+', '-', '*', '/', 
      'Clear', '⌫', '='
    ];

    buttons.forEach(label => {
      cy.contains('button', label).should('be.visible');
    });
  });

  it('lets you click buttons and shows the value in the input', () => {
    const sequence = ['A', '+', '1'];

    sequence.forEach((char, index) => {
      cy.contains('button', char).click();
      cy.get('input').should('have.value', sequence.slice(0, index + 1).join(''));
    });
  });

  it('removes the last character when pressing backspace', () => {
    cy.contains('button', 'A').click();
    cy.contains('button', '+').click();
    cy.contains('button', '1').click();
    cy.get('input').should('have.value', 'A+1');

    cy.contains('button', '⌫').click();
    cy.get('input').should('have.value', 'A+');
  });

  it('clears the input when pressing Clear', () => {
    cy.contains('button', 'B').click();
    cy.contains('button', '*').click();
    cy.contains('button', 'Clear').click();
    cy.get('input').should('have.value', '');
  });
});