import Head from "next/head";
import Link from "next/link";
import { Segment, Header, Image, Container, Grid, Button } from "semantic-ui-react";



export default function Home() {
  return (
    <>
      <Container
      fluid
      style={{
        marginTop: "3rem",
        backgroundImage: "url('/images/stable.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '800px',
        width: '85%',
      }}
      >
      <Header
      className="welcome-header"
      as="h1"
      size="huge"
      textAlign="center"
      content="Welcome to Basswood Farm"
      />
      </Container>
      <Container
      style={{
        marginTop: "3rem",
        width: '85%',
      }}
      >
        <Container>
          <Header textAlign="center" size="huge" as="h1">Discover
        </Header>
        </Container>
      <Grid columns={2}>
        <Grid.Column>
          <Link href='/' passHref>
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
              color: '#ede7de'
            }}
            />
          </Container>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link href="/" passHref>
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
              color: '#ede7de'
            }}
            />
          </Container>
          </Link>
        </Grid.Column>
      </Grid>
      </Container>
    </>
  )
}
