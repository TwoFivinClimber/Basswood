import React from 'react';
import {
  Button,
  Container, Divider, Header,
} from 'semantic-ui-react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import { goatFacts, goatCopy } from '../utils/data/copy/goats';
import goatImages from '../public/images/goats/imageData';

function goats({ randomFact }) {
  return (
    <Container>
      <br />
      <Header as="h1" textAlign="center" style={{ fontSize: '4em' }} content="Meet The Goats" />
      <p style={{ textAlign: 'center', fontSize: '1.5em' }}>You&apos;ve GOAT to be kidding me! </p>
      <Divider />
      <ImageGallery
        autoPlay
        items={goatImages}
        slideDuration={700}
        slideInterval={5000}
        showFullscreenButton={false}
      />
      <br />
      <Header as="h1" content="Did you know....." />
      <p style={{ fontSize: '1.5em' }}>
        {randomFact}
      </p>
      <br />
      <Header as="h1" content="The Goats at Basswood Farm" />
      <p style={{ fontSize: '1.5em' }}>
        {goatCopy.ourGoats}
      </p>
      <br />
      <Header as="h1" content="Goat Chese Anyone ?" />
      <p style={{ fontSize: '1.5em' }}>
        {goatCopy.products}
        <Link passHref href="/contact">
          <Button color="orange" content="Here" size="large" style={{ marginLeft: '1em' }} />
        </Link>
      </p>
      <br />
    </Container>
  );
}

export async function getServerSideProps() {
  const random = Math.floor(Math.random() * 9);
  const randomFact = goatFacts[random];

  return {
    props: {
      randomFact,
    },
  };
}

export default goats;
