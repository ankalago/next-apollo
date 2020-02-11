import gql from 'graphql-tag';

const JOBS_QUERY = gql`
  query Jobs {
    getCatalogsQueryFunction {
      vehicle_view{
        id
        value
        image
      }
    }
  }
`;

export default JOBS_QUERY;
