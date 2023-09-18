import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function PortalCard({
  title, content, route, label,
}) {
  const router = useRouter();
  return (
    <Card fluid>
      <Card.Content>
        <Button floated="right" color="purple" content={label} onClick={() => router.push(route)} />
        <Card.Header as="h1" content={title} />
      </Card.Content>
      <Card.Content content={content} />
    </Card>
  );
}

PortalCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PortalCard;
