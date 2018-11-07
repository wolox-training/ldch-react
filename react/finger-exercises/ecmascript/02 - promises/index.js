// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    if (time > 500) {
      const reason = new Error('This time is too much !');
      reject(reason);
    }
    setInterval(() => {
      resolve(Date.now() - start);
    }, time);
  });
}

export function asyncDelay() {

}
