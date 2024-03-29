import React from 'react';
import {
  Button, Container, Header, Icon, Image,
} from 'semantic-ui-react';
import directions from '../utils/data/copy/directions';

function Directions() {
  return (
    <Container>
      <br />
      <Header as="h1" style={{ fontSize: '4em' }} textAlign="center" content="Directions to Basswood" />
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        {directions.header}
      </p>
      <br />
      <Image size="huge" centered src="https://res.cloudinary.com/dvdsbc2xf/image/upload/v1696648253/basswood/general%20website%20images/xmt5kh1y0wdqwfket30o.jpg" />
      <br />
      <Header as="h2" content="Navigation" />
      <div className="navigationDiv">
        <p style={{ fontSize: '1.5rem', minWidth: '45%' }}>
          Basswood Farm <br />
          615 Beech Creek Road <br />
          Brentwood, Tennessee 37027
        </p>
        <div className="directionButtons">
          <Button size="large" href={directions.googleLink} target="_blank" color="google plus">
            <Icon name="google" />
            Google Maps
          </Button>
          <Button size="large" href={directions.appleLink} target="_blank" color="instagram">
            <Icon name="apple" />
            Apple Maps
          </Button>
          <Button size="large" href={directions.wazeLink} target="_blank" style={{ backgroundColor: 'purple', color: 'white' }}>
            Waze
          </Button>
        </div>
      </div>
      <br />
      <Header as="h2" content="From the South" />
      <p style={{ fontSize: '1.5rem' }}>
        {directions.fromSouth}
      </p>
      <br />
      <Header as="h2" content="From the North" />
      <p style={{ fontSize: '1.5rem' }}>
        {directions.fromNorth}
      </p>
      <br />
    </Container>
  );
}

export default Directions;
