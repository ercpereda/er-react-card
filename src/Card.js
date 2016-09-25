import React from 'react';
import classnames from 'classnames';
import styles from './Card.css';

const Card = (props) => {
  const cardClass = classnames(styles.card, {
    [styles.rounded]: props.rounded
  });

  return (
    <div className={cardClass}>
      <img src={props.img} alt="Avatar" />
      <div className={styles.container}>
        <h4><b>{props.title}</b></h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  rounded: React.PropTypes.bool
};

Card.defaultProps = {
  rounded: false
};

export default Card;
