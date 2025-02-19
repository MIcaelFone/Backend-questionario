# Questionário API Backend

Uma API RESTful para criação e gerenciamento de questionários dinâmicos, desenvolvida em Node.js com Express e MySQL

## 🚀 Funcionalidades

### CRUD de Questões
- **Criar, listar, atualizar e excluir questões**
- Buscar questões por ID, título ou disponibilidade
- Rotas relacionadas: `/questoes`

### Opções de Múltipla Escolha
- Adicionar opções a perguntas
- Listar opções vinculadas a uma questão
- Atualizar texto das opções
- Rotas relacionadas: `/opcao`

### Sistema de Votação
- Registro de votos anônimos ou identificados
- Validação de votos (evitar duplicações/opções inválidas)
- Contagem de votos em tempo real por opção
- Rotas relacionadas: `/votos`

## 📦 Tecnologias

- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Banco de Dados**: Mysql
- **ORM**: Sequelize (v6+)
- **Outras**: Dotenv, CORS

## 🔧 Instalação

1. **Clonar repositório**:
   ```bash
   git clone https://github.com/seu-usuario/questionario-backend.git
   cd questionario-backend
   ```
2. **Instalar as bibliotecas utilizadas no projeto**:
   ```bash
     npm install
     ```
## ⚙️ Configuração do Ambiente (`.env`)

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Banco de Dados
USER=seu_usuario_do_banco
PASSWORD=senha_do_banco
HOST=endereco_do_servidor (ex: localhost ou 127.0.0.1)
DATABASE=nome_do_banco_de_dados
DB_PORT=porta_do_banco (ex: 3306 para MySQL))
```
## 📡 Endpoints da API

### **Questões**  
| Método | Endpoint                     | Descrição                                |  
|--------|------------------------------|------------------------------------------|  
| POST   | `/questoes`                  | Cria uma nova questão                    |  
| GET    | `/questoes`                  | Lista todas as questões cadastradas      |  
| GET    | `/questoes/disponivel`       | Busca questões marcadas como disponíveis |  
| GET    | `/questoes/:id`              | Retorna uma questão específica por ID    |  
| GET    | `/questoes/:titulo`          | Busca o ID de uma questão pelo título    |  
| PUT    | `/questoes/:id`              | Atualiza os dados de uma questão         |  
| DELETE | `/questoes/:id`              | Exclui permanentemente uma questão       |  

---

### **Opções de Múltipla Escolha**  
| Método | Endpoint                     | Descrição                                |  
|--------|------------------------------|------------------------------------------|  
| POST   | `/opcao`                     | Adiciona uma nova opção a uma questão    |  
| GET    | `/opcao/:idquestao`          | Lista todas as opções de uma questão     |  
| PUT    | `/opcao/:idopcao`            | Edita o texto de uma opção existente     |  

---

### **Votos/Respostas**  
| Método | Endpoint                     | Descrição                                |  
|--------|------------------------------|------------------------------------------|  
| POST   | `/votos`                     | Registra um voto em uma opção            |  
| GET    | `/votos/:id`                 | Retorna a contagem de votos de uma opção |  

