import React from 'react';
import classes from './App.module.scss';
import logo from './logo.svg';
import Filters from '../filters';
import CardList from '../cardList';
import Tabs from '../tabs';

const App = () => {
  const obj = {
    price: '13 400 P',
  };

  return (
    <section className={classes.App}>
      <img src={logo} alt="Логотип" className={classes['App-logo']} />

      <div className={classes['App--content']}>
        <div>
          <Filters />
        </div>

        <div>
          <Tabs />
          <CardList price={obj.price} />
          <button type="button" className={classes['App--button']}>
            Показать еще 5 билетов
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
