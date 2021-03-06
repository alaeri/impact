'use strict';

angular.module('impactApp')
  .controller('FileStateCtrl', function($scope, $state, currentStepName, nextStepName, requestSteps, RequestService) {

    $scope.requestStep = _.find($scope.request.steps, {'name': currentStepName});
    $scope.step = _.find(requestSteps, {'id': $scope.requestStep.name});

    $scope.files = $scope.requestStep.files;

    var checkIfComplete = function() {
      return !_.some($scope.files, {'state': 'telecharge'});
    };
    $scope.isComplete = $scope.requestStep.state === 'a_valider' && checkIfComplete();

    var saveFileState = function(file, state) {
      $scope.getSaveFileStateRequest($scope.requestStep, file, state).success(function() {
        file.state = state;
      }).finally(function() {
        $scope.isComplete = checkIfComplete();
      });
    };

    $scope.saveValid = function(file) {
      saveFileState(file, 'valide');
    };

    $scope.saveError = function(file) {
      saveFileState(file, 'erreur');
    };

    $scope.saveStep = function() {
      if (_.some($scope.files, {'state': 'erreur'})) {
        RequestService.saveStepState($scope.request, $scope.step, 'erreur');
      } else {
        RequestService.saveStepState($scope.request, $scope.step, 'valide', function() {
          RequestService.saveNewStep($scope.request, nextStepName, 'en_cours');
        });
      }
    };
  });
