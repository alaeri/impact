'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:DedommagementCtrl
 * @description
 * # DedommagementCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('DedommagementCtrl', function($scope, $state) {

    $scope.subtitle = 'Dédommagement';

    var initialDetail = ($scope.sectionModel.dedommagement) ? $scope.sectionModel.dedommagement.detail : 0;
    var initialRadioModel = ($scope.sectionModel.dedommagement) ? $scope.sectionModel.dedommagement.value : '';

    $scope.question = {
      answers: [
        {
          label: 'Vous êtes dédommagé(e) pour l’aide apportée à votre proche',
          value: true,
          showDetail: true,
          detail: initialDetail,
          placeholder: 'Montant mensuel'
        },
        {
          label: 'Vous n\'êtes pas dédommagé(e) pour l’aide apportée à votre proche',
          value: false
        }
      ],
      radioModel: initialRadioModel,
      setAnswer: function(answer) {
        $scope.sectionModel.dedommagement = answer;
        $scope.showDetail(answer);
      }
    };

    $scope.isNextStepDisabled = function() {
      var model = $scope.sectionModel.dedommagement;
      if (angular.isUndefined(model)) {
        return true;
      }

      if (model.showDetail && model.detail <= 0) {
        return true;
      }
      
      return false;
    };

    $scope.showDetail = function(value) {
      if (value.showDetail && !$state.includes('**.autre')) {
        $state.go('.autre');
      }
    };

    if (angular.isDefined($scope.sectionModel.dedommagement)) {
      $scope.question.setAnswer($scope.sectionModel.dedommagement);
    }
    
    $scope.nextStep = function() {
      if ($state.includes('**.autre')) {
        $state.go('^.^.accompagnement');
      } else {
        $state.go('^.accompagnement');
      }
    };
  });