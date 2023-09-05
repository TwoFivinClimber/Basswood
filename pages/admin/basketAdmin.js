import React, { useEffect, useState } from 'react';
import {
  Button, Card, Container, Form, Grid, Header, Image, Segment,
} from 'semantic-ui-react';
import AsyncSelect from 'react-select';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/authContext';
import { getVeggies } from '../../utils/data/veg';
import { getCurrentBasket } from '../../utils/data/mergedData';
import BasketVegCard from '../../components/BasketVegCard';
import { createBasketVeg } from '../../utils/data/basketVeg';
import { getBasketHistory, updateBasket } from '../../utils/data/basket';
import BasketHistoryCard from '../../components/BasketHistoryCard';
import { signOut } from '../../utils/auth';
import checkAdmin from '../../utils/data/admin';
import BackButton from '../../components/BackButton';

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
  const filteredVeggies = veggies.filter((veggie) => !currentBasket.veg?.some((s) => s.id === veggie.id));
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(initialState);

  const getTheContent = () => {
    getVeggies().then(setVeggies);
    getCurrentBasket().then(setCurrentBasket);
    getBasketHistory().then(setBasketHistory);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const writeBasketVeg = (e) => {
    const obj = {
      basket: currentBasket.id,
      veg: e.id,
    };
    createBasketVeg(obj).then(() => getTheContent());
  };

  const editInit = () => {
    setInput({
      description: currentBasket.description,
      title: currentBasket.title,
      photo: currentBasket.photo,
    });
    setEdit(!edit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: currentBasket.id,
      ...input,
    };
    updateBasket(obj).then(() => getTheContent());
    setEdit(!edit);
    setInput(initialState);
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
          <Form onSubmit={handleSubmit}>
            {edit ? (
              <>
                <Form.Input label="Basket Title" name="title" onChange={handleChange} value={input.title} />
                <Form.Input label="Basket Photo" name="photo" onChange={handleChange} value={input.photo} />
                <Form.TextArea label="Basket Description" name="description" onChange={handleChange} value={input.description} />
              </>
            ) : (
              <Grid columns={2}>
                <Grid.Column>
                  <Header style={{ fontSize: '1.75em', display: 'inline-block', marginRight: '1rem' }} content={currentBasket.title} />
                  <span>{`Week ${currentBasket.week}`}</span>
                  <Header as="h4" content={currentBasket.description} />
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Header content="Basket Photo" />
                  <Image centered size="medium" src={currentBasket.photo} />
                </Grid.Column>
              </Grid>
            )}
            <Form.Field hidden={!edit}>
              <label htmlFor="veggieSelect">Select Veggies</label>
              <AsyncSelect
                id="veggiesSelect"
                options={filteredVeggies}
                getOptionValue={(i) => i.id}
                getOptionLabel={(i) => i.name}
                onChange={writeBasketVeg}
                value=""
              />
            </Form.Field>
            <br />
            {edit ? (
              <Container>
                <Header textAlign="center" content="Basket Photo" />
                <Image size="medium" centered src={input.photo} alt="Photo link is not working, try another image" />
              </Container>
            ) : ('')}
            <br />
            <Header textAlign="center" content="Veggies" />
            <Card.Group centered>
              {currentBasket.veg?.map((veg) => (
                <BasketVegCard key={veg.id} bsktId={currentBasket.id} obj={veg} onUpdate={getTheContent} />
              ))}
            </Card.Group>
            <br />
            {edit ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button disabled={!input.description} size="large" type="submit" positive content="Publish" />
                <Button size="large" type="button" onClick={() => setEdit(!edit)} negative content="Cancel" />
              </div>
            ) : '' }
          </Form>
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
