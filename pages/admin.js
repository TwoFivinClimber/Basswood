import React from 'react';
import { Button, Card, Container } from 'semantic-ui-react';
import Router from 'next/router';

function Admin() {
  return (
    <Container style={{ padding: '1em' }}>
      <Card.Group style={{ height: '100%' }}>
        <Card fluid>
          <Card.Content>
            <Button floated="right" color="purple" content="To Basket Admin" onClick={() => Router.push('/basketAdmin')} />
            <Card.Header as="h1">Basket Admin</Card.Header>
          </Card.Content>
          <Card.Content>
            Modify your current basket or create next weeks basket
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Button floated="right" color="purple" content="To Veg Admin" onClick={() => Router.push('/vegAdmin')} />
            <Card.Header as="h1">Veg Admin</Card.Header>
          </Card.Content>
          <Card.Content>
            Add crops to your database
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Button floated="right" color="purple" content="To Product Admin" />
            <Card.Header as="h1">Basket Admin</Card.Header>
          </Card.Content>
          <Card.Content>
            Add products for sale and adjust quantaties
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Admin;
