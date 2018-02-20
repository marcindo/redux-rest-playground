import React from 'react';

import PostsList from 'components/postsList';
import UsersList from 'components/usersList';
import TodosList from 'components/todosList';
import { Tab, TabsContainer } from 'components/tabs';
import style from './style.css';

export default function Root() {
  return (
    <div className={style.root}>
      <TabsContainer
        tabs={[
          <Tab title="posts">Posts List</Tab>,
          <Tab title="users">Users List</Tab>,
          <Tab title="todos">Todos List</Tab>,
      ]}
      >
        <PostsList />
        <UsersList />
        <TodosList />
      </TabsContainer>


    </div>
  );
}
