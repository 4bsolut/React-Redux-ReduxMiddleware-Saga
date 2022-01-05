import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

const mapStateToProps = (state) => {
  return { articles: state.remoteArticles.slice(0, 10) };
}; //conectado con propiedades

const ConnectedList = (props) => {
  const { articles } = props;
  useEffect(
    () => {
      console.log('pppppsss');
      props.getData();
    },
    [] /*run once*/
  );
  return (
    <>
      <p>Remote List</p>
      <ul>
        {articles.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  );
}; //conectado con acciones

const RemoteList = connect(mapStateToProps, { getData })(ConnectedList);

export default RemoteList;
