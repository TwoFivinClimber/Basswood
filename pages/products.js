/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from 'semantic-ui-react';
import PublicProductCard from '../components/PublicProductCard';
import PublicVegCard from '../components/PublicVegCard';
import { getTheGoods } from '../utils/data/mergedData';

export default function Products({ products, veggies }) {
  return (
    <>
      <Header content="Products" />
      {products?.map((p) => (
        <PublicProductCard obj={p} />
      ))}
      <br />
      <Header content="Veggies" />
      {veggies?.map((p) => (
        <PublicVegCard obj={p} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { products, veggies } = await getTheGoods();
    return {
      props: {
        products,
        veggies,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
        veggies: [],
      },
    };
  }
}
