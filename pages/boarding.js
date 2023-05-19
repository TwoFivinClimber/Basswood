import React from 'react';
import {
  Button,
  Card, Container, Divider, Header, List, Segment,
} from 'semantic-ui-react';

function Boarding() {
  return (
    <Container>
      <br />
      <Header textAlign="center" as="h1">Boarding at Basswood Farm</Header>
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        Form a short stay to becoming part of the farm, we take care of your equine needs
      </p>
      <Divider />
      <Header textAlign="center" as="h2">Rates</Header>
      <br />
      <Card.Group itemsPerRow={2} style={{ justifyContent: 'space-between' }}>
        <Card style={{ backgroundColor: 'tan' }}>
          <Card.Content textAlign="center">
            <Card.Header>Short Term</Card.Header>
            <Segment>
              <Card.Header as="h4">$120 / month</Card.Header>
              <Card.Description>
                <List as="ul">
                  <List.Item as="li" content="Feed Included" />
                  <List.Item as="li" content="Lots of Pets" />
                  <List.Item as="li" content="Free to Roam" />
                  <List.Item as="li" content="Grooming Services" />
                </List>
              </Card.Description>
            </Segment>
            <Button color="orange" content="Contact Us" />
          </Card.Content>
        </Card>
        <Card style={{ backgroundColor: 'tan' }}>
          <Card.Content textAlign="center">
            <Card.Header>Long Term</Card.Header>
            <Segment>
              <Card.Header as="h4">$2000 / year</Card.Header>
              <Card.Description>
                <List as="ul">
                  <List.Item as="li" content="Feed Included" />
                  <List.Item as="li" content="Lots of Pets" />
                  <List.Item as="li" content="Free to Roam" />
                  <List.Item as="li" content="Groomig Services" />
                </List>
              </Card.Description>
            </Segment>
            <Button color="orange" content="Contact Us" />
          </Card.Content>
        </Card>
      </Card.Group>
      <br />
      <Header textAlign="center" as="h1">What&apos;s Included</Header>
      <p style={{ fontSize: '18px' }}>
        We take pride in offering the best.....It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>
      <Header>Highlights</Header>
      <List as="ul">
        <List.Item as="li" content="Something" />
        <List.Item as="li" content="Something Else" />
        <List.Item as="li" content="Something More" />
      </List>
      <br />
    </Container>
  );
}

export default Boarding;
