# Deployment

- The app was deployed to [Render](https://render.com/).
- The db was deployed to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- The program can be reached by the [link](https://empowered.onrender.com/).

---

## To deploy the project as an application that can be **run locally**:

*Note:*
  1. This project requires you to have Python installed on your local PC:
  - `sudo apt install python3`

  1. You will also need pip installed to allow the installation of modules the application uses.
  - `sudo apt install python3-pip`

Create a local copy of the GitHub repository by following one of the two processes below:

- Download ZIP file:
  1. Go to the [GitHub Repository page](https://github.com/AwsSG/empowered).
  1. Click the Code button and download the ZIP file containing the project.
  1. Extract the ZIP file to a location on your PC.

- Clone the repository:
  1. Open a folder on your computer with the terminal.
  1. Run the following command
  - `git clone https://github.com/AwsSG/empowered.git`

- Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

  [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/AwsSG/empowered)

  1. Install Python module dependencies:
     
      1. Navigate to the folder empowered by executing the command:
      - `cd empowered`
      1. Run the command pip install -r requirements.txt
        - `pip3 install -r requirements.txt`

- Create a MongoDB Atlas account if you don't already have one here [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

- Create a new cluster and database.
- Set up a new user and password for the database.
- Create a new collection called "users" and add the following documents to the collection:
  - `{
    "username": "test",
    "password": "test",
    "email": test@gmail.com"
    }`

- Create a new collection called "tracker" and add the following documents to the collection:
  - `{
    "username": "test",
    "datetime": "(!!!!set to "DATE"!!!!)",
    "emoji": "1",
    "note": "note test"
   }`

- Create a new collection called "resources" and add the following documents to the collection:
  - `{
    "emoji": "1",
    "link": "https://www.google.com/",
    "title": "test link to google",
    }`

- Run the application:
  - `python3 app.py`

---

**The app was initially deployed to Heroku then moved to Render since Heroku has removed its free tier services from November 29 2022**

## To deploy the project to Heroku:
- Clone the repository:
  1. Open a folder on your computer with the terminal.
  1. Run the following command
  - `git clone https://github.com/AwsSG/empowered.git`

  1. Create your own GitHub repository to host the code.
  1. Run the command `git remote set-url origin <Your GitHub Repo Path>` to set the remote repository location to your repository.

  1. Push the files to your repository with the following command:
  `git push`
  1. Create a Heroku account if you don't already have one here [Heroku](https://dashboard.heroku.com).
  1. Create a new Heroku application on the following page here [New Heroku App](https://dashboard.heroku.com/apps):

      - ![New Heroku App](documentation/deployment/new_heroku_app.png)

  1. Go to the Deploy tab:

      - ![Deploy Tab](documentation/deployment/deploy_tab.png)

      - ![Deployment Method](documentation/deployment/deployment_method.png)

  1. Link your GitHub account and connect the application to the repository you created.

      - ![Link GitHub account](documentation/deployment/link_to_github.png)

  1. Go to the Settings tab:
  
      - ![Settings Tab](documentation/deployment/settings_tab.png)

  1. Click "Add buildpack":

      - ![Add Buildpack](documentation/deployment/add_buildpack.png)

  1. Add the Python and Node.js buildpacks in the following order:

      - ![Add Python and Node.js](documentation/deployment/add_python_and_node_js.png)

  1. Click "Reveal Config Vars."

      - ![Reveal Config Vars](documentation/deployment/reveal_config_vars.png)

  1. Add 1 new Config Vars:
      - Key: PORT Value: 8000
      - *This Config was provided by [CODE INSTITUTE](https://codeinstitute.net/)*.

  1. Go back to the Deploy tab:

      - ![Deploy Tab](documentation/deployment/deploy_tab.png)

  1. Click "Deploy Branch":

      - ![Deploy Branch](documentation/deployment/deploy_branch.png)

      - Wait for the completion of the deployment.

      - ![Deploying Branch](documentation/deployment/deploying_branch.png)

  1. Click "Open app" to launch the application inside a web page.

      - ![View Button](documentation/deployment/view_app.png)

---

## Render Deployment



### Create a new app on Render

Link to the deployed application on Render: [https://github.com/AwsSG/empowered](https://github.com/AwsSG/empowered)

1. Create a new Render account if you don't already have one here [Render](https://render.com/).

2. Create a new application on the following page here [New Render App](https://dashboard.render.com/), choose **Webserver**:

    - ![New Render App](documentation/deployment/render_new_web_service.png)

3. Select the GitHub option and connect the application to the repository you created.

    - ![GitHub Option](documentation/deployment/render_configure_github_account.png)

4. Search for the repository you created and click "Connect."

    - ![Connect to GitHub](documentation/deployment/render_connect_repository.png)

    - ![Connect to GitHub](documentation/deployment/render_connect_repository_connect.png)

5. Create name for the application

    - ![Create Application Name](documentation/deployment/render_create_name.png)

6. Select the region where you want to deploy the application.

    - ![Select Region](documentation/deployment/render_select_region.png)

7. Select branch to deploy.

    - ![Select Branch](documentation/deployment/render_select_branch.png)

8. Select environment.

    - ![Select Environment Variables](documentation/deployment/render_select_environment.png)

9. Render build command: `pip install -r requirements.txt`



10. Render start command: `python app.py`



11. Select Free plan.

    - ![Select Free Plan](documentation/deployment/render_payment_info.png)

12. Click on "Advanced" settings.

    - ![Advanced Settings](documentation/deployment/render_advanced_settings.png)

13. Add the following environment variables:


    | Ket | Value |
    | --- | --- |
    | IP | 0.0.0.0 |
    | PORT | 5000 |
    | SECRET_KEY | `<your secret key>` |
    | MONGO_URI | `<your mongo uri>` |
    | MONGO_DBNAME | `<your mongo db name>` |

    - *The IP and PORT environment variables are required by Render to run the application.*
    - *The SECRET_KEY environment variable is required by Flask to run the application.*
    - *The MONGO_URI and MONGO_DBNAME environment variables are required by MongoDB to run the application.*


22. Click "Create Web Service."

    - ![Save Web Service](documentation/deployment/render_create_web_service.png)

23. Wait for the completion of the deployment.

24. You are ready to go!

    - [https://empowered.onrender.com/](https://empowered.onrender.com/)

---