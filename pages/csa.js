/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';
import {
  Button, Container, Header, Image,
} from 'semantic-ui-react';
import csaCopy from '../utils/data/copy/csa';

function csa() {
  return (
    <Container>
      <br />
      <Header as="h1" style={{ fontSize: '4em' }} textAlign="center" content="Crop Share Agreement" />
      <br />
      <Image size="huge" centered src="/images/csa.jpg" />
      <br />
      <Header as="h1" textAlign="center" content="What is a CSA" />
      <br />
      <p style={{ fontSize: '1.2em' }}>
        {csaCopy.whatIs}
      </p>
      <Header as="h1" textAlign="center" content="History of Our CSA" />
      <br />
      <p style={{ fontSize: '1.2em' }}>
        {csaCopy.ourCsa}
      </p>
      <br />
      <br />
      <Container textAlign="center">
        <Link passHref href="/publicBasket">
          <Button size="large" type="button" color="orange">
            This Weeks Basket
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default csa;
