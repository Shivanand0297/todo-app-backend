# Backend for todo app api
### Description:
Todo app backend provides functionality for creating a todo with title and task with their time of creation. we can perform all the crud operations on the todo like **create, update, read & delete** and additionally we can
perform **search todos, sort todos, register, login and logout** also. In this app I use [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for user authentication by storing them in the serverside cookies.

### Dependencies:
   - bcryptjs
   - cookie-parser
   - cors
   - dotenv
   - express
   - jsonwebtoken
   - mongoose
   - router

### How to run:
Download and open the zip file and hit `npm install` to install all the dependencies finally hit `npm start`.

   | Steps   | with [npm](https://www.npmjs.com/) |
   | -----   | ---------------------------------- |
   | Install | `npm install`                      |
   | Run     | `npm start`                        |

### Configuration:
".envSample" file is provided in the repo, modify your ".env" file as per ".envSample" file and connect to the database to run this api. 