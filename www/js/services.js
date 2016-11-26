angular.module('starter.services', [])

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
