import React, { useEffect, useState } from 'react';
import {
  Button,
  Card, Container, Divider, Header, Image,
} from 'semantic-ui-react';
import Link from 'next/link';
import { getCurrentBasket } from '../utils/data/mergedData';
import PublicVegCard from '../components/PublicVegCard';

function PublicBasket() {
  const [basket, setBasket] = useState({});

  const getTheBasket = () => {
    getCurrentBasket().then(setBasket);
  };

  useEffect(() => {
    getTheBasket();
  }, []);

  return (
    <Container>
      <br />
      <Header as="h1" style={{ fontSize: '3.5em' }} textAlign="center" content="This Weeks Basket" />
      <Header as="h1" textAlign="center" content={`"${basket.title}"`} />
      <Divider />
      <Image size="huge" centered src="/images/basket.jpg" />
      <br />
      <Header as="h2" content={`Week: ${basket.week}`} />
      <p style={{ fontSize: '1.5em' }}>{basket.description}</p>
      <br />
      <Card.Group centered>
        {basket.veg?.map((veg) => (
          <PublicVegCard obj={veg} />
        ))}
      </Card.Group>
      <Header as="h2" content="Not a Member ?" />
      <p style={{ fontSize: '1.5em' }}>
        Contact us to get on the list
        <Link passHref href="/contact">
          <Button color="orange" content="Here" size="large" style={{ marginLeft: '1em' }} />
        </Link>
      </p>
    </Container>
  );
}

export default PublicBasket;
