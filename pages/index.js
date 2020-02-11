import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import JOBS_QUERY from '../graphql/jobs.query';

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(JOBS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {data.getCatalogsQueryFunction.map(catalogs => {
          return catalogs.vehicle_view.map(catalog => {
            return <li key={`job__${catalog.id}`}>{catalog.value}</li>;
          });
        })}
      </ul>
    </div>
  );
};

export default Home;
