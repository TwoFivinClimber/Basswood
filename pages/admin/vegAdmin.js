import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Card, Divider, Header, Icon, Segment } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { getVeggies } from '../../utils/data/veg';
import AdminVegCard from '../../components/AdminVegCard';
import VegForm from '../../components/AdminVegCard/VegForm';
import { useAuth } from '../../utils/authContext';
import authCheck from '../../utils/authCheck';
import { signOut } from '../../utils/auth';

function VegAdmin() {
  const user = useAuth();
  const router = useRouter();
  const [veggies, setVeggies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const logOut = () => {
    signOut().then((resp) => {
      if (resp) {
        router.push('/admin');
      }
    });
  };

  const getTheContent = () => {
    getVeggies().then(setVeggies);
  };

  useEffect(() => {
    getTheContent();

    if (user.uid) {
      authCheck(user.uid, '').then((resp) => {
        if (!resp) {
          logOut();
        }
      });
    } else {
      logOut();
    }
  }, [user]);

  return (
    <Segment>
      <Header as="h1">
        Manage Veggies
        <Button onClick={() => setShowForm(!showForm)} positive floated="right">
          <Icon name="add" />
          Add Veg
        </Button>
      </Header>
      <Segment style={{ minHeight: '100vh' }}>
        <Header content="The Garden" />
        <Divider />
        <VegForm onUpdate={getTheContent} obj={{}} showForm={showForm} setShowForm={setShowForm} />
        <Card.Group centered>
          {veggies.map((i) => (
            <AdminVegCard key={i.id} obj={i} onUpdate={getTheContent} />
          ))}
        </Card.Group>
      </Segment>
    </Segment>
  );
}

export default VegAdmin;