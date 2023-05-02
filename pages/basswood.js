import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import InfoCard from '../components/InfoCard';
import provisions from '../utils/data/provisions';
import experiences from '../utils/data/experiences';

function basswood() {
  return (
    <Container style={{ padding: '4em' }}>
      <Header as="h1">Basswood Farm</Header>
      {/* <Image centered style={{ height: '16em', objectFit: 'cover' }} size="huge" src="/images/basswood-head.jpg" /> */}
      <p style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium.
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
