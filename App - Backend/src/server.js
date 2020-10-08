import app from './app';

const PORT = 3333;

app.listen(PORT || process.env.PORT, function(e) {
  if (e) console.log('Erro na configuração da porta')
  console.log(`Servidor rodando na porta ${PORT}`);
});
