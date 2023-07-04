import React, { useState, useEffect } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import { getCurrentBasket } from '../utils/data/mergedData';

function PublicBasket() {
  const [basket, setBasket] = useState({});

  useEffect(() => {
    getCurrentBasket().then(setBasket);
  }, []);
  return (
    <Container>
      <br />
      <Header as="h1" style={{ fontSize: '4em' }} textAlign="center" content={basket.title} />
      <Header as="h3" textAlign="center" content={`Week ${basket.week}`} />
      <br />
      <Image size="huge" centered src="/images/basket.jpg" />
      <br />
      <Header as="h3">{basket.description}</Header>
      <br />
    </Container>
  );
}

export default PublicBasket;
