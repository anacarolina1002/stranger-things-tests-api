import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';

describe('Stranger Things', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://stranger-things-api.fly.dev';

  p.request.setDefaultTimeout(30000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('Operações positivas com a API de Stranger Things', () => {
    it('Deve retornar todos os personagens com os campos corretos', async () => {
      const characterSchema = {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            aliases: { type: 'array' },
            otherRelations: { type: 'array' },
            affiliation: { type: 'array' },
            occupation: { type: 'array' },
            residence: { type: 'array' },
            appearsInEpisodes: { type: 'array' },
            photo: { type: 'string' },
            name: { type: 'string' },
            status: { type: 'string' },
            born: { type: 'string' },
            gender: { type: 'string' },
            eyeColor: { type: 'string' },
            hairColor: { type: 'string' },
            portrayedBy: { type: 'string' }
          },
          required: ['_id', 'aliases']
        }
      };

      await p
        .spec()
        .get(`${baseUrl}/api/v1/characters`)
        .expectStatus(StatusCodes.OK)
        .expectJsonSchema(characterSchema)
        .inspect()
        .toss();
    });

    it('Deve retornar um personagem pelo ID', async () => {
      const characterSchema = {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          aliases: { type: 'array' },
          otherRelations: { type: 'array' },
          affiliation: { type: 'array' },
          occupation: { type: 'array' },
          residence: { type: 'array' },
          appearsInEpisodes: { type: 'array' },
          photo: { type: 'string' },
          name: { type: 'string' },
          status: { type: 'string' },
          born: { type: 'string' },
          gender: { type: 'string' },
          eyeColor: { type: 'string' },
          hairColor: { type: 'string' },
          portrayedBy: { type: 'string' }
        },
        required: ['_id', 'aliases']
      };

      const id = '5e77d8d2caf0952a9c8499d9';
      await p
        .spec()
        .get(`${baseUrl}/api/v1/characters/${id}`)
        .expectStatus(StatusCodes.OK)
        .expectJsonSchema(characterSchema)
        .inspect()
        .toss();
    });

    it('Deve retornar 3 personagens aleatórios com os campos corretos', async () => {
      const characterSchema = {
        type: 'array',
        minItems: 3,
        maxItems: 3,
        items: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            aliases: { type: 'array' },
            otherRelations: { type: 'array' },
            affiliation: { type: 'array' },
            occupation: { type: 'array' },
            residence: { type: 'array' },
            appearsInEpisodes: { type: 'array' },
            photo: { type: 'string' },
            name: { type: 'string' },
            status: { type: 'string' },
            born: { type: 'string' },
            gender: { type: 'string' },
            eyeColor: { type: 'string' },
            hairColor: { type: 'string' },
            portrayedBy: { type: 'string' }
          },
          required: ['_id', 'aliases']
        }
      };
      await p
        .spec()
        .get(`${baseUrl}/api/v1/characters/random?count=3`)
        .expectStatus(StatusCodes.OK)
        .expectJsonSchema(characterSchema)
        .inspect()
        .toss();
    });
  });

  it('Deve retornar um personagem com uma busca por nome', async () => {
    const characterSchema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          aliases: { type: 'array' },
          otherRelations: { type: 'array' },
          affiliation: { type: 'array' },
          occupation: { type: 'array' },
          residence: { type: 'array' },
          appearsInEpisodes: { type: 'array' },
          photo: { type: 'string' },
          name: { type: 'string' },
          status: { type: 'string' },
          born: { type: 'string' },
          gender: { type: 'string' },
          eyeColor: { type: 'string' },
          hairColor: { type: 'string' },
          portrayedBy: { type: 'string' }
        },
        required: ['_id', 'aliases']
      }
    };

    const name = 'Mike Wheeler';
    await p
      .spec()
      .get(`${baseUrl}/api/v1/characters?${name}`)
      .expectStatus(StatusCodes.OK)
      .expectJsonSchema(characterSchema)
      .inspect()
      .toss();
  });

  it('Busca geral com paginação', async () => {
    const characterSchema = {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          aliases: { type: 'array' },
          otherRelations: { type: 'array' },
          affiliation: { type: 'array' },
          occupation: { type: 'array' },
          residence: { type: 'array' },
          appearsInEpisodes: { type: 'array' },
          photo: { type: 'string' },
          name: { type: 'string' },
          status: { type: 'string' },
          born: { type: 'string' },
          gender: { type: 'string' },
          eyeColor: { type: 'string' },
          hairColor: { type: 'string' },
          portrayedBy: { type: 'string' }
        },
        required: ['_id', 'aliases']
      }
    };

    const perPage = 5;
    const page = 1;

    await p
      .spec()
      .get(`${baseUrl}/api/v1/characters?${perPage}&${page}`) 
      .expectStatus(StatusCodes.OK)
      .expectJsonSchema(characterSchema)
      .inspect()
      .toss();
  });

  describe('Operações negativas com a API de Stranger Things', () => {
    it('Deve retornar um erro na busca de personagem com ID inválido', async () => {
      const id = '40028922';
      await p
        .spec()
        .get(`${baseUrl}/api/v1/characters/${id}`)
        .expectStatus(500)
        .inspect()
        .toss();
    });
  });

  //Erro na própria API, acredito que deveria retornar um erro ao invés de um 
  //array vazio, mas a princípio ficará implementado assim
  it('Deve retornar um erro na busca de personagem com nome inválido', async () => {
    const name = 'Onze';
    await p
      .spec()
      .get(`${baseUrl}/api/v1/characters?${name}`)
      .expectStatus(StatusCodes.OK)
      .expectJson([])
      .inspect()
      .toss();
  });
});
