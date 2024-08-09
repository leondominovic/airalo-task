### Prerequisites

Before you begin, make sure you have the following prerequisites:

- Node.js
- NPM

### Installation

1. Clone this repository to your local machine
2. Navigate to the project root directory
3. Install the dependencies:
   `npm install`
4. Install playwright dependencies `npx playwright install --with-deps`
5. Set environment values in the .env file

### Running Tests

1. Start Playwright Test Runner:
   `npx playwright test`
2. If some of the tests fail then the report will automatically open. If all tests pass then it can be opened with `npx playwright show-report
` command

### Test Cases

There is one UI test and two API tests.
For UI test I used POM because of potential reusability and abstraction. The test is divided into substeps because of the readability of a report, and soft assertions are used so all values are asserted at once.

Regarding two API tests, the first one is used to validate the creation of an order, and the second one is for the fetching of esims list.
The ApiClient class is used because of potential reusability and abstraction.


Some used best practices:
 - Page Object Model (POM)
- DRY - Do not repeat yourself
- Test methods and test cases should have meaningful and descriptive names
- Save screenshots for failing test cases
- Setup detailed automation tests reporter
- Sensitive data should be held in .env file
- Eslint and Prettier are set up
- Pre-commit husky hook for code clean up is added