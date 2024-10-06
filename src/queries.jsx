import { gql } from '@apollo/client';

export const CONTENT_VIEW_QUERY = gql`
  query contentViewQuery($first: Int, $skip: Int, $orderBy: ProductOrderByInput) {
    content: productsConnection(first: $first, skip: $skip, orderBy: $orderBy) {
      edges {
        node {
          name
          surname
          desc
          release
          cover
          platforms
          price
          genre {
            name
          }
          developers
          footage
        }
      }
    }
  }
`;
