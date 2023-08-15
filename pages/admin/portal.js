import React, { useEffect, useCallback } from 'react';
import {
  Button, Card, Container, Divider, Header,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { signOut } from '../../utils/auth';
import { useAuth } from '../../utils/authContext';
import checkAdmin from '../../utils/data/admin';

function Portal() {
  const router = useRouter();
  const user = useAuth();

  const logOut = useCallback(() => {
    signOut().then((resp) => {
      if (resp) {
        router.push('/admin');
      }
    });
  }, [router]);

  useEffect(() => {
    if (user.uid) {
      checkAdmin().then((resp) => {
        if (!resp.data) {
          logOut();
        }
      });
    } else {
      logOut();
    }
  }, [user, router, logOut]);

  return (
    <Container style={{ padding: '4em' }}>
      <Header textAlign="center" as="h1" style={{ fontSize: '3em' }}>
        Welcome {user.displayName}
        <Button negative style={{ marginTop: '.9em' }} floated="right" content="Sign Out" onClick={() => logOut()} />
      </Header>
      <br />
      <Divider />
      <br />
      <Card.Group style={{ height: '100%' }}>
        <Card fluid>
          <Card.Content>
            <Button floated="right" color="purple" content="To Basket Admin" onClick={() => router.push('/admin/basketAdmin')} />
            <Card.Header as="h1">Basket Admin</Card.Header>
          </Card.Content>
          <Card.Content>
            Modify your current basket or create next weeks basket
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Button floated="right" color="purple" content="To Veg Admin" onClick={() => router.push('/admin/vegAdmin')} />
            <Card.Header as="h1">Veg Admin</Card.Header>
          </Card.Content>
          <Card.Content>
            Add crops to your database
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Button floated="right" color="purple" content="To Product Admin" />
            <Card.Header as="h1">Product Admin</Card.Header>
          </Card.Content>
          <Card.Content>
            Add products for sale and adjust quantaties
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Portal;
