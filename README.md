
# 📜 Stranger Things API - Testes de Automação

Este projeto é uma automação de testes para a API da série **Stranger Things**. Utilizando a biblioteca [Pactum](https://pactumjs.github.io/) para testes de API e [Jest](https://jestjs.io/) como framework de teste, validamos a resposta da API e sua estrutura de dados para garantir o correto funcionamento dos endpoints.

## 📌 Proposta do Projeto

O objetivo deste projeto é:
- Verificar o comportamento de cada endpoint da API de Stranger Things.
- Assegurar que os dados retornados estejam no formato e com os campos esperados.
- Testar diferentes cenários de resposta, incluindo casos de erro.

## 🛠 Pré-requisitos

- **Node.js** (v14 ou superior) instalado no seu sistema.
- Gerenciador de pacotes **npm** ou **yarn**.

## 📦 Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/anacarolina1002/stranger-things-tests-api.git
    cd stranger-things-tests-api
    ```

2. Instale as dependências:
    ```bash
   npm install --save-dev
    ```

## 🚀 Execução dos Testes

Para executar os testes, basta rodar o seguinte comando no terminal:

```bash
npm run ci
```

Todos os testes serão executados, e você verá o resultado de cada um no terminal.

## 🧪 Estrutura de Testes

Os testes foram organizados para cobrir operações positivas e negativas:

### Operações Positivas ✅

- **Listar todos os personagens**: Verifica se todos os personagens são retornados e possuem os campos corretos.
- **Buscar personagem por ID**: Testa a resposta ao buscar um personagem específico pelo ID.
- **Buscar personagens aleatórios**: Garante que o endpoint retorne 3 personagens de forma aleatória.
- **Buscar personagem por nome**: Busca um personagem específico pelo nome.
- **Paginação**: Valida a resposta ao paginar resultados.

### Operações Negativas 🚫

- **Busca por ID inválido**: Confirma que a API retorna um erro ao buscar com um ID inexistente.
- **Busca por nome inválido**: Deveria retornar um erro, mas atualmente a API retorna um array vazio. Implementamos o teste com base no comportamento atual.

## 🌐 Endpoints da API

- **Base URL**: `https://stranger-things-api.fly.dev/api/v1/characters`

| Método | Endpoint                   | Descrição                          |
|--------|-----------------------------|------------------------------------|
| GET    | `/characters`              | Retorna todos os personagens       |
| GET    | `/characters/{id}`         | Busca um personagem por ID         |
| GET    | `/characters/random`       | Retorna personagens aleatórios     |
| GET    | `/characters?name={name}`  | Busca um personagem por nome       |
| GET    | `/characters?perPage=5&page=1` | Paginação                         |

## 🧰 Estrutura de Código

- **`simple-reporter.js`**: Configuração do reporter personalizado.
- **`stranger-things.test.js`**: Arquivo principal de testes com os cenários descritos.

## 📚 Dependências Utilizadas

- [**Pactum**](https://pactumjs.github.io/): Biblioteca para testes de API.
- [**Jest**](https://jestjs.io/): Framework de testes.
- [**http-status-codes**](https://www.npmjs.com/package/http-status-codes): Códigos de status HTTP padronizados.

## ⚠️ Observações

- Alguns testes negativos dependem da configuração da API. Por exemplo, a busca de personagem por um nome inválido retorna um array vazio em vez de um erro, o que foi observado durante a implementação.

## 👨‍💻 Contribuição

Sinta-se à vontade para abrir Issues ou Pull Requests caso tenha sugestões ou melhorias para o projeto.

---

Feito com ❤️ por [Ana Carolina Machado](https://github.com/anacarolina1002) 👾
