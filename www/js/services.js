var app = angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lääkäri. Kari leinonen',
    lastText: 'Terve, Miten Menee',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Lääkäri. Pekka Oajala',
    lastText: 'Ei mitään, hätää.',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Sairaanhoitaja. Janita Holopainen',
    lastText: 'Miten voin auttaa',
    face: 'img/adam.jpg'
  }
    ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

app.factory('menu-details', function() {
 
 var list = [{
    id: 0,
    name: 'Veijo leinonen',
    address: 'Yliopilantie 19, Oulu',
    postcode: '90130',
    profession: 'Opiskelija',
    harrastukset: 'Peli'
  }
    ];

  return {
    all: function() {
      return list;
    },
 get: function(listId) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === parseInt(listId)) {
          return list[i];
        }
      }
      return null;
    }
  };
});

