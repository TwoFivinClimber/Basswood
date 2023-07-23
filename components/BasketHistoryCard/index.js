import React, { useState } from 'react';
import { Card, Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BasketViewModal from './BasketViewModal';
import { getBasketById } from '../../utils/data/mergedData';

function BasketHistoryCard({ obj }) {
  const [basketDetail, setBasketDetail] = useState({});
  const [open, setOpen] = useState(false);

  const getBasketDetail = () => {
    getBasketById(obj.id).then((response) => {
      setBasketDetail(response);
      setOpen(!open);
    });
  };

  return (
    <>
      <Card fluid>
        <Header
          as="h3"
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '.4em',
          }}
        >
          Week {obj.week}
          <Button type="button" color="orange" floated="right" onClick={() => getBasketDetail()} content="View" />
        </Header>
        <Card.Content>
          <Header content={obj.title} />
          <Card.Description content={obj.description} />
        </Card.Content>
      </Card>
      <BasketViewModal obj={basketDetail} open={open} setOpen={setOpen} />
    </>
  );
}

BasketHistoryCard.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    week: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default BasketHistoryCard;
