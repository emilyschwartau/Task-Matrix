![License](https://img.shields.io/github/license/emilyschwartau/Emily-Schwartau-solo-project.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/emilyschwartau/Emily-Schwartau-solo-project.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/emilyschwartau/Emily-Schwartau-solo-project.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/emilyschwartau/Emily-Schwartau-solo-project.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/emilyschwartau/Emily-Schwartau-solo-project.svg?style=for-the-badge)
    
# Task Matrix

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

As humans, we have a lot of tasks to accomplish, but often we don’t use our time efficiently. Sometimes we do nonessential tasks just to feel like we are accomplishing something, or sometimes we do what is right in front of us instead of tasks that are actually higher priority.

One method of task prioritization is called the Eisenhower Matrix, where tasks are ranked according to urgency and importance and plotted on a graph. However, this can become cumbersome and time-consuming to do by hand. This can be solved by using  Task Matrix, an app where tasks are immediately plotted on a graph, and listed according to highest priority. Task Matrix makes it easy to maximize your productivity!

## Screenshots


<img src="/documentation/images/solo project screenshots/Screen Shot 2022-01-18 at 2.23.22 PM.png" style="height:600px;"/>

<img src="/documentation/images/solo project screenshots/Screen Shot 2022-01-18 at 2.23.58 PM.png" style="height:600px;"/>

<img src="/documentation/images/solo project screenshots/Screen Shot 2022-01-18 at 2.24.26 PM.png" style="height:600px;"/>

<img src="/documentation/images/solo project screenshots/Screen Shot 2022-01-18 at 2.24.53 PM.png" style="height:600px;"/>

<img src="/documentation/images/solo project screenshots/Screen Shot 2022-01-18 at 2.25.35 PM.png" style="height:600px;"/>

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

In order to get started the user will simply need to fork and clone the repository from GitHub.

### Prerequisites

Softwares used in creating this application includes:

- [Visual Studio Code](https://code.visualstudio.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)

The application's repository may require alterations to lines of codes if used with other softwares that are not listed above.

### Installation

1. To run this application, the user should fork the repository onto their own GitHub account. In the user's repository, the user should copy the link and clone the repository onto their local system. Navigate to the repository folder using the terminal and run command line `npm install`
   - `$ cd ../Emily-Schwartau-solo-project`
   - `$ npm install`

<br />

2. Create a .env file in the repository folder and insert in the following lines with the placeholder variables.

   SERVER_SESSION_SECRET="`strongPassword`" <br />

   Replace `strongPassword` with a strong password of the user's choice or use [https://passwordsgenerator.net/](https://passwordsgenerator.net/) to generate a password to replace it with.

<br />

3.  Create a local postgreSQL database called `task_matrix` with Postico using the command lines from the database.sql file. Using different database systems may require the user to alter or add additional command lines to reflect the example database provided.

<br />

4. To start up the application, enter in the terminal the npm command lines of:

   - `npm run server`
   - `npm run client`

   The server should be running on `http://localhost:5000` whereas the client should be on `http://localhost:3000`. Both the server and the client is required to be up and running for the application to run successfully.

## Usage

Once the application is up and running, the user should be redirected to the browser with the application loaded. If not, open up a browser and enter in the url:

- `http://localhost:3000`

- Users must register and login before using the Task Matrix app. 

- Adding a Task
  - Users may add a task by clicking on the plus icon in the lower righthand corner that will redirect the user to an add task form
  - The user must then fill out all the required fields

- Viewing a Task
  - Users may either view the tasks in a graph format by clicking on the grid icon on the bottom toolbar, or in a list format by clicking on the list icon on the bottom toolbar
  - Users may view overdue tasks by clicking on the warning present on the graph page or list page
  - Users may view completed tasks by clicking on the "view completed tasks" message present on the graph page or the list page

- Editing a Task
  - Tasks may be edited by selecting a task either from the graph or list page, then clicking on the edit icon on the task details page

- Marking a Task as Complete
  - Tasks may be marked as complete by clicking on the checkmark icon present on the list view page or the task detail page

- Deleting a Task
  - Tasks may be deleted by clicking on the trashcan icon present on the list view page or the task details page


## License

<a href="https://choosealicense.com/licenses/unlicense/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/unlicense.svg" height=40 />The Unlicense</a>

## Acknowledgements

I would like to thank and acknowledge my instructors, Dane Smith and Liz Kerber, the Solinas Cohort, and the whole greater community at Prime Digital Academy, for providing us with the necessary tools and skills to succeed.

Additionally, I would like to thank my friends and families for continuing to support me as I have continued to grow in my developing skills.

## Contacts

<a href="https://www.linkedin.com/in/Emily Schwartau"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:emilyschwartau@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>