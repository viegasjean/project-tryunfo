import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

const CARD_MAX_VALUE = 90;
const SUM_MAX_VALUE = 210;

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  handleHasTrunfo() {
    const { cardTrunfo } = this.state;
    this.setState({ hasTrunfo: cardTrunfo });
  }

  handleSaveButton() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const enabled = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardAttr1 >= 0 && cardAttr1 <= CARD_MAX_VALUE
      && cardAttr2 >= 0 && cardAttr2 <= CARD_MAX_VALUE
      && cardAttr3 >= 0 && cardAttr3 <= CARD_MAX_VALUE
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= SUM_MAX_VALUE;

    this.setState({ isSaveButtonDisabled: !enabled });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.handleSaveButton,
    );
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    this.handleHasTrunfo();
    const objState = this.state;
    this.setState((prevState) => ({
      cards: [...prevState.cards, objState],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'Normal',
    }));
  }

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
      cards,
    } = this.state;

    return (
      <div className="app">
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          cards={ cards }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <ul>
          {cards.map((card) => (
            <li key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
