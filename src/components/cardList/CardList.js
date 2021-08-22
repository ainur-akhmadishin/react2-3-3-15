import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../card';

const CardList = ({ price }) => {
  CardList.defaultProps = {
    price: '',
  };

  return (
    <div>
      <Card price={price} />
      <Card price={price} />
      <Card price={price} />
      <Card price={price} />
    </div>
  );
};

CardList.propTypes = {
  price: PropTypes.string,
};

export default connect(null, null)(CardList);
