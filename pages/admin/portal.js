import React, { useEffect, useCallback } from 'react';
import {
  Button, Card, Container, Divider, Header,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { signOut } from '../../utils/auth';
import { useAuth } from '../../utils/authContext';
import checkAdmin from '../../utils/data/admin';
import AdminPortalCard from '../../components/adminPortalCard';

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
        <AdminPortalCard title="Basket Admin" content="View, Modify, or Create  Baskets" route="/admin/basketAdmin" label="To Basket Admin" />
        <AdminPortalCard title="Veg Admin" content="Add or Modify Veggies" label="To Veg Admin" route="/admin/vegAdmin" />
        <AdminPortalCard title="Product Admin" content="Add or Modify Products and Avaliability" label="To Product Admin" route="/admin/productAdmin" />
      </Card.Group>
    </Container>
  );
}

export default Portal;
