import React from 'react';
import {
  Card, Segment, List, Button,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';

function TestRateCard() {
  const router = useRouter();
  return (
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
        <Button color="orange" onClick={() => router.push('/')} content="Contact Us" />
      </Card.Content>
    </Card>
  );
}

export default TestRateCard;
