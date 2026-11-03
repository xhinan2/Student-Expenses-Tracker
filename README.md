# Student Expense Tracker

A lightweight web application for recording everyday expenses and
tracking total spending. Built with **HTML, CSS, and vanilla
JavaScript**, this project was created to practise front-end
development, DOM manipulation, input validation, and browser storage.

## Features

-   Add expenses with a name and amount.
-   Delete individual expense records.
-   Automatically calculate the total of saved expenses.
-   Validate expense names and amounts:
    -   Reject empty names and names containing only whitespace.
    -   Reject empty, zero, negative, and non-finite amounts.
    -   Accept valid decimal amounts.
-   Save expense records in the browser using `localStorage`.
-   Restore saved expenses after a page refresh.
-   Handle corrupted saved JSON by backing up the invalid value and
    clearing the active expense data.

## Built With

-   **HTML5** --- page structure
-   **CSS3** --- styling and layout
-   **JavaScript** --- application logic, DOM updates, validation, and
    storage
-   **Web Storage API (`localStorage`)** --- persistence in the browser

## Getting Started

This is a front-end project and does not require a backend or package
installation.

### Run locally

1.  Clone the repository:

    ``` bash
    git clone https://github.com/xhinan2/Student-Expenses-Tracker.git
    ```

2.  Open the project folder.

3.  Open `index.html` in a web browser.

You can also open the folder in Visual Studio Code and run `index.html`
with the Live Server extension.

## Project Structure

``` text
Student-Expenses-Tracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1.  Enter an expense name and amount.
2.  Select **Add Expense** to add it to the list.
3.  The application updates the total.
4.  Use **Delete** to remove an expense.
5.  Expense data is stored in the browser, so it remains available after
    refreshing the page in the same browser.

## Data and Privacy Notes

-   Expense data is stored locally in the browser through
    `localStorage`.
-   The data is not synchronised between browsers or devices.
-   Clearing the browser's site data can remove saved expenses.
-   This project is intended for learning and personal expense tracking;
    it is not a financial or accounting system.

## What I Practised

-   JavaScript variables, functions, arrays, and objects
-   DOM manipulation and event listeners
-   Form input validation
-   Calculating and updating totals
-   JSON parsing and stringifying
-   Browser `localStorage`
-   Debugging and handling invalid stored data

## Future Improvements

-   Edit an existing expense
-   Filter or search expenses
-   Group expenses by category
-   Add date-based summaries
-   Improve responsive layout and accessibility
-   Add automated tests

## Author

**Muhammed Sinan KV**\
BCA Student \| Aspiring Software Developer

-   GitHub: [@xhinan2](https://github.com/xhinan2)
-   LinkedIn: [Muhammed Sinan
    KV](https://www.linkedin.com/in/muhammed-sinan-kv-0b0b64423/)

------------------------------------------------------------------------

If you find an issue or have a suggestion, feel free to open an issue in
the repository.
