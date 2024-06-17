import { useState } from 'react'

function SearchForm() {
    return (
      <div>
        <input type="text" placeholder="Digite o nome da cidade" />
        <button>Pesquisar</button>
      </div>
    );
  }
  
  export default SearchForm;