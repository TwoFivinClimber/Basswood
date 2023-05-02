import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import InfoCard from '../components/InfoCard';
import offerings from '../utils/data/offerings';

function Woodhouse() {
  return (
    <Container style={{ padding: '4em' }}>
      <Header as="h1">Wood House Homestead</Header>
      <p style={{ fontSize: '18px' }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium.
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
