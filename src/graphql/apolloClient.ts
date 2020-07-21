import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers } from './resolvers'
import { REACT_APP_GRAPHQL_URL } from '../config'

const link = createHttpLink({
  uri: REACT_APP_GRAPHQL_URL,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  link,
  resolvers
});

cache.writeData({ data: { history: { items: [], __typename: 'History' } } });

export default apolloClient;
