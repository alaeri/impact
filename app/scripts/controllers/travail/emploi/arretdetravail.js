'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:ArretDeTravailCtrl
 * @description
 * # ArretDeTravailCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('ArretDeTravailCtrl', function($scope, $state) {

    $scope.question = {
      'answers': [
        {
          'label': 'Vous êtes actuellement en arrêt de travail',
          'labelRep': 'Il est actuellement en arrêt de travail',
          'value': true
        },
        {
          'label': 'Vous n\'êtes pas en arrêt de travail',
          'labelRep': 'Il n\'êtes pas en arrêt de travail',
          'value': false
        }
      ],
      radioModel: ($scope.subSectionModel.arretDeTravail) ? $scope.subSectionModel.arretDeTravail.value : '',
      setAnswer: function(answer) {
        $scope.subSectionModel.arretDeTravail = answer;
      }
    };

    $scope.isNextStepDisabled = function() {
      return angular.isUndefined($scope.subSectionModel.arretDeTravail);
    };

    $scope.nextStep = function() {
      if ($scope.subSectionModel.arretDeTravail.value === false) {
        $scope.goToNextSection($scope.section);
      } else {
        $state.go('^.indemnite_journaliere');
      }
    };
  });
  