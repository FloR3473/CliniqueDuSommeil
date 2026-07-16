# syntax=docker/dockerfile:1

# ======================
# Étape 1 : Build Angular
# ======================
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

RUN ng build --configuration=production

# ======================
# Étape 2 : Nginx
# ======================
FROM nginx:alpine

# À adapter selon le nom de ton projet
COPY --from=builder /app/dist/clinique_plus_interface_utilisateur/browser/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]