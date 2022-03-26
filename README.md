# Signup Flow

Simple Signup/login flow for companies that want to setup their profile.

The project is hosted on [here](https://deolaj-td.netlify.app).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions

### Getting Started

    git clone https://github.com/deolaj/signup-flow.git
    cd signup-flow
    yarn install

### Development

To run the local server,

    yarn dev

The `prettier`, `stylelint`, and `eslint` libraries are used for formating and error checking. Install their corresponding vscode extensions to use with VSCode.

### Production

To generate build files for production,

    yarn build

### Test

Some unit and integration tests were written using Jest and React testing library. These tests were not extensive because of the timeframe, but there were sufficient to improve the development experience.

To run these tests

    yarn test

## Assumptions and Thoughts

- Companies are required to have an account before they can add open roles. This was done to mimic an authentication experience in production.
- Going through an Onboarding directs companies through the process of at least adding a role before having full access to the dashboard

## Additional Comments

- A simple company verification, based on adding roles, was implemented to enforce the onboarding flow
- This implementation covers showing the company information and does not cover editing existing company information
- Check the `docs/initialState.md` file to understand the StateType.
- User interface was largely improvised
- Types could be greatly improved
- Pull requests tell the story of the implementation
