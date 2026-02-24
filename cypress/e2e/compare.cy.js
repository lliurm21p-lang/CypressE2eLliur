describe('Pruebas de Descarga de Archivos', () => {

  // Antes de cada 'it', limpiamos el disco duro
  beforeEach(() => {
    cy.task('borrarDescargas');
  });

  it('Debe descargar un archivo y validar su existencia', () => {
    cy.visit('https://demoqa.com/upload-download');
    cy.get('#downloadButton').click();

    // Como la carpeta estaba vacía, tenemos 100% de certeza 
    // de que este archivo es el de ESTA prueba y no un residuo.
    cy.readFile('cypress/downloads/sampleFile.jpeg').then((file) => {
      expect(file.length).to.be.greaterThan(0);
    });
  });

});