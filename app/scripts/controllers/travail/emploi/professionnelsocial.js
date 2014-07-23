'use strict';

/**
 * @ngdoc function
 * @name impactApp.controller:ProfessionnelSocialCtrl
 * @description
 * # ProfessionnelSocialCtrl
 * Controller of the impactApp
 */
angular.module('impactApp')
  .controller('ProfessionnelSocialCtrl', function($scope, $state) {

    var initialDetail = ($scope.subSectionModel.profesionnelSocial) ? $scope.subSectionModel.profesionnelSocial.detail : '';
    var initialRadioModel = ($scope.subSectionModel.profesionnelSocial) ? $scope.subSectionModel.profesionnelSocial.value : '';

    $scope.question = {
      answers: [
        {
          label: 'Vous n\'avez pas rencontré de professionnel du service social de la CARSA',
          labelRep: 'Il n\'a pas rencontré de professionnel du service social de la CARSA',
          value: false
        },
        {
          label: 'Vous avez rencontré un professionnel du service social de la CARSA',
          labelRep: 'Il a rencontré un professionnel du service social de la CARSA',
          value: true,
          showDetail: true,
          detail: initialDetail,
          detailLabel: 'A quelle date ?'
        }
      ],
      radioModel: initialRadioModel,
      setAnswer: function(answer) {
        $scope.subSectionModel.profesionnelSocial = answer;
        $scope.showDetail(answer);
      }
    };

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

    $scope.dateOptions = {
      startingDay: 1
    };

    $scope.isNextStepDisabled = function() {
      var model = $scope.subSectionModel.profesionnelSocial;
      if (angular.isUndefined(model)) {
        return true;
      }

      if (model.showDetail && model.detail === '') {
        return true;
      }
      
      return false;
    };

    $scope.showDetail = function(value) {
      if (value.showDetail && !$state.includes('**.autre')) {
        $state.go('.autre');
      }
    };

    if (angular.isDefined($scope.subSectionModel.profesionnelSocial)) {
      $scope.question.setAnswer($scope.subSectionModel.profesionnelSocial);
    }
    
    $scope.nextStep = function() {
      if ($state.includes('**.autre')) {
        $state.go('^.^.medecin_travail');
      } else {
        $state.go('^.medecin_travail');
      }
    };
  });