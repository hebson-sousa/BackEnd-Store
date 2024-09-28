# 📚 Projeto do Curso Formação em Dev Web - Geração Tech

Este projeto é o backend da aplicação desenvolvida como parte da **Formação em Dev Web** no programa **Geração Tech**. A aplicação foi criada utilizando **Node.js**, **Express.js** e **Sequelize**, implementando uma API RESTful com suporte à autenticação via **JWT (JSON Web Token)**. Além disso, o projeto garante o armazenamento seguro de variáveis de ambiente utilizando o pacote **Dotenv**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Plataforma para construção de aplicações em JavaScript no lado do servidor.
- **Express.js**: Framework para simplificação da criação de rotas e middleware.
- **Sequelize**: ORM (Object-Relational Mapping) para integrar e manipular o banco de dados MySQL.
- **JWT (JSON Web Token)**: Mecanismo de autenticação baseado em token.
- **Dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env` de forma segura.

---

## ⚙️ Funcionalidades

- **API RESTful**: Permite a criação, leitura, atualização e exclusão de recursos (CRUD).
- **Autenticação com JWT**: Garantia de segurança nas rotas protegidas.
- **Configuração Segura de Ambiente**: Uso de variáveis de ambiente para proteger dados sensíveis.

---

## 📦 Instalação

Siga os passos abaixo para clonar e executar o projeto localmente:

1. Clone o repositório:
   
   ```bash
   git clone https://github.com/hebson-sousa/Projeto-BackEnd.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd projeto-backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## 🔧 Configuração

Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

1. Copiar código

```bash
APP_KEY_TOKEN="sua_chave_secreta"
DB_HOST="localhost"
DB_USER="seu_usuario"
DB_PASS="sua_senha"
DB_NAME="nome_do_banco"
DB_DIALECT="mysql"
```

2. Configure seu banco de dados MySQL com as credenciais fornecidas no arquivo .env.

## 🏃‍♂️ Execução

1. Inicie o servidor:

```bash
npm start
```
2. A API estará disponível no endereço:

```arduino
http://localhost:3000
```

## 🗂️ Estrutura do Projeto

```plaintext
├── src
│   ├── controllers     # Lógica dos controladores da API
│   ├── models          # Definições dos modelos Sequelize
│   ├── routes          # Definição das rotas da API
│   └── middlewares     # Middlewares como autenticação JWT
├── .env                # Arquivo de variáveis de ambiente
├── package.json        # Dependências e scripts do projeto
└── server.js           # Ponto de entrada da aplicação
```

## 🔒 Segurança

Autenticação JWT: Implementação de autenticação e proteção de rotas sensíveis.
Dotenv: Variáveis de ambiente mantêm seguras informações confidenciais como tokens e credenciais do banco de dados.

## ⚡ Feito por Hebson Sousa durante o programa Geração Tech.
