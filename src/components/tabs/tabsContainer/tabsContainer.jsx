import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`;

export default class TabsContainer extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.node).isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  }

  state = {
    currentIndex: 0,
  }

  changeTabIndex = (e, newIndex) => {
    this.setState({ currentIndex: newIndex });
  }

  render() {
    const { tabs, children } = this.props;
    const { currentIndex } = this.state;
    return (
      <React.Fragment>
        <Container>
          {tabs.map((tab, index) => {
            const { title } = tab.props;
            return React.cloneElement(
              tab,
              {
                key: title,
                title,
                handleClick: this.changeTabIndex,
                id: index,
                selected: index === currentIndex,
              },
            );
          })}
        </Container>
        {React.Children.toArray(children)[currentIndex]}
      </React.Fragment>
    );
  }
}
