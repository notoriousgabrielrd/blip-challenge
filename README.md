# API Intermediária para Chatbot

Esta é uma API intermediária desenvolvida com **NestJS** para consumir a API pública do GitHub e fornecer informações sobre os repositórios da organização **Take.net**. O objetivo é integrar essa API a um chatbot e listar os 5 repositórios mais antigos em C#.

## 🚀 Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de aplicações escaláveis.
- **TypeScript**: Linguagem utilizada para desenvolvimento, proporcionando tipagem estática.
- **Axios**: Cliente HTTP para fazer requisições à API do GitHub.
- **ESLint e Prettier**: Ferramentas para análise de código e formatação.

## 📦 Pré-requisitos

Antes de começar, você precisa ter o **Node.js** (versão 18 ou superior) e o **npm** instalados na sua máquina.

## 📥 Como Baixar o Projeto

Clone o repositório do GitHub usando o comando:

```bash
git clone https://github.com/notoriousgabrielrd/blip-challenge.git

Acesse a pasta do projeto:

cd api-intermediaria && cd blip-challenge
``` 
## 🛠️ Como Rodar o Projeto Localmente
1. Instale as dependências do projeto:

```bash
npm install
```
2. Configuração do GitHub Token

Crie um arquivo `.env` na raiz do projeto e adicione o token de acesso do GitHub:
Crie um token no GitHub ([Instruções](https://github.com/settings/tokens)).
```bash
GITHUB_TOKEN=seu_token_aqui
```
3. Executar o Projeto

```bash
npm run start:dev
```
A aplicação estará disponível em: http://localhost:3000

4. Build para Produção

```bash
npm run build
```
E para executar o build:

```bash
npm run start:prod
```

## Sobre o deploy

Este projeto foi deployado no Render por esses motivos:

- O Render oferece uma experiência de implantação automatizada, integrada com repositórios GitHub e GitLab. Cada vez que você faz um push para a branch principal do seu projeto, o Render detecta automaticamente a atualização e realiza o build e o deploy da aplicação.
- Isso simplifica o fluxo de trabalho e elimina a necessidade de deploy manual, permitindo que você se concentre mais no desenvolvimento e menos nas operações.
- O Render oferece um plano gratuito para projetos pequenos e open-source, o que é uma ótima opção para este projeto.

## Link da API

Exemplo de requisição:
```bash
curl https://blip-challenge-1.onrender.com/repositorios/csharp
```

Retorno esperado:
```bash
{
   "status":200,
   "data":[
      {
         "imagem":"https://avatars.githubusercontent.com/u/4369522?v=4",
         "titulo":"takenet/library.data",
         "subtitulo":"Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications"
      },
      {
         "imagem":"https://avatars.githubusercontent.com/u/4369522?v=4",
         "titulo":"takenet/library.logging",
         "subtitulo":"Provides a simple logging interface for applications and some basic implementations of this interface"
      },
      {
         "imagem":"https://avatars.githubusercontent.com/u/4369522?v=4",
         "titulo":"takenet/libphonenumber-csharp",
         "subtitulo":"Forking original c# port"
      },
      {
         "imagem":"https://avatars.githubusercontent.com/u/4369522?v=4",
         "titulo":"takenet/Takenet.ScoreSystem",
         "subtitulo":"Takenet score system"
      }
    ]
}
```


### Feito com ❤️ por [Gabriel Rodrigues](https://github.com/notoriousgabrielrd).

Se precisar de mais alguma coisa, estou à disposição!
email: grddourado@gmail.com
