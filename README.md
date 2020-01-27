# password-manager
Password Manager created with Django, Rest Framework and React

# Setup

## Database
PostgreSQL is used as database.<br>
Create a database and user in prostgres as required.<br>
Append "NAME", "USER", "PASSWORD" fields to DATABASE and remove heroku and whitenoise from settings.py for local server.

## Python
(Virtual environment is optional but recommended)<br>
(React files can now be served from django server. Use yarn run build if you wish to do so.)

run following commands:<br>
+ pip install -r requirements.txt
+ py manage.py migrate
+ py manage.py createsuperuser (Credentials are of your choice)
+ py manage.py runserver

## React
+ yarn
+ yarn run build(If you want to use django server only)
+ yarn run start(Only if you did not run yarn run build)
