### Chuck Norris Jokes [![Build Status](https://travis-ci.com/RomanovAleksander/chuck-norris-jokes.svg?branch=master)](https://travis-ci.com/RomanovAleksander/chuck-norris-jokes)
**Navigation:**
[Installing](https://github.com/RomanovAleksander/chuck-norris-jokes#installing),
[Using](https://github.com/RomanovAleksander/chuck-norris-jokes#using),
[Structure](https://github.com/RomanovAleksander/chuck-norris-jokes#structure)

* This application includes next functionality:
  * Uses [Chuck Norris API](https://api.chucknorris.io/) to get jokes in JSON format.
  * Ability to get a random joke. 
  * Ability to get a random joke from categories (Use API to get all available categories). 
  * Ability to get jokes by free text search. 
  * Any joke can be marked/unmarked as favourite. 
  * Jokes marked as favourite appear in the right section Favourite. 
  * Favourite jokes available after reloading the page and stored in the browser
* For task implementation used:
  * **React, Redux**;
  * **Create React App** as a app starter;
  * **Travis-CI**;
  * **Github pages**.
* [App on GitHub Pages](https://romanovaleksander.github.io/chuck-norris-jokes/)

### Installing
```
$ git clone https://github.com/RomanovAleksander/chuck-norris-jokes.git - clone this repository
$ npm install || yarn install - install dependencies
```

### Using
```
$ npm run start - start dev server
$ npm run build - build application for production
$ npm run eject - copies all the configuration files and the transitive dependencies  into project
$ npm run predeploy - build application for production
$ npm run deploy - deploy application on gh-pages
```

### Structure
```
.
├── public
│   ├── favivon.ico
│   └── index.html
├── src                    
│   ├── actions
│   │   ├── categories
│   │   │   ├── actions.js
│   │   │   └── types.js
│   │   └── jokes
│   │       ├── actions.js
│   │       └── types.js
│   ├── assets
│   │   ├── arrow.svg
│   │   ├── link.png
│   │   └── message.png
│   ├── components
│   │   ├── App
│   │   │   ├── App.js
│   │   │   ├── app.scss
│   │   │   └── index.js
│   │   ├── ErorBoundry
│   │   │   ├── ErorBoundry.js
│   │   │   └── index.js
│   │   ├── ErorIndicator
│   │   │   ├── ErorIndicator.js
│   │   │   ├── erorIndicator.scss
│   │   │   └── index.js
│   │   ├── Favourites
│   │   │   ├── Favourites.js
│   │   │   ├── favourites.scss
│   │   │   └── index.js
│   │   ├── Form
│   │   │   ├── Form.js
│   │   │   ├── form.scss
│   │   │   └── index.js
│   │   ├── FormCategories
│   │   │   ├── FormCategories.js
│   │   │   ├── formCategories.scss
│   │   │   └── index.js
│   │   ├── FormCategory
│   │   │   ├── FormCategory.js
│   │   │   ├── formCategory.scss
│   │   │   └── index.js
│   │   ├── FormResults
│   │   │   ├── FormResults.js
│   │   │   └── index.js
│   │   ├── FormSearch
│   │   │   ├── FormSearch.js
│   │   │   ├── formSearch.scss
│   │   │   └── index.js
│   │   ├── Header
│   │   │   ├── Header.js
│   │   │   ├── header.scss
│   │   │   └── index.js
│   │   ├── JokeItem
│   │   │   ├── JokeItem.js
│   │   │   ├── jokeItem.scss
│   │   │   └── index.js
│   │   ├── JokeList
│   │   │   ├── JokeList.js
│   │   │   ├── jokeList.scss
│   │   │   └── index.js
│   │   ├── Loader
│   │   │   ├── Loader.js
│   │   │   ├── loader.scss
│   │   │   └── index.js
│   │   ├── NotFound
│   │   │   ├── index.js
│   │   │   ├── NotFound.js
│   │   │   └── notFound.scss
│   │   └── ScrollArrow
│   │       ├── index.js
│   │       ├── ScrollArrow.js
│   │       └── scrollArrow.scss
│   ├── pages
│   │   ├── index.js
│   │   ├── JokesPage.js
│   │   └── NotFoundPage.js
│   ├── reducers
│   │   ├── categories.js
│   │   ├── jokes.js
│   │   └── index.js
│   ├── services
│   │   ├── ApiService.js
│   │   ├── LocalStorageService.js
│   │   └── index.js
│   ├── styles
│   │   └── variables.js
│   ├── index.js
│   └── store.js
├── .gitignore 
├── .travis.yml
├── package.json
├── README.md
├── yarn.lock
```
[Go to top](https://github.com/RomanovAleksander/chuck-norris-jokes#chuck-norris-jokes-)