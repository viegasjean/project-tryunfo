import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>

        <input
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          name="cardAttr1"
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          name="cardAttr2"
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          name="cardAttr3"
          onChange={ onInputChange }
        />
        <input
          type="text"
          data-testid="image-input"
          value={ cardImage }
          name="cardImage"
          onChange={ onInputChange }
        />

        <select
          data-testid="rare-input"
          value={ cardRare }
          name="cardRare"
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        {
          hasTrunfo
            ? <h5>Você já tem um Super Trunfo em seu baralho</h5>
            : (
              <label htmlFor="cardTrunfo">
                Super Trunfo
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>)
        }

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};
