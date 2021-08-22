import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';
import S7Logo from './S7Logo.svg';

const Card = ({ price }) => {
  Card.defaultProps = {
    price: '',
  };

  return (
    <section className={classes.Card}>
      <div className={classes['Card--header']}>
        <div className={classes['Card--price']}>{price}</div>
        <img src={S7Logo} alt="Логотип S7" className={classes['Card--logo']} />
      </div>
      <div className={classes['Card--block']}>
        <div className={classes.info}>
          <span className={classes['info--title']}>MOW – HKT</span>
          <br />
          <span className={classes['info--text']}>10:45 – 08:00</span>
        </div>
        <div className={classes.info}>
          <span className={classes['info--title']}>В пути</span>
          <br />
          <span className={classes['info--text']}>21ч 15м</span>
        </div>
        <div className={classes.info}>
          <span className={classes['info--title']}>2 пересадки</span>
          <br />
          <span className={classes['info--text']}>HKG, JNB</span>
        </div>
      </div>

      <div className={classes['Card--block']}>
        <div className={classes.info}>
          <span className={classes['info--title']}>MOW – HKT</span>
          <br />
          <span className={classes['info--text']}>11:20 – 00:50</span>
        </div>
        <div className={classes.info}>
          <span className={classes['info--title']}>В пути</span>
          <br />
          <span className={classes['info--text']}>13ч 30м</span>
        </div>
        <div className={classes.info}>
          <span className={classes['info--title']}>1 пересадка</span>
          <br />
          <span className={classes['info--text']}>HKG</span>
        </div>
      </div>
    </section>
  );
};
Card.propTypes = {
  price: PropTypes.string,
};

export default Card;
