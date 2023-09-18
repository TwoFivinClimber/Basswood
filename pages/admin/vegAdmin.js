import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Card, Divider, Header, Icon, Segment } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { getVeggies } from '../../utils/data/veg';
import AdminVegCard from '../../components/AdminVegCard';
import VegForm from '../../components/AdminVegCard/VegForm';
import { useAuth } from '../../utils/authContext';
import checkAdmin from '../../utils/data/admin';
import { signOut } from '../../utils/auth';
import BackButton from '../../components/BackButton';

function VegAdmin() {
  const user = useAuth();
  const router = useRouter();
  const [veggies, setVeggies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getTheContent = () => {
    getVeggies().then(setVeggies);
  };

  useEffect(() => {
    getTheContent();

    const logOut = () => {
      signOut().then((resp) => {
        // Safeguard against router firing before logout
        if (resp) {
          router.push('/admin');
        }
      });
    };

    if (user.uid) {
      checkAdmin(user.uid, '').then((resp) => {
        if (!resp) {
          logOut();
        }
      });
    } else {
      logOut();
    }
  }, [user, router]);

  return (
    <Segment basic>
      <Header as="h1">
        Manage Veggies
        <BackButton />
      </Header>
      <Segment style={{ minHeight: '100vh' }}>
        <Header as="h2">
          The Garden
          <Button onClick={() => setShowForm(!showForm)} positive floated="right">
            <Icon name="add" />
            Add Veg
          </Button>
        </Header>
        <Divider />
        <VegForm onUpdate={getTheContent} obj={{}} showForm={showForm} setShowForm={setShowForm} />
        <Card.Group centered>
          {veggies.length ? veggies?.map((i) => (
            <AdminVegCard key={i.id} obj={i} onUpdate={getTheContent} />
          )) : <><br /> <Header content="Add Veggies To Your Garden" /> </>}
        </Card.Group>
      </Segment>
    </Segment>
  );
}

export default VegAdmin;
