# Projeto Pizzaria

Este projeto é uma plataforma desenvolvida para servir a comunidade de airsoft, facilitando a organização de eventos, compartilhamento de experiências e gestão de equipes. Utiliza Node.js v20.6.1, Prisma como ORM e PostgreSQL como banco de dados.

# Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- Node.js v20.6.1
- PostgreSQL
- Um gerenciador de pacotes como o npm ou yarn

# Configuração

Para rodar este projeto, instale as dependências uma vez clonado ou baixado:

```
# Clone este repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
npm install

# Ou se você usa yarn
yarn install

# Crie um arquivo .env na raiz do projeto e configure suas variáveis de ambiente
# Exemplo:
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

```

# Executando o projeto

```
# Para rodar o servidor em modo de desenvolvimento
npm run dev
# ou
yarn dev

# Para rodar o servidor em modo de produção
npm start
# ou
yarn start

```

# Testes

```
# Execute os testes automatizados
npm test
# ou
yarn test

```

# Contribuições

Contribuições são muito bem-vindas! Se você tem sugestões para melhorar este aplicativo, sinta-se à vontade para fazer um fork do repositório e enviar um pull request, ou abrir uma issue com a tag "melhoria".

# Padrões de Pull Request

- **Nome da branch**: Use um prefixo como feat/, fix/, docs/, seguido pelo ID da issue e uma descrição curta. 

Exemplo: feat/123-add-login

- **Commits**: Mensagens de commit claras e concisas, descrevendo brevemente as mudanças feitas.

- **Descrição do Pull Request** : Inclua o contexto necessário e qualquer informação que ajude os revisores a entender as mudanças, assim como testes ou impactos.

- **Reviews**: Solicite a revisão de pelo menos dois membros da equipe antes de mesclar suas mudanças. 
