import Link from 'next/link';
import {
  Segment, Header, Container, Grid, Button,
} from 'semantic-ui-react';

export default function Home() {
  return (
    <>
      <Container
        fluid
        style={{
          marginTop: '3rem',
          backgroundImage: "url('/images/stable.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '800px',
          width: '85%',
        }}
      >
        <Header className="welcome-header" as="h1" textAlign="center" content="Welcome to Basswood Farm" />
      </Container>
      <Container
        style={{
          marginTop: '3rem',
          width: '85%',
        }}
      >
        <Header textAlign="center" style={{ fontSize: '3em' }} as="h1">
          Discover
        </Header>

        <Grid columns={2}>
          <Grid.Column>
            <Link href="/basswood" passHref>
              <Container
                className="discover-cards"
                style={{
                  backgroundImage: "url('/images/basswood.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                }}
              >
                <Header
                  content="Basswood Farm"
                  as="h1"
                  textAlign="center"
                  style={{
                    color: '#ede7de',
                    fontSize: '2.5em',
                  }}
                />
              </Container>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link href="/woodhouse" passHref>
              <Container
                className="discover-cards"
                style={{
                  backgroundImage: "url('/images/woodhouse.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                }}
              >
                <Header
                  content="Woodhouse Homestead"
                  as="h1"
                  textAlign="center"
                  style={{
                    color: '#ede7de',
                    fontSize: '2.5em',
                  }}
                />
              </Container>
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
          <Grid.Column verticalAlign="center" width={6}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              We are Growing
            </Header>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={10}>
            <p style={{ fontSize: '1.5em' }}>Our budding CSA project is ramping up. Weekly offerings of classic and interesting veggies, distributed to the community.</p>
            <Button color="red" content="Learm More" />
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
}
