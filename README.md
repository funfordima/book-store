1. Screenshot:
   ![](https://cdn1.savepice.ru/uploads/2021/3/29/edab1537f7755039179acf3db2183b04-full.jpg)
3. Deploy: https://funfordima.github.io/book-store/build/
4. Done 29.03.2021

## Objectives
- [x] Create a JS Band Store application. Which includes next functionality:
- [x] User can log in with username;
- [x] Browse books catalog;
- [x] Search book by title;
- [x] Filter book by price (dropdown options: 0 < price < 25, 25 < price < 50, price > 50);
- [x] Browse specific book details;
- [x] Add a specific book to cart;
- [x] Browse Cart with added books;
- [x] Make a purchase of added books;
- [x] For task implementation you must use: 
    - [x] React, Redux
    - [x] Functional React components;
    - [x] Create React App as a boilerplate;
    - [x] eslint-config-airbnb config for ESLint;
    - [x] Github pages;
    - [x] Github project.
- [x] You should cover your code with unit tests. For testing, you should use Jest;
- [x] For running eslint and test you should use pre-commit hooks;
- [x] Yours web-application fields validation should be based on Validation provided in the Arch notes section;
- [x] Yours web-application should be based on Wireframes provided in the Arch notes section;

## Scenarios
- [x] User goes to the JS Band store website;
- [x] If User unauthorized System redirects the user to the Login page (That's the only page available for unauthorized user);
- [x] User login with username, System return user token (API provide token), redirects User to the Book catalog and store token in LocalStorage and Application State;
- [x] User see the list of books (provided by Api); Search by book name, filter list by the price;
- [x] User navigate to the specific Book details clicking on View button;
- [x] User choose the needed count of books, sees the total price, and adds the book to the cart. Then User can navigate back to the catalog or go forward to the Cart;
- [x] User goes to the Cart, see order list and press 'Purchase' button;
- [x] System place order, show a modal window with ordered items and successful message, and clear the cart;
- [x] Then User sign out, System redirects the User to the Login screen.

## Acceptance criteria
- [x] All listed functionality should be provided and work;
- [x] React should be used for task implementation;
- [x] Redux should be used as a state management ;
- [x] Only own created components should be used (you may use only styles from 3rd party libraries such as Bootstrap, etc...);
- [x] Only functional react components should be used;
- [x] Components should be placed in separated files (don't forget about modularity);
- [x] Code should be linted with eslint-config-airbnb;
- [x] Other routes should be unavailable and respond with not found UI;
- [x] Only /login and /not-found routes should be available for the unauthorized user, another else should be restricted;
- [x] Pull requests mechanism should be used for making changes into the repository;
- [x] The project should be deployed to the GitHub pages;
- [x] Tasks should be decomposed and defined in Github project board (at least 7 tasks);
- [x] Usage documentation should be provided;
- [x] Test coverage should be at least 50%;
- [x] Use Husky for pre-commit hooks and add linting and testing on pre-commit;

## Project setup

1. Install Node.js
2. Fork this repository: book-store
3. Clone your newly created repo: https://github.com/<%your_github_username%>/book-store/
4. Go to folder book-store
5. To install all dependencies use npm install
6. To start app use npm run build (production mode) or npm run start (development mode)
