'use strict';

angular.module('impactApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('demande.obligatoire', {
        url: '/pieces_obligatoires',
        templateUrl: 'app/demande/pieces_obligatoires/pieces_obligatoires.html',
        controller: 'PiecesObligatoiresCtrl',
        authenticate: true
      });
  });
