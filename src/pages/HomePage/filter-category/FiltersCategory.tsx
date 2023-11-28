import React from 'react';
import { CategoriesName } from '../../../store/categories/categories.type';
import CategoryTab from './category-tab/CategoryTab';
import styles from './FiltersCategory.module.scss';

const FiltersCategory = () => {
  return (
    <div className={styles.filter_category}>
      <CategoryTab text={'All'} categoryName={CategoriesName.All} />
      <CategoryTab
        text={'Electronics'}
        categoryName={CategoriesName.Electronics}
      />
      <CategoryTab text={'Jewelry'} categoryName={CategoriesName.Jewelry} />
      <CategoryTab
        text={`Men'sClothing`}
        categoryName={CategoriesName.MensClothing}
      />
      <CategoryTab
        text={`Women'sClothing`}
        categoryName={CategoriesName.WomensClothing}
      />
    </div>
  );
};

export default FiltersCategory;
