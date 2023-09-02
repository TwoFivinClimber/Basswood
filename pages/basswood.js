import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import InfoCard from '../components/InfoCard';
import provisions from '../utils/data/provisions';
import experiences from '../utils/data/experiences';
import basswoodCopy from '../utils/data/copy/basswood';

function basswood() {
  return (
    <Container style={{ padding: '4em' }}>
      <Header as="h1">Basswood Farm</Header>
      <p style={{ fontSize: '18px' }}>
        {basswoodCopy.overview}
      </p>
      <Divider />
      <Header textAlign="center" as="h2">Provisions</Header>
      {provisions?.map((item) => (
        <InfoCard key={item.title} obj={item} orient={provisions.indexOf(item)} />
      ))}
      <Header textAlign="center" as="h2">Experiences</Header>
      {experiences?.map((item) => (
        <InfoCard key={item.title} obj={item} orient={experiences.indexOf(item)} />
      ))}
    </Container>
  );
}

export default basswood;
