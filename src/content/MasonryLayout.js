import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MasonryLayout.css';

export default class MasonryLayout extends Component {
  render() {
    const { items } = this.props;
    const itemChdilrens = items.map(item => (
      <div className="item" key={item.id}>
        <img className="thumbnail" src={item.src} alt="item-thumbnail" />
      </div>
    ));

    return (
      <div className="MasonryLayout">
        <div className="list">
          {itemChdilrens}
        </div>
      </div>
    );
  }
}

MasonryLayout.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
  })),
};

MasonryLayout.defaultProps = {
  items: [
    { id: '1', src: 'https://i.imgur.com/c3s8eqU.jpg' },
    { id: '2', src: 'https://i.imgur.com/IgB7tpM.jpg' },
    { id: '3', src: 'https://i.imgur.com/T85TaZN.png' },
    { id: '4', src: 'https://i.imgur.com/TfSJnWE.jpg' },
    { id: '5', src: 'https://i.imgur.com/DxFDaWi.jpg' },
    { id: '6', src: 'https://i.imgur.com/ra03Qce.jpg' },
    { id: '7', src: 'https://i.imgur.com/kSj5X0Q.jpg' },
    { id: '8', src: 'https://i.imgur.com/B45yGfm.jpg' },
    { id: '9', src: 'https://i.imgur.com/Y1QVk9A.jpg' },
    { id: '10', src: 'https://i.imgur.com/5NLQX9d.jpg' },
  ],
};
