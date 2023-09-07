This project is making use of single page application.
This is setup using React as a javascript library and vite as bundling tool.

# Other libraries used as follows

"axios": For making API calls
"bootstrap": For styling
"chart.js": For creating charts like pie chart etc.
"react": Javascript library
"react-bootstrap": For getting pre built components and styling
"react-chartjs-2": For creating charts. This is build on top of chart.js
"react-dom": This is for rendering to the dom
"react-loader-spinner": For showing spinners
"react-router-dom": For routing in single page applications

React is a component based library. We create Components which handle single task.

# Folder structure : There are several folders used for separation of concerns.

1. assets: used for storing logos and images
2. components: Each component is used for displaying one section on screen, e.g. Loader component is used for showing loader, Modal component is used for shoing pop ups etc.
3. constants: used for declaring constants for the entire application
4. context: used for making api calls at common place
5. pages: used for defining the layouts for different pages e.g. if a sidebar is needed ona particular page or not.

# Pages Details

1. Dashboard: Landing page of application which is used to display a sidebar with multiple vertical tabs.
2. CostOptimization: Page for showing the list of policies in a table and associated actions like update, save, deploy etc.

# Components details

1. Header: Common header component for all pages.
2. Sidebar: Vertical tab structure for displaying different tab content.
3. Loader: For showing loader in a section of the page
4. FullScreenLoader: For showing full page loader
5. UpdateModal: For showing content in a modal
6. DashboardContent: For showing content of dashboard when Dashboard is clicked from sidebar
7. PoliciesContent: For showing content of policies like all piecharts when Policies is clicked from sidebar
8. ReliabilityContent: For showing content of Reliability when Reliability is clicked from sidebar
9. ResourcesContent: For showing content of Resources when Resources is clicked from sidebar
10. OrganisationContent: For showing content of Organisation when Organisation is clicked from sidebar
11. UsersContent: For showing content of Users when Users is clicked from sidebar
12. Filters: For filtering the records in table
13. PolicyList : For displaying policies in table.
14. App.jsx: This file is used to define all the routing structure and providers

# All backend api urls are listed in `PoliciesContext.jsx` file

# How to start the frontend?

1. Clone the repo
2. Open the command line
3. Go to root folder of this project
4. Run `npm install` in terminal
5. Run `npm run dev` in terminal
6. Open the url `http://localhost:5173/` in browser

# Some important points

1. Vite uses `.jsx` file type if a component is returning a JSX element.
2. Entry level file used by vite bundler is `main.jsx`. This is the root file of the application.
3. After `npm install` one folder called `node_modules` is generated which has all the project dependencies downloaded to make the app work. This folder must never be commited as this is large in size. This folder is added in `.gitignore` file as well.
4. Project dependencies are listed in file `package.json`.
5. `package-lock.json` file is used to lock the version of dependencies. This file must be commited.
6. `.eslintrc.cjs` file is used for static code checking based on recommended rules.

# Routes currently in the application

Home page : `http://localhost:5173/`
Cost Optimization page: `http://localhost:5173/cost-optimization`

# For production build follow below url

`https://vitejs.dev/guide/build.html`

# For deployment follow below url

`https://vitejs.dev/guide/static-deploy.html`
