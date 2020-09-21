import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);

    this.klass = klass;
  }

  introduce() {
    const { klass } = this;
    const personIntroduce = super.introduce();

    return `${personIntroduce} I am a Student. I am at Class ${klass}.`;
  }
}
