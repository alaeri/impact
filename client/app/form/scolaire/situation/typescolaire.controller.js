'use strict';

angular.module('impactApp')
  .controller('TypeScolaireCtrl', function($scope, $state, QuestionService) {

    $scope.question = QuestionService.get('scolaire', 'vieScolaireType', $scope.formAnswers);

    $scope.nextStep = function() {
      if ($scope.sectionModel[$scope.question.model] !== 'domicile') {
        $state.go('^.etablissement');
      } else {
        $scope.sections[1].isEnabled = true;
        $state.go('^.^.vos_attentes');
      }
    };
  });
