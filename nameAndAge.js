const { books } = require('./data/library');

const nameAndAge = () => books.map(({ author, releaseYear }) => ({
  author: author.name,
  age: releaseYear - author.birthYear,
})).sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
});

module.exports = { nameAndAge };
