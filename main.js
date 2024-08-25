"use strict";
import "./style.css";
const btn = document.querySelector(".load__joke__btn");
const loadJoke = async () => {
  try {
    const chuckNorrisFetch = await fetch(
      "https://api.chucknorris.io/jokes/random",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const jokeData = await chuckNorrisFetch.json();
    document.querySelector(".loading__joke").innerHTML = jokeData.value;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", loadJoke);
