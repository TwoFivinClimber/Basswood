import React, { useEffect, useState } from 'react';
import {
  Button, Card, Container, Form, Grid, Header, Image, Segment,
} from 'semantic-ui-react';
import AsyncSelect from 'react-select';
import { useRouter } from 'next/router';
import BasketVegCard from '../../../components/BasketVegCard';
import { getVeggies } from '../../../utils/data/veg';
import { createNewWeekBasket } from '../../../utils/data/mergedData';
import { useAuth } from '../../../utils/authContext';
import checkAdmin from '../../../utils/data/admin';
import { signOut } from '../../../utils/auth';
import BackButton from '../../../components/BackButton';

function NewBasket() {
  const user = useAuth();
  const router = useRouter();
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  const [veggies, setVeggies] = useState([]);
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState({});
  const [photo, setPhoto] = useState(null);
  const filteredVeggies = veggies.filter((veggie) => !selected.some((s) => s.id === veggie.id));

  const clearFunc = () => {
    setSelected([]);
    setInput({});
    router.push('/admin/basketAdmin');
  };

  const getTheContent = () => {
    getVeggies().then(setVeggies);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.warn(input);
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSelect = (e) => {
    setSelected((prev) => ([
      ...prev,
      e,
    ]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const basket = {
      ...input,
      week: weekNumber,
      active: true,
    };
    const vegIdArr = selected.map((veg) => veg.id);
    createNewWeekBasket(basket, vegIdArr, photo).then(() => router.push('/admin/basketAdmin'));
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
      <Segment className="admin_section">
        <Header as="h1">
          Create New Basket
          <BackButton />
        </Header>
        <Form onSubmit={handleSubmit}>
          <Header>{`Week ${weekNumber}`}</Header>
          <Form.Input required label="Basket Title" name="title" onChange={handleChange} value={input.title} />
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Input type="file" required label="Basket Photo" name="photo" onChange={handlePhoto} value={input.photo} />
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="middle">
                {photo ? <Image verticalAlign="middle" centered size="small" src={URL.createObjectURL(photo)} /> : <Header as="h4" content="Image will display here" />}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br />
          <Form.TextArea required label="Basket Description" name="description" onChange={handleChange} value={input.description} />
          <Form.Field>
            <label htmlFor="veggieSelect">Select Crop</label>
            <AsyncSelect
              id="veggiesSelect"
              backspaceRemovesValue
              options={filteredVeggies}
              getOptionValue={(i) => i.id}
              getOptionLabel={(i) => i.name}
              onChange={handleSelect}
              defaultOptions
              value=""
            />
          </Form.Field>
          <br />
          {input.photo ? (
            <>
              <Header textAlign="center" content="The Basket" />
              <Image size="medium" centered src={input.photo} alt="Photo link is not working, try another image" />
            </>
          ) : ('')}
          <br />
          <Card.Group centered>
            { selected.length ? selected.map((veg) => (
              <BasketVegCard key={veg.id} obj={veg} setSelected={setSelected} />
            )) : <Header content="Select Veggies To Create Basket" />}
          </Card.Group>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button disabled={!selected.length || !photo} size="large" type="submit" positive content="Publish" />
            <Button size="large" type="button" onClick={() => clearFunc()} negative content="Cancel" />
          </div>
        </Form>
      </Segment>
    </Container>
  );
}

export default NewBasket;
