/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';
import {
  Button, Container, Header, Image,
} from 'semantic-ui-react';

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
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
      </p>
      <Header as="h1" textAlign="center" content="History of Our CSA" />
      <br />
      <p style={{ fontSize: '1.2em' }}>
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
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
