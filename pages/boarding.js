import React from 'react';
import {
  Button,
  Container, Divider, Header,
} from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import { useRouter } from 'next/router';
import boardingCopy from '../utils/data/copy/boarding';
import boardingImages from '../public/images/boarding/imageData';

function Boarding() {
  const router = useRouter();
  return (
    <Container>
      <br />
      <Header textAlign="center" as="h1" style={{ fontSize: '4em' }}>Boarding at Basswood Farm</Header>
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        {boardingCopy.mission}
      </p>
      <Divider />
      <ImageGallery
        autoPlay
        items={boardingImages}
        slideDuration={700}
        slideInterval={5000}
        showFullscreenButton={false}
      />
      <br />
      <Header as="h1" textAlign="center" content="Why Board With Us ?" />
      <br />
      <p style={{ fontSize: '1.5em' }}>{boardingCopy.whyBoard}</p>
      <br />
      <Header as="h1" textAlign="center" content="What We Offer" />
      <br />
      <p style={{ fontSize: '1.5em' }}>{boardingCopy.offer}</p>
      <Header as="h1" textAlign="center" content="Interested In Boarding ?" />
      <Header as="h3" textAlign="center">
        Get In Touch
        <Button style={{ marginLeft: '1em' }} onClick={(() => router.push('/contact'))} color="orange" content="Here" />
      </Header>
      <br />
    </Container>
  );
}

export default Boarding;
