describe("portfolio", () => {
  it("works", () => {
    cy.visit("/");
    cy.findByText(/Welcome to Sid's portfolio!/i);
  });
});
