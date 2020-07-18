class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(value) {
    if (typeof value === 'number') {
      this._numberOfStudents = value;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeacher(teachers) {
    let rand = Math.floor(Math.random() * teachers.length);
    return teachers[rand];
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy, level='Primary') {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents, level='Middle') {
    super(name, level, numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams, level='High') {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts()
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
