import React, { useEffect, useState } from 'react';
import {
  Button, Card, Container, Header, Segment,
} from 'semantic-ui-react';
import { getVeggies } from '../utils/data/api';
import AdminVeg from '../components/adminVegCard';

function Admin() {
  const [liveBasket, setLiveBasket] = useState([]);

  const getTheContent = () => {
    getVeggies().then(setLiveBasket);
  };

  useEffect(() => {
    getTheContent();
  }, []);
  return (
    <Container>
      <Header as="h1" content="Basket Admin" />
      <Segment>
        <Header as="h3">
          Live Basket
          <Button floated="right" color="orange" content="Edit" />
        </Header>
        <p>Week 20</p>
        <Card.Group centered>
          {liveBasket?.map((veg) => (
            <AdminVeg obj={veg} />
          ))}
        </Card.Group>
      </Segment>
    </Container>
  );
}

export default Admin;
