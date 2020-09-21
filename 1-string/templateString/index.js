function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  const { firstName, lastName, id } = person;
  const score = getScore(id);
  const fullName = lastName + firstName;

  return `你好，${fullName}！你的考试成绩为${score}分`;
}
