# Todo List App

La Todo List App è un'applicazione web full stack che permette agli utenti di gestire un elenco di task da fare. Questa applicazione utilizza [Node.js](https://nodejs.org/) per il back-end, [React](https://reactjs.org/) per il front-end e [MongoDB](https://www.mongodb.com/) come database.

## Funzionalità

- Aggiungere nuove task alla lista
- Visualizzare l'elenco delle task presenti
- Segnare le task come completate o da fare
- Eliminare le task
- Le task completate vengono automaticamente spostate in fondo alla lista

## Tecnologie Utilizzate

- **Front-end:** React con Tailwind CSS per lo styling
- **Back-end:** Node.js con Express.js
- **Database:** MongoDB utilizzato tramite Mongoose
- **Altre librerie:** Axios per le richieste HTTP, React Icons per icone

## Prerequisiti

Prima di iniziare, assicurati di avere installato Node.js e npm (Node Package Manager) sul tuo sistema. Inoltre, avrai bisogno di un'istanza MongoDB attiva. Puoi utilizzare MongoDB Atlas per un'istanza cloud gratuita o eseguire MongoDB localmente sul tuo computer.

## Installazione

Segui questi passaggi per installare e avviare la tua Todo List App:

### Clona il repository

```bash
git clone https://github.com/albertogaia/todo-app-ag.git
cd todo-app-ag
```

### Imposta il back-end
Naviga nella directory del back-end e installa le dipendenze:

```bash
cd backend
npm install
```


### Avvia il server back-end:
Ricorda di creare un db Mongo "mongodb://localhost/todo-app-ag"

```bash
npm start
```

### Imposta il front-end
Apri una nuova finestra del terminale, naviga nella directory del front-end e installa le dipendenze:


```bash
cd ../frontend
npm install
```

### Avvia l'applicazione front-end:


```bash
npm start
```

L'applicazione React dovrebbe ora essere in esecuzione all'indirizzo http://localhost:3000.
