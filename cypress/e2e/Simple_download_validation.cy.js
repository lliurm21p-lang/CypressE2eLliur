describe('File download test', () => {

  it('Download file and validate it', () => {

    cy.visit('https://demoqa.com/upload-download');
    cy.get('#downloadButton').click();

    // 3. Validamos la descarga usando cy.readFile()
    // Cypress buscará automáticamente en la ruta relativa desde la raíz de tu proyecto.
    // Además, este comando tiene un 'timeout' implícito: esperará pacientemente 
    // a que el archivo termine de descargar antes de fallar.
    cy.readFile('cypress/downloads/sampleFile.jpeg').then((fileContent) => {
      expect(fileContent).to.exist;
      expect(fileContent.length).to.be.greaterThan(0);
    
      cy.log('✅ File downloaded and validated successfully.');
    });

  });
});