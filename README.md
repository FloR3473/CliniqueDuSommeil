# Clinique du Sommeil - Docker

Installer docker https://docs.docker.com/get-started/
Créer un compte ou relier son github.

Docker est un outil qui permet d'empaqueter une application et tout ce dont elle a besoin (système, dépendances, code) dans une boîte isolée appelée conteneur, pour qu'elle fonctionne partout de la même façon.
Les conteneurs sont légers et contiennent tout le necessaire à l'execution de l'application.

# Construction des images
Le Dockerfile est un fichier texte qui liste, étape par étape, les instructions pour construire sa propre image. 

Il contient tout ce qu’il faut pour que l'application tourne correctement :
- Installation des dépendances
- copie du code
- configuration de l’environnement
- commande de lancement de l’application

Voici les instructions les plus courantes :
- ```FROM``` : Spécifie l’image de base pour une nouvelle étape de construction.
- ```RUN``` : Exécute des commandes pendant le processus de création de l’image.
- ```COPY``` ou ```ADD``` : Copie les fichiers du contexte de construction dans l’image.
- ```CMD``` ou ```ENTRYPOINT``` : Définit la commande qui s’exécute au démarrage du conteneur.
- ```ENV``` : Définit les variables d’environnement qui seront disponibles pendant la construction et lors de l’exécution.
- ```WORKDIR``` : Définit le répertoire de travail pour les instructions RUN, CMD, ENTRYPOINT, COPY et ADD suivantes.

Une fois le Dockerfile créé, on construit l'image via la commande suivante :
```bash
docker build -t mon-app
```
```-t mon-app``` : donne un nom à l'image

On peut la vérifier via la commande : ```docker images```. 

# Lancement des conteneurs
Une fois les dockerfiles bien construits et les images créées, un fichier docker-compose.yml doit être élaboré.
Docker Compose permet de démarrer plusieurs conteneurs en même temps avec une simple commande, au lieu de taper plein de commandes complexes.

Les lignes essentielles du fichier docker-compose sont les suivantes :
- ```version: '3.8'``` Indique la version de la syntaxe
- ```services:```	Démarre la liste des conteneurs à lancer
- ```build: .``` ou ```image:``` Indique quelle image utiliser (soit construire, soit télécharger)
- ```ports:``` Expose les ports pour accéder à ton app depuis ta machine
- ```environment:``` Passe les variables d'environnement (clés API, URLs, etc.)
- ```depends_on:``` Définit l'ordre de démarrage (la base de données avant l'app)
- ```volumes:``` Assure la persistance des données pour ne pas les perdre à chaque redémarrage

Une fois le fichier docker-compose réalisé, celui-ci peut être lancé via la commande : 
```bash
docker compose up -d
```

Afin que le projet soit accessible de partout, les images doivent être poussées sur DockerHub. Ainsi, chaque utilisateur pourra lancer le projet avec seulement le fichier docker-compose.yml et le fichier .env personnalisé.

Pour lancer notre projet :

Remplir le .env avec votre mot de passe.
Puis le placer dans le même dossier que le fichier docker-compose.yml

Taper la commande suivante dans le terminal à la racine du dossier :

```bash
docker compose -f docker-compose.yml up -d
```
Le projet est lancé.

# Arret de l'application
Pour arrêter l'application, taper la commande suivante dans le terminal à la racine du dossier :

```bash
docker compose -f docker-compose.yml down -v
```

# Ports utilises
Les ports utilisés sont les suivants :
- 4200:8080
- 3307:3306
- 9000:3000

# Services disponibles
Les services disponibles pour le projet sont les suivants :
- frontend (permet d'afficher l'interface)
- backend (permet l'accès à l'API et au script python)
- db (permet l'initialisation de la base de donnees et son accès)