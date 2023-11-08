import React from 'react';
import {
  Button, Container, Divider, Header,
} from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import Link from 'next/link';
import { FaAirbnb } from 'react-icons/fa6';
import airBnbImages from '../public/images/airbnb/imageData';
import stayCopy from '../utils/data/copy/stay';

function stayWithUs() {
  return (
    <Container>
      <br />
      <Header textAlign="center" style={{ fontSize: '4em' }} content="Stay With Us" />
      <p style={{ textAlign: 'center', fontSize: '1.5em' }}>Bell Historic Franklin Farmouse </p>
      <Divider />
      <ImageGallery
        autoPlay
        items={airBnbImages}
        slideDuration={700}
        slideInterval={5000}
        showFullscreenButton={false}
      />
      <br />
      <Header content="Agritourism or to Get Away" as="h1" />
      <br />
      <p style={{ fontSize: '1.5em' }}>
        {stayCopy.airBnb}
      </p>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link passHref target="blank" href={stayCopy.airBnbUrl}>
          <Button size="large" color="orange" content="Book Now" />
        </Link>
        <p style={{ fontSize: '1.75em', display: 'inline-block', marginBottom: '0' }}>
          with
        </p>
        <FaAirbnb size="3em" fontStyle="bold" color="#ff385c" style={{ verticalAlign: 'middle' }} />
        <p style={{
          color: '#ff385c', fontSize: '1.75em', fontWeight: 'bold', display: 'inline-block',
        }}
        >
          airbnb
        </p>
      </div>
      <br />
    </Container>
  );
}

export default stayWithUs;
