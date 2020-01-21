release: python manage.py migrate
release: python manage.py collectstatic
web: gunicorn securebits.wsgi --log-file -