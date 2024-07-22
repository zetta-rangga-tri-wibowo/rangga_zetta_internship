import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';

const uri = 'https://api.delivery-a.zetta-demo.space/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({ uri: uri });
  const authLink = new ApolloLink((operation, forward) => {
    // Get the authentication token from local storage if it exists
    const token = localStorage.getItem(environment.tokenKey);
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    // Call the next link in the middleware chain.
    return forward(operation);
  });
  // Error handling link
  const errorLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      // Check for errors in response and show alert if found
      if (response.errors && response.errors.length > 0) {
        // alert( response.errors[0].message )
      }
      return response;
    });
  });
  return {
    link: ApolloLink.from([errorLink, authLink, http]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
