import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { resolve } from 'path';
import { buildSchema } from 'type-graphql';

import { configs } from 'src/common/configs';
import { UsersResolver } from 'src/resolvers/users/users.resolver';

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: resolve(__dirname, './graphql/schema.gql')
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  });

  const { url } = await server.listen(configs.PORT);

  console.log(`Server is running, GraphQL Playground available at ${url}`);
};

bootstrap();
