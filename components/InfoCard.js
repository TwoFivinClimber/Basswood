import React from 'react';
import { Card, Divider, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function InfoCard({ obj, orient }) {
  return (
    <Card
      raised
      className="infoCard"
      style={{
        marginBottom: '2em',
        flexDirection: orient % 2 === 0 ? 'row-reverse' : 'row',
      }}
      fluid
    >
      <Image size="medium" src={obj.image} />
      <Card.Content>
        <Card.Header>{obj.title}</Card.Header>
        <Card.Description style={{
          color: 'inherit',
          height: '50%',
          fontSize: '1.25em',
          display: 'flex',
          alignItems: 'center',
        }}
        >
          {obj.description}
        </Card.Description>
        <Divider />
        <Card.Description>
          <Link passHref style={{ fontWeight: 'bold' }} href={obj?.link}>
            Learn More
          </Link>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default InfoCard;

InfoCard.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  orient: PropTypes.number.isRequired,
};
