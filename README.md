# Projet CRM
## Guide d'installation

### Installation des outils nécessaires

Afin d'utiliser l'application les deux outils suivants devront être installés, assurez vous de les avoir téléchargé avant de continuer l'installation :

- [Node.JS](https://nodejs.org/en/download/)
- (Optionnel)[Git](https://git-scm.com/downloads)

Cloner ou téléchargez le répertoire .zip [GitHub](https://github.com/baptistedesarnauts81/crm) en local.

### Installation des dépendances

Le projet dépend de nombreux packages **npm** dont la liste des versions est disponible dans les deux fichiers :

- crm/client/package-lock.json`
- crm/server/package-lock.json`

Afin d'installer les packages nécessaires :

- ouvrir un invite de commande et se placer au niveau du répertoire `crm/client` et exécuter la ligne de commande :

```
npm install
```

Réaliser la même opération dans le répertoire `crm/server`.

### Création de la base de données

Dans le repertoire `crm/server/database`, éditez le fichier `database_connection.js` avec le contenu suivant :

```
const databaseParams =
  {
    password : "votre_mot_de_passe",
    host : "localhost",
    user : "root"
  };

module.exports = {
  databaseParams
};
```

Prenez soin de renseigner le mot de passe de votre instance mysql en lieu et place de **votre_mot_de_passe**.

/!\ /!\ /!\ Pensez à lancer votre serveur MySQL (cf BE1)
/!\ /!\ /!\ Si votre instance MySQL n'a pas été créée avec les paramètres **host** et **user** localhost et root, prenez soin de les remplacer par leurs valeurs.

Ouvrez un invite de commande, placez-vous au niveau du répertoire `crm/server/database` grâce à la commande :

```
cd chemin_d'accès_jusqu'à_crm/server/
```

et exécutez successivement les lignes de commande :

```
node create_database.js
```

puis :

```
node feed_database.js
```

Une base de données MySQL portant le nom **crm_db** est créée et contient les tables, les relations, et quelques données nécessaires à la manipulation de l'application.

---

## Lancement local de l'application

Afin de lancer en local la partie serveur de l'application, ouvrez un invite de commande, placez-vous au niveau du répertoire `crm/server` et exécutez la ligne de commande :

```
npm start
```

Le serveur NodeJS se lance sur le port 3001.

Afin de lancer en local la partie front-end de l'application, ouvrez un invite de commande, placez-vous au niveau du répertoire `crm/client` et exécutez la ligne de commande :

```
npm start
```

Si cela ne se fait pas de manière automatique, ouvrez ensuite un navigateur internet, de préférences **Google Chrome**, sur le port `http://localhost:3000/`. L'application est prête à l'utilisation.

