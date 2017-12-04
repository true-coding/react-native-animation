import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import PropTypes from 'prop-types';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    renderCard: PropTypes.func.isRequired
  };

  renderCards() {
    return this.props.data.map((item) => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;
