import React, { useEffect, useState } from 'react';
import {
  Button, Card, Container, Header, Segment,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/authContext';
import { getVeggies } from '../../utils/data/veg';
import { getCurrentBasket } from '../../utils/data/mergedData';
import { getBasketHistory } from '../../utils/data/basket';
import BasketHistoryCard from '../../components/BasketHistoryCard';
import { signOut } from '../../utils/auth';
import checkAdmin from '../../utils/data/admin';
import BackButton from '../../components/BackButton';
import BasketEditForm from '../../components/BasketEditForm';

const initialState = {
  description: '',
  title: '',
  photo: '',
};

function BasketAdmin() {
  const user = useAuth();
  const router = useRouter();
  const [currentBasket, setCurrentBasket] = useState({});
  const [basketHistory, setBasketHistory] = useState([]);
  const sortedHistory = basketHistory.sort((a, b) => b.week - a.week);
  const [veggies, setVeggies] = useState([]);
  const filteredVeggies = veggies?.filter((veggie) => !currentBasket.veg?.some((s) => s.id === veggie.id));
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(initialState);

  const getTheContent = () => {
    getVeggies().then(setVeggies);
    getCurrentBasket().then(setCurrentBasket);
    getBasketHistory().then(setBasketHistory);
  };

  const editInit = () => {
    setInput({
      description: currentBasket.description,
      title: currentBasket.title,
      photo: currentBasket.photo,
    });
    setEdit(!edit);
  };

  useEffect(() => {
    getTheContent();
    const logOut = () => {
      signOut().then((resp) => {
        if (resp) {
          router.push('/admin');
        }
      });
    };
    if (user.uid) {
      checkAdmin().then((resp) => {
        if (!resp.data) {
          router.push('/');
          logOut();
        }
      });
    } else {
      logOut();
      router.push('/');
    }
  }, [user, router]);

  return (
    <Container fluid>
      <Header
        className="basketAdminHeader"
        style={{
          fontSize: '3em', margin: '.5em', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}
      >
        Basket Admin
        <div>
          <BackButton />
          <br />
          <Button className="respButton" positive icon="add" floated="right" content="New Basket" onClick={() => router.push('/admin/basket/new')} />
        </div>
      </Header>
      <Segment>
        <Header style={{ fontSize: '1.75em' }}>
          Active Basket
          <Button floated="right" icon={edit ? 'close' : 'write'} color="orange" onClick={() => editInit()} content={edit ? 'Close' : 'Edit'} />
        </Header>
        <br />
        <Segment>
          <BasketEditForm onUpdate={getTheContent} edit={edit} setEdit={setEdit} currentBasket={currentBasket} filteredVeggies={filteredVeggies} input={input} setInput={setInput} />
        </Segment>
      </Segment>
      <Segment>
        <Header as="h3" content="Basket History" />
        <br />
        <Card.Group centered>
          {sortedHistory?.map((bskt) => (
            <BasketHistoryCard key={bskt.id} obj={bskt} onUpdate={getTheContent} />
          ))}
        </Card.Group>
      </Segment>
    </Container>
  );
}

export default BasketAdmin;
