# Versions.Auth

## Visão Geral

Versions.Auth modulo do projeto responsavel por fazer a validação do usuário e retornar o token JWT de autenticação do usuário bem como os dados do usuário.

## Tecnologias Utilizadas

- **Linguagem de Programação**: TypeScript
- **Framework**: NestJS (framework progressivo para Node.js)
- **Gerenciador de Pacotes**: npm

## Estrutura do Projeto

- **`src/`**: Diretório principal do código-fonte
  - `app.module.ts`
  - `app.controller.ts`
  - `app.service.ts`
  - `main.ts`
  - **`const/`**: Constantes ultilizadas no projeto
    - `commandsAuth.const.ts`
    - `commandsUsuario.const.ts`
  - **`dto/`**: DTOs ultilizados no projeto
    - **`request/`**: DTOs das requests
      - `authLogin.dto.ts`
    - **`response/`**: DTOs das response
      - `authLogin.dto.ts`

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/JoaoVitorGirardii/versions.auth.git
   cd versions.auth
   ```

2. Instale as dependências:
   ```
   npm install
   ```

### Executando a Aplicação

- Inicie no modo de desenvolvimento:

  ```
  npm run start:dev
  ```

### Handler disponivel

- `LOGIN/`: Realiza o login do usuário validando senha e e-mail, retornando o JWT de acesso.
