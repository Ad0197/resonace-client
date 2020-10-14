import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';

const endpoint = 'http://localhost:5000/graphql';

const client = new GraphQLClient(endpoint, {});

export default (options: RequestInit = {}) => (!!options) ? new GraphQLClient(endpoint, options) : client
