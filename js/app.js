const joke = document.querySelector("#joke");
const newJokeBtn = document.querySelector("#newJoke");
newJokeBtn.addEventListener("click", printJoke);

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  const joke = data.joke;
  console.log(joke);
  return joke;
}

async function printJoke() {
  joke.innerText = await fetchJoke();
}

printJoke();
