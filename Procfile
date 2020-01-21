release: py manage.py migrate
release: cd frontend && yarn && yarn run build
web: gunicorn securebits.wsgi --log-file -