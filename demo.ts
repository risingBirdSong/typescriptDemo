
interface nonFictionI {
  genre : 'nonfiction',
  subGenre : nonFictionSubGenres,
  author: string;
  pages: number;
  description: string;
}
interface fictionI {
  genre : 'fiction',
  subGenre : fictionSubGenres,
  author: string;
  pages: number;
  description: string;
}

type bookType = nonFictionI | fictionI;

type fictionSubGenres =  "action and adventure"
| "classic"
| "crime and detective"
| "drama"
| "fable"
| "fantasy";

type nonFictionSubGenres = "biography" | "essay" | "memoir" | "texbtook" | "poetry" | 'history';

let mySub : fictionSubGenres = "fable";
let myNonFict : nonFictionSubGenres = 'biography';

interface readerI {
  name: string;
  enjoyedBooks: {
    allBooks : (nonFictionI |  fictionI)[];
    fictionBooks : fictionI[];
    nonfictionBooks : nonFictionI[];
  };
}


let toKillAMockingBird : fictionI = {
  author : "Harper Lee",
  description : "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
  genre : 'fiction',
  subGenre : 'classic',
  pages : 281
}

let sapiens : nonFictionI = {
  author : 'Yuval Noah Harari',
  description : `Harari's work situates its account of human history within a framework provided by the natural sciences, particularly evolutionary biology: he sees biology as setting the limits of possibility for human activity, and sees culture as shaping what happens within those bounds. The academic discipline of history is the account of cultural change.`,
  genre : 'nonfiction',
  subGenre : 'history',
  pages : 443
}


let theReader : readerI = {
  name : 'grabus',
  enjoyedBooks : {
    allBooks : [sapiens, toKillAMockingBird],
    fictionBooks : [toKillAMockingBird],
    nonfictionBooks : [sapiens]
  }
}

const addBooksToReader = (book : bookType, reader : readerI) => {
  if (book.genre === 'fiction'){
    reader.enjoyedBooks.fictionBooks.push(book);
  }
  else if (book.genre === 'nonfiction') {
    reader.enjoyedBooks.nonfictionBooks.push(book);
  }
  reader.enjoyedBooks.allBooks.push(book);
}