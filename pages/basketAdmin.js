import React, { useEffect, useState } from 'react';
import {
  Button, Card, Container, Form, Header, Segment,
} from 'semantic-ui-react';
import AsyncSelect from 'react-select';
import { useRouter } from 'next/router';
import { getVeggies } from '../utils/data/veg';
import { getCurrentBasket } from '../utils/data/mergedData';
import BasketVegCard from '../components/BasketVegCard';
import { createBasketVeg } from '../utils/data/basketVeg';
import { updateBasket } from '../utils/data/basket';

const prevState = {
  description: '',
  title: '',
};

function Admin() {
  const router = useRouter();
  const [currentBasket, setCurrentBasket] = useState({});
  const [veggies, setVeggies] = useState([]);
  const filteredVeggies = veggies.filter((veggie) => !currentBasket.veg?.some((s) => s.id === veggie.id));
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(prevState);

  const getTheContent = () => {
    getVeggies().then(setVeggies);
    getCurrentBasket().then(setCurrentBasket);
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
  };

  useEffect(() => {
    getTheContent();
  }, []);

  return (
    <Container fluid>
      <Segment className="admin_section">
        <Header as="h1">
          Manage CSA Baskets
          <Button positive icon="add" floated="right" content="Create New Basket" onClick={() => router.push('/basket/new')} />
        </Header>
        <Segment>
          <Header as="h2">
            Active Basket
            <Button floated="right" icon={edit ? 'close' : 'write'} color="orange" onClick={() => editInit()} content={edit ? 'Close' : 'Edit'} />
          </Header>
          <br />
          <Segment>
            <Form onSubmit={handleSubmit}>
              {edit ? (
                <Form.Input label="Basket Title" name="title" onChange={handleChange} value={input.title} />
              ) : (
                <>
                  <Header style={{ display: 'inline-block', marginRight: '1rem' }}>{currentBasket.title}</Header>
                  <span>{`Week ${currentBasket.week}`}</span>
                </>
              )}
              {edit ? (
                <Form.TextArea label="Basket Description" name="description" onChange={handleChange} value={input.description} />
              ) : (
                <p>{currentBasket.description}</p>
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
      </Segment>
    </Container>
  );
}

export default Admin;
