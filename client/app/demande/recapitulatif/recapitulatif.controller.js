'use strict';

angular.module('impactApp')
  .controller('RecapitulatifCtrl', function ($scope, DroitService) {
    $scope.currentStep = $scope.steps[0];

    if ($scope.currentRequest) {
      $scope.prestations = DroitService.compute($scope.currentRequest.formAnswers);
    }
  });
