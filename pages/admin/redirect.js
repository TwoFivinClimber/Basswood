import { useRouter } from 'next/router';
import React from 'react';
import {
  Button, Container, Header, Image,
} from 'semantic-ui-react';

function Redirect() {
  const router = useRouter();
  return (
    <Container textAlign="center">
      <br />
      <Header as="h1" content="Sorry, but you don't have permission to be here" />
      <Header as="h2" content="Please Navigate Back to the Website" />
      <Image src="/images/goats/goats.jpg" size="huge" centered />
      <br />
      <Button color="orange" content="Back to Home" onClick={() => router.push('/')} />
    </Container>
  );
}

export default Redirect;
