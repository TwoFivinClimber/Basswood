import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { Card, Divider, Header, Segment } from 'semantic-ui-react';
import { getVeggies } from '../utils/data/veg';
import AdminVegCard from '../components/AdminVegCard';

function VegAdmin() {
  const [veggies, setVeggies] = useState([]);

  const getTheContent = () => {
    getVeggies().then(setVeggies);
  };

  useEffect(() => {
    getTheContent();
  }, []);

  return (
    <Segment>
      <Header as="h1" content="Manage Veggies" />
      <Segment>
        <Header content="The Garden" />
        <Divider />
        <Card.Group centered>
          {veggies.map((i) => (
            <AdminVegCard obj={i} />
          ))}
        </Card.Group>
      </Segment>
    </Segment>
  );
}

export default VegAdmin;
