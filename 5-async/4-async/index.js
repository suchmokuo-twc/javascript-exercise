async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求

  const response = await fetch(url);
  const json = await response.json();

  return json;

  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
