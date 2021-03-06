'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:AttenteStructureAidantCtrl
 * @description
 * # AttenteStructureAidantCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('AttenteStructureAidantCtrl', function ($scope, $state, QuestionService) {

    $scope.question = QuestionService.get('aidant', 'structure', $scope.formAnswers);

    if (angular.isUndefined($scope.sectionModel.structure)) {
      $scope.sectionModel.structure = {
        valeur: false,
        structures: [
          {'name': '', 'contact': false}
        ]
      };
    }

    $scope.model = $scope.sectionModel.structure;

    $scope.addStructure = function() {
      $scope.model.structures.push(
        {'name': '', 'contact': false}
      );
    };

    $scope.nextStep = function() {
      $state.go('^.autres_renseignements');
    };
  });
