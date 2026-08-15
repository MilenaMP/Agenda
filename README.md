# 🗂️ Agenda Web - Sistema com Autenticação
<img width="1582" height="703" alt="image" src="https://github.com/user-attachments/assets/6e06077f-8b4a-433b-b2a8-49d6cabca693" /> <br>

>Aplicação fullstack desenvolvida com Node.js e Express, focada em autenticação de usuários, segurança e boas práticas de desenvolvimento.

O projeto permite cadastro, login e gerenciamento de contatos, utilizando sessões seguras e proteção contra ataques comuns na web.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- EJS (Template Engine)
- Webpack
- Babel
- Express-session
- Connect-Mongo
- CSRF (Proteção contra ataques)
- Helmet (Segurança HTTP)
- Bcrypt (Hash de senha)
- Validator

---

## 🔐 Funcionalidades

- Cadastro de usuário
- Login e Logout
- Hash de senha com bcrypt
- Validação de dados
- Sessões armazenadas no MongoDB
- Proteção contra CSRF
- Segurança com Helmet
- Feedback visual para o usuário

---
##  Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Prática de autenticação e sessões

- Segurança em aplicações web

- Estruturação de projeto fullstack

- Preparação para deploy em ambiente de produção

---

## 📂 Estrutura do Projeto
```
├── frontend/ # Arquivos JS e CSS (Webpack)
├── public/ # Arquivos estáticos
├── src/
│ ├── views/ # Templates EJS
│ ├── middlewares/ # Middlewares personalizados
│ └── models/ # Modelos do MongoDB
├── server.js
├── package.json
```
---

## ⚙️ Como Rodar o Projeto Localmente

### 1️ Clone o repositório
```bash
git clone https://github.com/MilenaMP/Agenda
```

## 2️ Instale as dependências
```bash
npm install
```

## 3️ Crie o arquivo .env
```
CONNECTIONSTRING=sua_string_mongodb
SESSION_SECRET=uma_string_segura
PORT=3000
```

## 4️ Build do front-end
```bash
npm run build
```

## 5️ Inicie o servidor

```bash
npm start
```

Acesse:
```
http://localhost:3000
```

---

## 🌍 Deploy

🔗 https://agenda-x0yr.onrender.com

Aplicação preparada para deploy no Render.

>As variáveis de ambiente devem ser configuradas diretamente no painel da plataforma.

---
## 👩‍💻 Desenvolvido por

**Milena**

Estudante de Ciência da Computação e desenvolvedora Front-End, em evolução para o desenvolvimento Full Stack e Backend com Node.js.

---

## 📄 Licença

Projeto desenvolvido para fins educacionais durante curso **JavaScript do Básico ao Avançado — Luiz Otávio Miranda** | [Udemy](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/)
.


