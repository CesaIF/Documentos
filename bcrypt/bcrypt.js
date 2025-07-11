const bcrypt = require('bcrypt');

const senha = '12345678';
const saltRounds = 10;

bcrypt.hash(senha, saltRounds, function(err, hash) {
  if (err) {
    console.error('Erro ao gerar hash:', err);
    return;
  }
  console.log('Senha hashada:', hash);
});
