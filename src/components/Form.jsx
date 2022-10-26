import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            id="description"
            name="description"
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attr1
          <input
            id="attr1"
            name="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Attr2
          <input
            id="attr2"
            name="attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Attr3
          <input
            id="attr3"
            name="attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            id="image"
            name="image"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select name="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input
            id="trunfo"
            name="trunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button data-testid="save-button" type="button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
