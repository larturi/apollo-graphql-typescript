<h1 align="center">
  Apollo Server, GraphQL, Typescript, TypeORM & MySQL
</h1>

<h3 align="center">
  -- Poc: API GraphQL con TypeScript --
</h3>

## Getting Started

First, create a MySQL DataBase named graphqlts and edit src/config/typeorm.ts:

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/graphql](http://localhost:3000/graphql) with your browser to see the result.

## Add a new Model

### Example create Person

#### 1. New Entity -> Create the new entity in src/entity/Person.ts

#### 2. Add Resolver -> Create a new file PersonResolver.ts in src/resolvers

#### 3. Declare the new Resolver in src/app.ts

```bash
export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, ProductResolver, PersonResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
```

### Example with Playground http://localhost:3000/graphql

```bash
    mutation createPerson($variables: PersonInput!) {
        createPerson(variables: $variables) {
            firstname
            lastname
            email
        }
    }
```

#### Query Variables

```bash
{
  "variables": {
      "firstname": "Leandro",
    	"lastname": "Arturi",
    	"email": "lea.arturi@gmail.com"
  }
}
```
