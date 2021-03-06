'use strict';

angular.module('impactApp')
  .controller('SocialCtrl', function($scope, $state, QuestionService) {

    if (angular.isUndefined($scope.sectionModel.besoinsSocial)) {
      $scope.sectionModel.besoinsSocial = {};
    }

    $scope.question = QuestionService.get('vieQuotidienne', 'besoinsSocial', $scope.formAnswers);

    $scope.nextStep = function() {
      $state.go('^.lieu_de_vie');
    };
  });
