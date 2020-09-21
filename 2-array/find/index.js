export default function find00OldPerson(collection) {
  const person = collection.find(p => p.age <= 20);

  if (!person) {
    throw new Error('person not found');
  }

  return person.name;
}
