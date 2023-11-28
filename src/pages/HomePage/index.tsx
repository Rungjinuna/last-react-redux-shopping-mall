import React from 'react';
import CardList from './card-list/CardList';
import FiltersCategory from './filter-category/FiltersCategory';

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory />

        <CardList />
      </div>
    </div>
  );
};

export default HomePage;
