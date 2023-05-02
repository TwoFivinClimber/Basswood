import React from 'react';
import { Card, Divider, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function InfoCard({ obj, orient }) {
  return (
    <Card raised style={{ marginBottom: '4em', flexDirection: orient % 2 === 0 ? 'row-reverse' : 'row' }} fluid className="infoCard">
      <Image size="medium" src={obj.image} />
      <Card.Content>
        <Card.Header>{obj.title}</Card.Header>
        <Card.Description style={{ color: 'black', fontSize: '16px' }}>
          {obj.description}
        </Card.Description>
        <Divider />

        <Card.Description>
          <Link style={{ fontWeight: 'bold' }} href={obj?.link} passHref>
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
