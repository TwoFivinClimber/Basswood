import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import InfoCard from '../components/InfoCard';
import provisions from '../utils/data/provisions';
import basswoodCopy from '../utils/data/copy/basswood';

function basswood() {
  return (
    <Container style={{ padding: '4em' }}>
      <Header style={{ fontSize: '3em' }} as="h1">Basswood Farm</Header>
      <p style={{ fontSize: '1.5em' }}>
        {basswoodCopy.overview}
      </p>
      <Divider />
      <Header textAlign="center" as="h1">Provisions</Header>
      <InfoCard obj={provisions[0]} orient={1} />
      <Header textAlign="center" as="h1">Agro Tourism</Header>
      <InfoCard obj={provisions[1]} orient={0} />
      <Header textAlign="center" as="h1">Coming Soon</Header>
      <InfoCard obj={provisions[2]} orient={1} />
    </Container>
  );
}

export default basswood;
