const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ! Mon application est maintenant DevOpsifiee par IPA sur Kubernetes avec ArgoCD !\n');
});
server.listen(3000, '0.0.0.0', () => {
  console.log('Serveur démarré sur le port 3000');

});
