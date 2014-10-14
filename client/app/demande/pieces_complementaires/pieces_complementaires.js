'use strict';

angular.module('impactApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('liste_demandes.demande.complementaire', {
        url: '/complementaire',
        templateUrl: 'app/demande/pieces_complementaires/pieces_complementaires.html',
        controller: 'PiecesComplementairesCtrl',
        authenticate: true
      });
  });
