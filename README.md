

<body>
    <h1>API de Gerenciamento de Jogos</h1>

  <p>Esta é uma API simples para gerenciar informações sobre jogos de vídeo game.</p>

  <h2>Funcionalidades</h2>

   <ul>
        <li><strong>GET /jogos</strong>: Retorna uma lista de jogos cadastrados no banco de dados.</li>
        <li><strong>POST /jogos</strong>: Permite adicionar novos jogos ao banco de dados.</li>
    </ul>

   <h2>Configuração</h2>
    <p>Antes de rodar a aplicação, certifique-se de ter Node.js e MySQL instalados.</p>

   <h3>Instalação</h3>

   <pre><code>
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
    </code></pre>

   <h3>Configuração do Banco de Dados</h3>

  <p>Configure o arquivo <code>database/database.js</code> com as credenciais do seu banco de dados.</p>

   <h2>Rodando a Aplicação</h2>

   <pre><code>
npm start
    </code></pre>

  <p>A aplicação será iniciada em <code>http://localhost:8001</code>.</p>

   <h2>Exemplo de Requisições</h2>

  <h3>GET /jogos</h3>

  <pre><code>
GET http://localhost:8001/jogos
    </code></pre>

   <h3>POST /jogos</h3>

   <pre><code>
POST http://localhost:8001/jogos

Body (JSON):
{
    "nome": "Call of Duty: Modern Warfare",
    "ano": 2019,
    "price": 49.99
}
    </code></pre>

  <h2>Contribuindo</h2>

  <p>Contribuições são bem-vindas! Por favor, abra uma <a href="https://github.com/seu-usuario/nome-do-repositorio/issues">issue</a> ou envie um <a href="https://github.com/seu-usuario/nome-do-repositorio/pulls">pull request</a>.</p>

   <h2>Licença</h2>

  <p>Este projeto está sob a licença MIT - veja o arquivo <a href="LICENSE">LICENSE</a> para detalhes.</p>

</body>

</html>
