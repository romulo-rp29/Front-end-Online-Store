import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      review: {
        email: '',
        rating: 0,
        description: '',
      },
      ratingArray: [],

    };
  }

  componentDidMount() {
    this.setReview();
  }

  setReview = () => {
    const { review } = this.props;
    const ratingArray = this.creatingRating();
    this.setState({ review, ratingArray });
  }

  creatingRating() {
    const { review: { rating } } = this.props;
    const ratingArray = [];
    const maxRating = 5;
    for (let ind = 0; ind < maxRating; ind += 1) {
      if (rating > ind) ratingArray.push(true);
      else ratingArray.push(false);
    }
    return ratingArray;
  }

  render() {
    const { review: { email, description }, ratingArray } = this.state;
    return (
      <div>
        <p>{email}</p>
        <div>
          nota
          <div className="stars">
            {ratingArray.map((item, ind) => (
              <div key={ ind }>
                <div
                  key={ ind }
                  className={ item ? 'star star__marked' : 'star star__unmarked' }
                />
                <p>{ind}</p>

              </div>
            ))}

          </div>
          <p>{description}</p>
        </div>
      </div>);
  }
}

ProductReview.propTypes = {
  review: PropTypes.shape({
    email: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductReview;
