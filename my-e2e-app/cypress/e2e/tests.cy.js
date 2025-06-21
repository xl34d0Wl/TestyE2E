describe('Testy E2E aplikacji', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080');
  });

  it('1. Powinna załadować stronę główną', () => {
    cy.contains('Witaj na naszej stronie!');
  });

  it('2. Powinna przejść do strony "O nas"', () => {
    cy.get('a[href="about.html"]').click();
    cy.url().should('include', 'about.html');
    cy.contains('Kim jesteśmy?');
  });

  it('3. Powinna przejść do strony "Usługi"', () => {
    cy.get('a[href="services.html"]').click();
    cy.url().should('include', 'services.html');
    cy.contains('1. Tworzenie stron internetowych');
  });

  it('4. Powinna pokazać formularz kontaktowy po kliknięciu przycisku', () => {
    cy.get('#contactForm').should('not.be.visible');
    cy.get('#showFormBtn').click();
    cy.get('#contactForm').should('be.visible');
  });

  it('5. Powinna wypełnić formularz', () => {
    cy.get('#showFormBtn').click();
    cy.get('#name').type('MarekJakubMarcin');
    cy.get('#email').type('wariaty@spzlo.com');
  });

  it('6. Powinna wysłać formularz', () => {
    cy.get('#showFormBtn').click();
    cy.get('#name').type('MarekJakubMarcin');
    cy.get('#email').type('wariaty@spzlo.com');
    cy.get('form').submit();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Formularz wysłany!');
    });
  });

  it('7. Powinna przejść do strony "Kontakt"', () => {
    cy.get('a[href="contact.html"]').click();
    cy.url().should('include', 'contact.html');
    cy.contains('Kontakt');
  });
});


