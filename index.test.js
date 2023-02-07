const index = require('./index');

describe('encontrando o nome na tela', () => {
  it('Verifica se o nome esta sendo renderizado em tela', () => {
   
    expect(index.nome).toBe(true);
    
  });
});