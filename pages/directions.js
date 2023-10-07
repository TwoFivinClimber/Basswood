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
      <div className="directionButtonsDiv">
        <p style={{ fontSize: '18px', minWidth: '50%' }}>
          Basswood Farm <br />
          615 Beech Creek Road <br />
          Brentwood, Tennessee 37027
        </p>
        <div>
          <Button href={directions.googleLink} target="_blank" size="large" color="blue">
            <Icon name="google" />
            Google Maps
          </Button>
          <Button href={directions.appleLink} target="_blank" size="large" color="green">
            <Icon name="apple" />
            Apple Maps
          </Button>
        </div>
      </div>
      <br />
      <Header as="h2" content="From the South" />
      <p style={{ fontSize: '18px' }}>
        {directions.fromSouth}
      </p>
      <br />
      <Header as="h2" content="From the North" />
      <p style={{ fontSize: '18px' }}>
        {directions.fromNorth}
      </p>
      <br />
    </Container>
  );
}

export default Directions;
