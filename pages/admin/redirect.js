import { useRouter } from 'next/router';
import React from 'react';
import {
  Button, Container, Header, Image,
} from 'semantic-ui-react';

function Redirect() {
  const router = useRouter();
  return (
    <Container>
      <Header as="h1" content="Sorry" />
      <Header as="h1" content="But You DOn't Have Permission to Be Here" />
      <Image src="/images/goats/goats.jpg" size="huge" centered />
      <Button content="Back to Home" onClick={() => router.push('/')} />
    </Container>
  );
}

export default Redirect;
