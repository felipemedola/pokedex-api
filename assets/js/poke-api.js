// PokeAPI: https://pokeapi.co/api/v2/pokemon?
// MWApi = https://mwtoxml.com.br/poke.php?

const pokeApi = {}

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://mwtoxml.com.br/poke.php?offset=${offset}&limit=${limit}`;

    return  fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.log(error))
}