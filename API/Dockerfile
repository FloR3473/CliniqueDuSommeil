FROM node:24-alpine

WORKDIR /app


RUN apk add --no-cache python3 py3-pip

COPY ./package*.json ./
RUN npm ci --omit=dev


COPY ./PYTHON/requirements.txt ./PYTHON/requirements.txt
RUN python3 -m venv /opt/venv && /opt/venv/bin/pip install --no-cache-dir -r ./PYTHON/requirements.txt

COPY ./ ./

ENV PATH="/opt/venv/bin:$PATH"

EXPOSE 3000

CMD ["node", "index.js"]