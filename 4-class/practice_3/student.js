import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);

    this.klass = klass;
  }

  introduce() {
    const { klass } = this;

    return `I am a Student. I am at Class ${klass}.`;
  }
}
