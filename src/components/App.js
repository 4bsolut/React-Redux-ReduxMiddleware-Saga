import React from 'react';
import List from './List';
import AddArticle from '../containers/AddArticle';
import RemoteList from './RemoteList';
const App = () => (
  <div>
    <h2>Articles</h2>
    <AddArticle />
    <List />
    <RemoteList />
  </div>
);

export default App;
