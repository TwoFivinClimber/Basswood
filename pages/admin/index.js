import React, { useEffect } from 'react';
import {
  Button, Container, Header, Image,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '../../utils/authContext';
import { signIn, signOut } from '../../utils/auth';
import checkAdmin from '../../utils/data/admin';

function Admin() {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user.uid) {
      checkAdmin().then((resp) => {
        if (resp.data) {
          router.push('/admin/portal');
        } else {
          signOut();
          router.push('/');
        }
      });
    }
  }, [user, router]);

  return (
    <AuthProvider>
      <Container textAlign="center">
        <br />
        <Header as="h1" style={{ fontSize: '3em' }} content="Are You Supposed To Be Here?" />
        <Image src="/images/goats/goats.jpg" size="huge" centered />
        <Header as="h2" content="Sign In To Find Out" />
        <Button positive size="big" content="Sign In" onClick={() => signIn()} />
      </Container>
    </AuthProvider>
  );
}

export default Admin;
