# My Wallet

An easy to use financial manager. Track your revenues and expenses to learn how you spend your money and know all the time how much you have.

Try it out now at https://my-wallet-eight.vercel.app/

## About

This is an web application with which lots of people can manage their own expenses and revenues. Below are the implemented features:

- Sign Up
- Login
- List all financial events for a user
- Add expense
- Add revenue
- Delete expense and revenue

By using this app any user can learn how they've been using their money and always keep track of your balance.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/dayjs%20-%2320232a.svg?&style=for-the-badge&color=orange'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/bcrypt%20-%2320232a.svg?&style=for-the-badge&color=green'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/express%20-%2320232a.svg?&style=for-the-badge&color=critical'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/joi%20-%2320232a.svg?&style=for-the-badge&color=ff69b4'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/mongoDB%20-%2320232a.svg?&style=for-the-badge&color=success'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/uuid%20-%2320232a.svg?&style=for-the-badge&color=blue'>
</p>

## How to run

1. Clone this repository
2. Clone the front-end repository at https://github.com/renaatosalgado/my-wallet-front
3. Follow instructions to run back-end at https://github.com/renaatosalgado/my-wallet-front
4. Install dependencies
```bash
npm i
```
5. You must create a root file named ".env" containing the environment variables MONGO_URI and PORT
```bash
MONGO_URI="connection string to the DB"
PORT=local port number
```
6. Run the back-end with nodemon while developing
```bash
npm run dev
```
6. You can optionally actually run the project
```bash
npm start
```
7. Finally access http://localhost:3000 on your favorite browser.
