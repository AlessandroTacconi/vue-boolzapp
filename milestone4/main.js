// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

'use strict';

const { createApp } = Vue;
createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
            },
            {
              date: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
            },
            {
              date: '16:15',
              message: 'Tutto fatto!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '16:30',
              message: 'Ciao come stai?',
              status: 'sent',
            },
            {
              date: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
            },
            {
              date: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Samuele',
          avatar: 'img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received',
            },
            {
              date: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
            },
            {
              date: '16:15',
              message: 'Ah scusa!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: 'img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
            },
            {
              date: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
            },
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: 'img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
            },
            {
              date: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received',
            },
          ],
        },
        {
          name: 'Claudia',
          avatar: 'img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
            },
            {
              date: '15:50',
              message: 'Non ancora',
              status: 'received',
            },
            {
              date: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
            },
          ],
        },
        {
          name: 'Federico',
          avatar: 'img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
            },
            {
              date: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
            },
          ],
        },
        {
          name: 'Davide',
          avatar: 'img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
            },
            {
              date: '15:50',
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent',
            },
            {
              date: '15:51',
              message: 'OK!!',
              status: 'received',
            },
          ],
        },
      ],
      indiceContacts: 0,
      messaggioInviato: '',
      cercaAmici: '',
    };
  },
  computed: {
    nuovoCiclo() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.cercaAmici.toLowerCase())
      );
    },
  },
  methods: {
    mostraChatAmico(index) {
      this.indiceContacts = index;
    },

    cambiaColore(index) {
      this.indiceContacts = index;
    },

    inviaMessaggio() {
      const DateTime = luxon.DateTime;
      if (this.messaggioInviato.trim() !== '') {
        this.contacts[this.indiceContacts].messages.push({
          date: DateTime.now().toLocaleString(DateTime.TIME_SIMPLE),
          message: this.messaggioInviato,
          status: 'sent',
        });
        this.messaggioInviato = '';
        setTimeout(() => {
          this.contacts[this.indiceContacts].messages.push({
            date: DateTime.now().toLocaleString(DateTime.TIME_SIMPLE),
            message: 'Ok',
            status: 'received',
          });
        }, 1000);
      }
    },
  },
}).mount('#app');
