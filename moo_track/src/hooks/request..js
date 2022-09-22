async function httpGetCows() {
  const data = await fetch('http://localhost:8000/cows');
  const cows = await data.json();
  return cows;
}

function httpPostCow(cow) {
  fetch('http://localhost:8000/cows', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cow),
  });
}
export { httpGetCows, httpPostCow };
