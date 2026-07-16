ARG MYSQL_VERSION=8.4

FROM mysql:${MYSQL_VERSION}
COPY Initdb/ /docker-entrypoint-initdb.d/

ENTRYPOINT ["/bin/bash", "-c", "export MYSQL_ROOT_PASSWORD=\"$DB_PASSWORD\" MYSQL_DATABASE=\"$DB_NAME\"; exec docker-entrypoint.sh \"$@\"", "--"]
CMD ["mysqld"]

EXPOSE 3306