const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  afterEach(async () => {
    await driver.quit();
  });

  const addMovie = async(movieTitle) => {
    await driver
        .findElement(By.css("input[name = 'movieTitle']"))
        .sendKeys(movieTitle)
    await driver.findElement(By.css("button[type = 'submit']")).click()
  }

//   test("crosses off a movie", async () => {

//     await driver.get("http://localhost:3000");

//     await addMovie("Taxi Driver");

//     const addedMovie = await driver.wait(until.elementLocated(By.css("#movies-list li")),
//     1000
//     );
//     await addedMovie.findElement(By.css("input[type='checkbox']")).click 

//   })

//   test("deletes a movie", async () => {

//     await driver.get("http://localhost:3000");

//     await addMovie("Do the Right Thing");

//     const addedMovie = await driver.wait(until.elementLocated(By.css("#movies-list li")),
//     1000
//     );
//     await addedMovie.findElement(By.css("button.delete-btn")).click()
//     await driver.wait(until.stalenessOf(addedMovie), 1000)

//   })

  test("reveal a message", async () => {

    await driver.get("http://localhost:3000");

    await addMovie("Titanic");

    const addedMovie = await driver.wait(until.elementLocated(By.css("#movies-list li")),
    1000
    );
    await addedMovie.findElement(By.css("button.delete-btn")).click()
    await driver.wait(until.elementTextContains(driver.findElement(By.id("message")),('deleted!') ),
    1000)

  })