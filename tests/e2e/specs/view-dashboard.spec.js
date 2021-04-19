// https://docs.cypress.io/api/introduction/api.html

describe("Render the page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Arc Crypto Monitor");
  });
});
