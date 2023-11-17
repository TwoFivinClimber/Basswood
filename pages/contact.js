import React, { useState } from 'react';
import {
  Grid, Image, Header, Form, Container, Button, Divider, Segment,
} from 'semantic-ui-react';
import sendContactEmail from '../utils/data/brevo';
import { clientCredentials } from '../utils/client';

const { adminEmail } = clientCredentials;

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [input, setInput] = useState(initialState);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      sender: {
        name: input.name,
        email: input.email,
      },
      to: [
        {
          email: adminEmail,
          name: 'Doug Cook',
        },
      ],
      subject: input.subject,
      htmlContent: `<html><head></head><body><p>${input.message.replace(/\n/g, '<br>')}</p></body></html>`,
    };
    sendContactEmail(payload).then((resp) => {
      if (resp.ok) {
        setEmailSent(true);
      }
    });
  };

  return (
    <Container style={{ marginTop: '2em', marginBottom: '2em' }}>
      <Container>
        <Grid textAlign="center" verticalAlig="middle" columns="2">
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header as="h1" style={{ fontSize: '4em' }} content="Get In Touch" />
            <Divider />
            <Header as="h2" content="We'd Love To Hear From You" />
          </Grid.Column>
          <Grid.Column style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image size="medium" rounded src="https://res.cloudinary.com/dvdsbc2xf/image/upload/v1693624715/basswood/general%20website%20images/garlic_xmepot.jpg" />
          </Grid.Column>
        </Grid>
      </Container>
      <br />
      <br />
      <Container style={{ width: '90%' }}>
        <Form hidden={emailSent} onSubmit={handleSubmit}>
          <Header as="h3" content="Send us a Message" />
          <Form.Group widths="equal">
            <Form.Input name="name" value={input.name} onChange={handleChange} fluid label="Name" placeholder="Name" required />
            <Form.Input name="email" value={input.email} onChange={handleChange} fluid type="Email" label="Email" placeholder="Email" required />
          </Form.Group>
          <Form.Input name="subject" value={input.subject} onChange={handleChange} fluid label="Subject" placeholder="Subject" required />
          <Form.TextArea name="message" value={input.message} onChange={handleChange} fluid label="Message" placeHolder="Message" required />
          <Button style={{ backgroundColor: 'forestgreen' }} size="large" content="Send" />
        </Form>
        <Segment textAlign="center" hidden={!emailSent} style={{ marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'transparent' }}>
          <Header as="h1" content="Thank You" />
          <Header as="h3" content="Your Message has Been Sent!" />
          <Header as="h3" content="We will get back to you shortly" />
        </Segment>
      </Container>
    </Container>
  );
}

export default Contact;
