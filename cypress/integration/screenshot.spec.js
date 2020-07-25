const routes = ['badge.html', 'button.html'];

describe('Component screenshot', () => {
  routes.forEach((route) => {
    const componentName = route.replace('.html', '');
    const testName = `${componentName} should match previous screenshot`;

    it(testName, () => {
      cy.visit(route);
  
      cy.get('.cypress-wrapper').each((element, index) => {
        const name = `${componentName}-${index}`;
  
        cy.wrap(element).matchImageSnapshot(name);
      });
    });
  });
});
