# Documentation for Initial State

## User State (Authentication)

- `user`: Contains the logged in user information with/without their roles.
- `users`: This mimics a user table which contains all the existing users. Users are stored based on the unique user id.
- `roles`: This mimics a roles table which contains all the open roles. Roles are stored based on the unique user id.
- `isLoggedIn`: Reflects whether a user is logged in or not

## Form State (Onboarding)

- `userInfo`: This contains the modified user information during the onboarding flow.
- `roles`: This contains the user roles during the onboarding flow.
