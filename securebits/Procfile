release: py manage.py migrate
release: cd frontend && yarn run build && cd ..
web: gunicorn securebits.wsgi --log-file -