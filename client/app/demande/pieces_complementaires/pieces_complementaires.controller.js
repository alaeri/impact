'use strict';

angular.module('impactApp')
  .controller('PiecesComplementairesCtrl', function ($scope, RequestService) {
    $scope.currentStep = $scope.steps[3];

    $scope.$on('documentStepComplete', function () {
      $scope.complete = true;
    });

    $scope.validateStep = function() {
      RequestService.saveStepState($scope.currentRequest, $scope.currentStep, 'a_valider', function() {
        $scope.$parent.$broadcast('refreshFormStepSection');
      });
    };

    $scope.currentFormStep = _.find($scope.currentRequest.steps, {'name': $scope.currentStep.id});
  });
