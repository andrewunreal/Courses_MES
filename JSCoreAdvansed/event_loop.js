function randomDelayedPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const delaySeconds = randomNumber * 1000;
    console.log(`Generated number: ${randomNumber}, delay: ${randomNumber} seconds`);
    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(`Success! Number ${randomNumber} is between 1-5`);
      } else {
        reject(new Error(`Failed! Number ${randomNumber} is between 6-10`));
      }
    }, delaySeconds);
  });
}

randomDelayedPromise()
  .then(result => console.log(result))
  .catch(error => console.error(error.message));