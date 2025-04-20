describe('Hex Calculator - Logic & Edge Case Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    const click = (label) => cy.contains('button', label).click();
    const expectInput = (value) => cy.get('input').should('have.value', value);
    const expectToast = (message) =>
        cy.get('[data-sonner-toast]')
          .should('exist')
          .should('contain.text', message);
    const clickSeq = (seq) => seq.forEach(click);
  
    // ------------------------------
    // ✅ Valid Calculations
    // ------------------------------
  
    it('adds FF + 1 = 100', () => {
      clickSeq(['F', 'F', '+', '1', '=']);
      expectInput('100');
    });
  
    it('subtracts 2B - 1A = 11', () => {
      clickSeq(['2', 'B', '-', '1', 'A', '=']);
      expectInput('11');
    });
  
    it('multiplies A * 2 = 14', () => {
      clickSeq(['A', '*', '2', '=']);
      expectInput('14');
    });
  
    it('divides 1F / 3 = A', () => {
      clickSeq(['1', 'F', '/', '3', '=']);
      expectInput('A');
    });
  
    // ------------------------------
    // ⚠️ Error Handling (toast based)
    // ------------------------------
  
    it('shows error for missing operator (e.g., A1=)', () => {
      clickSeq(['A', '1', '=']);
      expectToast('No operator found. Use one of +, -, *, /');
    });
  
    it('shows error for too many digits (e.g., ABC+1)', () => {
      clickSeq(['A', 'B', 'C', '+', '1', '=']);
      expectToast('Input values must not exceed 2 hex digits');
    });
  
    it('shows error for invalid subtraction (1A - 2B)', () => {
      clickSeq(['1', 'A', '-', '2', 'B', '=']);
      expectToast('Subtraction cannot result in a negative value');
    });
  
    it('shows error for division by zero (10 / 0)', () => {
      clickSeq(['1', '0', '/', '0', '=']);
      expectToast('Division by zero is not allowed');
    });
  
    it('shows error for unsupported operator (simulate with ⌫)', () => {
      clickSeq(['A', '+']);
      click('⌫'); // Removes the operator
      click('=');
      expectToast('No operator found. Use one of +, -, *, /');
    });
  
    // ------------------------------
    // 🧹 Clear & Backspace Behavior
    // ------------------------------
  
    it('clears input and allows retry after error', () => {
      clickSeq(['F', 'F', '+', 'F', 'F', 'F', 'F', '=']);
      expectToast('Input values must not exceed 2 hex digits');
  
      click('Clear');
      clickSeq(['C', '*', '2', '=']);
      expectInput('18');
    });
  
    it('backspaces operator and continues correctly', () => {
      clickSeq(['A', '+', '1']);
      click('⌫'); // removes "1"
      click('2');
      click('=');
      expectInput('C');
    });
  
    it('clears after calculation and allows new input', () => {
      clickSeq(['A', '+', '1', '=']);
      expectInput('B');
      click('Clear');
      expectInput('');
      clickSeq(['F', '-', 'A', '=']);
      expectInput('5');
    });
  
    // ------------------------------
    // ⌨️ Lowercase Typing Support
    // ------------------------------
  
    it('supports lowercase hex input (a + b = 15)', () => {
      cy.get('input').type('a+b');
      click('=');
      expectInput('15');
    });
  });