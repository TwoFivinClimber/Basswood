import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import InfoCard from '../components/InfoCard';
import offerings from '../utils/data/offerings';
import woodhouseCopy from '../utils/data/copy/woodhouse';

function Woodhouse() {
  return (
    <Container style={{ padding: '4em' }}>
      <Header as="h1">Wood House Homestead</Header>
      <p style={{ fontSize: '18px' }}>
        {woodhouseCopy.overview}
      </p>
      <Divider />
      <Header textAlign="center" as="h2">Offerings</Header>
      {offerings?.map((item) => (
        <InfoCard key={item.title} obj={item} orient={offerings.indexOf(item)} />
      ))}
    </Container>
  );
}

export default Woodhouse;
