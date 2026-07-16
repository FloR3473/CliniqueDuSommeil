FROM mysql:latest
COPY Initdb/ /docker-entrypoint-initdb.d/
ENV MYSQL_ROOT_PASSWORD = $DB_PASSWORD
ENV MYSQL_DATABASE = $DB_NAME
