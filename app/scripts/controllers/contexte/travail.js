'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:ConditionTravailCtrl
 * @description
 * # ConditionTravailCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('ConditionTravailCtrl', function($scope, $state) {
    
    $scope.title = 'Situation professionnelle';

    $scope.question = {
      'answers': [
        {
          'label': 'Vous avez un emploi',
          'labelRep': 'Il a un emploi',
          'value': true},
        {
          'label': 'Vous êtes actuellement sans emploi',
          'labelRep': 'Il est actuellement sans emploi',
          'value': false
        }
      ],
      radioModel: ($scope.sectionModel.travail) ? $scope.sectionModel.travail.value : '',
      setAnswer: function(answer) {
        $scope.sectionModel.travail = answer;
      }
    };

    $scope.isNextStepDisabled = function() {
      return angular.isUndefined($scope.sectionModel.travail);
    };

    $scope.nextStep = function() {
      $state.go('^.aidant');
    };
  });