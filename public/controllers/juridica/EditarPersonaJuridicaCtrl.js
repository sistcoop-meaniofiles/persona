'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('EditarPersonaJuridicaCtrl', function(
    $scope, $state, personaJuridica, SGPersonaJuridica, toastr){

    $scope.view = {
        persona: personaJuridica
    };

});

