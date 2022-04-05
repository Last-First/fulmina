# Getting Started with Knockri Candidate List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps for execution

- Navigate to the cloned repository
- Install node dependencies by running `npm i`
- On the terminal execute `npm start` to run the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API Usage

API can be launched using json-server. You will need to run `npx json-server --watch api/api.json --port 8000` on another terminal pointed at the root level of the application.

To check the api, open [http://localhost:8000](http://localhost:8000) with the following endpoints:

| Endpoint                     | Result                                              |
|------------------------------|-----------------------------------------------------|
| /candidates                  | Lists all available candidates                      |
| /questions                   | Lists all available questions                       |
| /applications                | Lists all available applications                    |