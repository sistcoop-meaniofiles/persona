'use strict';

/* jshint -W098 */
angular.module('mean.persona').controller('PersonaNaturalDatosAdicionalesCtrl', function(
    $scope, personaNatural, toastr){

    $scope.view = {
        persona: personaNatural
    };

    $scope.submit = function(){
        if ($scope.form.$valid) {
            $scope.view.persona.$save().then(
                function(response){
                    toastr.success('Persona actualizada', 'Success');
                    $scope.view.personaDB = angular.copy($scope.view.persona);
                },
                function error(err){
                    toastr.error(err.data.message, 'Error');
                }
            );
        }
    };

});
       