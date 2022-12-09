# password-manager
Password Manager created with Django and Django Rest Framework (Python) along with React, Redux and Material-UI (JavaScript)<br>
[Live Demo](https://plankton-app-ewh87.ondigitalocean.app/)

## Video Demo
<video width="640" height="480" controls autoplay>
<source src="https://drive.google.com/file/d/1fvAoJUrm9iS-GwdGgHrLgCyTzsHKOEeN/view?usp=sharing" type="video/mp4" />
<a href="https://drive.google.com/file/d/1fvAoJUrm9iS-GwdGgHrLgCyTzsHKOEeN/view?usp=sharing">Video not supported. Click to view</a>
</video>


# Setup
### Master branch is for production only, use dev branch for local development and testing.


## Database
PostgreSQL is the choice since it is provisioned by Heroku.<br>
You can use SQLite3 or any other database, simply change the settings.py file.<br>


## Python
Virtual environment is recommended.<br>

run following commands to setup python:<br>
+ pip install -r requirements.txt
+ py manage.py migrate
+ py manage.py createsuperuser (Credentials are of your choice)
+ py manage.py runserver

React files can be served from django-gunicorn server. simply run the following:
+ yarn build
+ py manage.py collectstatic


## React
+ yarn (to install packages)
+ yarn run build(If you want to use django server only)
+ yarn run start(to run a local server seperate from API)
