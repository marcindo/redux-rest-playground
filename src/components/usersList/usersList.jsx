import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/card';

const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class UsersList extends Component {
  static propTypes = {
    loadUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }
  static defaultProps = {
    error: null,
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { users, loading, error } = this.props;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
      <UsersContainer>
        {users.map(user => (
          <Card
            key={user.id}
            title={user.name}
          >
            {user.email}
          </Card>))}
      </UsersContainer>
    );
  }
}

export default UsersList;
