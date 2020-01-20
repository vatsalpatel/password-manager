# password-manager
Password Manager created with Django, Rest Framework and React

# Setup

## Database
PostgreSQL is used as database.<br>
Create a database and user in prostgres as required.<br>
Place credentials in a file called "dbcred.txt" in "password-manager/securebits" as displayed in "dbcred.example".<br>

## Python
(Virtual environment is optional but recommended)<br>
(React files can now be served from django single server. Use yarn run build in "frontend/" if you wish to do so.)

run following commands:<br>
+ pip install -r requirements.txt
+ py manage.py migrate
+ py manage.py createsuperuser (Credentials are of your choice)
+ py manage.py runserver

## React
+ yarn
+ yarn run build(If you want to use django server only)
+ yarn run start(Only if you did not run yarn run build)