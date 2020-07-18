class Media {
  constructor(title, ratings=[], isCheckedOut=false) {
    this._title = title;
    this._ratings = ratings;
    this._isCheckedOut = isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  getAverageRating() {
    const sum = this._ratings.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    return sum / this._ratings.length;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this.isCheckedOut
  }
  addRating(value) {
    this._ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages, isCheckedOut, ratings) {
    super(title, ratings, isCheckedOut);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime, isCheckedOut, ratings) {
    super(title, ratings, isCheckedOut);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(artist, title, isCheckedOut, ratings, songs) {
    super(title, ratings, isCheckedOut);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())
