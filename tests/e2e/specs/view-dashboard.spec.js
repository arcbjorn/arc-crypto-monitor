// https://docs.cypress.io/api/introduction/api.html

describe("Render the page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("div", "Arc Crypto Monitor").should("be.visible");
  });
});
