import Link from 'next/link';
import {
  Segment, Header, Container, Grid, Button, Image, Divider,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';

import home from '../utils/data/copy/home';

export default function Home() {
  const router = useRouter();
  return (
    <Container fluid>
      <Header className="welcome-header" as="h1" textAlign="center" content="Welcome to Basswood Farm" />
      <Container
        style={{
          marginTop: '3rem',
          width: '85%',
        }}
      >
        <Divider />
        <Grid columns={2}>
          <Grid.Column style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Header
              content="Basswood Farm"
              as="h1"
              style={{
                zIndex: '1',
                position: 'absolute',
                color: '#ede7de',
                fontSize: '3.5em',
              }}
            />
            <Link href="/basswood" passHref>
              <Image
                src="https://res.cloudinary.com/dvdsbc2xf/image/upload/v1693624719/basswood/general%20website%20images/stable_cjzd4d.jpg"
              />
            </Link>
          </Grid.Column>
          <Grid.Column style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Header
              content="Woodhouse Homestead"
              as="h1"
              style={{
                zIndex: '1',
                position: 'absolute',
                color: '#ede7de',
                fontSize: '3.5em',
              }}
            />
            <Link href="/woodhouse" passHref>
              <Image
                src="https://res.cloudinary.com/dvdsbc2xf/image/upload/v1693624720/basswood/general%20website%20images/woodhouse_hpxcrr.jpg"
              />
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
      <Segment
        style={{
          width: '85%', background: 'transparent', padding: '6em 0em', marginRight: 'auto', marginLeft: 'auto',
        }}
        vertical
      >
        <Grid columns={2}>
          <Grid.Column textAlign="center" width={6}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              We are Growing
            </Header>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={10}>
            <p style={{ fontSize: '1.5em' }}>{home.csaFeature}</p>
            <Button color="red" onClick={() => router.push('/csa')} content="Learm More" />
          </Grid.Column>
        </Grid>
      </Segment>
      <Header as="h1" style={{ textAlign: 'center' }} content="Follow us on Instagram" />
      <div className="elfsight-app-75027bd3-9acf-43e4-9c95-d77b42332919" />
    </Container>
  );
}
