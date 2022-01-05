import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

const mapStateToProps = (state) => {
  return { articles: state.articles };
}; //conectado con propiedades

const ConnectedList = (props) => {
  const { articles } = props;
  return (
    <>
      <p>Local List</p>
      <ul>
        {articles.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  );
}; //conectado con acciones

const List = connect(mapStateToProps)(ConnectedList);

export default List;
