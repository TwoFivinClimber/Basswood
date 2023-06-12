import React, { useEffect, useState } from 'react';
import {
  Button, Card, Container, Form, Header, Segment,
} from 'semantic-ui-react';
import AsyncSelect from 'react-select';
import { getVeggies } from '../utils/data/veg';
import { getCurrentBasket } from '../utils/data/mergedData';
import BasketVegCard from '../components/BasketVegCard';

function Admin() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  const [currentBasket, setCurrentBasket] = useState({});
  const [veggies, setVeggies] = useState([]);
  const [selected, setSelected] = useState([]);
  const filteredVeggies = veggies.filter((veggie) => !selected.some((s) => s.id === veggie.id));
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const getTheContent = () => {
    getVeggies().then(setVeggies);
    getCurrentBasket().then(setCurrentBasket);
  };

  const handleChange = (e) => {
    setSelected((prev) => ([
      ...prev,
      e,
    ]));
  };

  const clearHide = () => {
    setSelected([]);
    setShow(!show);
  };

  useEffect(() => {
    getTheContent();
  }, []);

  return (
    <Container fluid>
      <Segment className="admin_section">
        <Header as="h1" content="Manage CSA Baskets" />
        <Segment>
          <Header as="h3">
            Active Basket
            <Button floated="right" color="orange" onClick={() => setEdit(!edit)} content="Edit" />
          </Header>
          <p>{`Week ${currentBasket.week}`}</p>
          <Form hidden={!edit}>
            <Form.Field>

              <label htmlFor="veggieSelect">Select Crop</label>
              <AsyncSelect
                id="veggiesSelect"
                options={filteredVeggies}
                getOptionValue={(i) => i.id}
                getOptionLabel={(i) => i.name}
                onChange={handleChange}
                cacheOptions
                defaultOptions
              />
            </Form.Field>
          </Form>
          <br />
          <Card.Group centered>
            {currentBasket.veg?.map((veg) => (
              <BasketVegCard key={veg.id} bsktId={currentBasket.id} obj={veg} onUpdate={getTheContent} />
            ))}
          </Card.Group>
        </Segment>
        <Segment>
          <Header>
            Next Basket
            <Button floated="right" style={{ display: show ? 'none' : 'block' }} onClick={() => setShow(!show)} content="Create Next Basket" positive />
          </Header>
          <Form hidden={!show}>
            <p>{`Week ${weekNumber}`}</p>
            <Form.Field>
              <label htmlFor="veggieSelect">Select Crop</label>
              <AsyncSelect
                id="veggiesSelect"
                backspaceRemovesValue
                options={filteredVeggies}
                getOptionValue={(i) => i.id}
                getOptionLabel={(i) => i.name}
                onChange={handleChange}
                defaultOptions
                // placeholder="Select...."
                value=""
              />
            </Form.Field>
            <br />
            <Card.Group centered>
              { selected.length ? selected.map((veg) => (
                <BasketVegCard key={veg.id} obj={veg} />
              )) : <Header content="Select Veggies To Create Basket" />}
            </Card.Group>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button disabled={!selected.length} onClick={() => console.warn('clicked')} size="large" type="submit" positive content="Publish" />
              <Button size="large" onClick={() => clearHide()} negative content="Cancel" />
            </div>
          </Form>
        </Segment>
      </Segment>
    </Container>
  );
}

export default Admin;
