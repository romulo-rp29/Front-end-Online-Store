import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { saveReview } from '../services/saveAPI';

class ProductDetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: [false, false, false, false, false],
      ratingNumber: 0,
      description: '',
    };
  }

  handleInputChange= ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleRatingClick = (rating) => {
    const maxRating = 5;
    const ratingState = [];
    for (let ind = 0; ind < maxRating; ind += 1) {
      if (ind < rating) {
        ratingState.push(true);
      } else {
        ratingState.push(false);
      }
      this.validationForm();
    }
    this.setState({ rating: ratingState, ratingNumber: rating });
  }

  validationForm = () => {
    const { email, ratingNumber } = this.state;
    const magicNumber = 6;
    if (/.{1,}@.{1,}.com/.test(email)
    && ratingNumber > 0 && ratingNumber < magicNumber) {
      return true;
    }
    return false;
  }

  clearState = () => {
    this.setState({
      email: '',
      rating: [false, false, false, false, false],
      ratingNumber: 0,
      description: '',
    });
  }

  handleClickButton = (event) => {
    event.preventDefault();
    if (this.validationForm() === true) {
      const { email, ratingNumber, description } = this.state;
      const { id, getReviews } = this.props;
      const review = { email, rating: ratingNumber, description };
      saveReview(id, review);
      this.clearState();
      getReviews();
    }
  }

  render() {
    const { email,
      rating,
      description } = this.state;
    return (
      <form>
        <label htmlFor="product-detail-email">
          <input
            data-testid="product-detail-email"
            id="product-detail-email"
            name="email"
            value={ email }
            placeholder="Email"
            onChange={ this.handleInputChange }
          />
        </label>
        <div>
          Nota
          <div className="stars">
            {rating.map((item, ind) => (

              <div
                key={ ind }
                data-testid={ `${ind + 1}-rating` }
                name={ `rating${ind}` }
                className={ item ? 'star star__marked' : 'star star__unmarked' }
                onClick={ () => this.handleRatingClick(ind + 1) }
                aria-hidden="true"
              />

            ))}
          </div>
        </div>

        <label htmlFor="product-detail-evaluation">
          <textarea
            data-testid="product-detail-evaluation"
            id="product-detail-evaluation"
            name="description"
            value={ description }
            placeholder="Mensagem Opicional"
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          data-testid="submit-review-btn"
          type="button"
          onClick={ this.handleClickButton }
        >
          Enviar
        </button>
      </form>);
  }
}

ProductDetailsForm.propTypes = {
  id: PropTypes.string.isRequired,
  getReviews: PropTypes.func.isRequired,
};

export default ProductDetailsForm;
