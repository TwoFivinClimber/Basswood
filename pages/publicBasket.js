import React, { useState } from 'react';
import {
  Card, Container, Header, Image,
} from 'semantic-ui-react';
import { getCurrentBasket } from '../utils/data/mergedData';
import PublicVegCard from '../components/PublicVegCard';

function PublicBasket() {
  const [basket, setBasket] = useState({});

  const getTheBasket = () => {
    getCurrentBasket().then(setBasket);
  };

  getTheBasket();

  return (
    <Container>
      <br />
      <Header as="h1" style={{ fontSize: '3.5em' }} textAlign="center" content={basket.title} />
      <Header as="h3" textAlign="center" content={`Week ${basket.week}`} />
      <br />
      <Image size="huge" centered src="/images/basket.jpg" />
      <br />
      <Header as="h3">{basket.description}</Header>
      <br />
      <Card.Group centered>
        {basket.veg?.map((veg) => (
          <PublicVegCard obj={veg} />
        ))}
      </Card.Group>
    </Container>
  );
}

export default PublicBasket;
