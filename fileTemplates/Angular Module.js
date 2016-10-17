#set($name = ${NAME})
#set($nameLower = $name.substring(0,1).toLowerCase() + $name.substring(1))
angular
    .module('app')
    .component('$nameLower', {
        templateUrl: 'app/${path_in_app_folder}.html',
        controller: $name
     });

/** @ngInject */
function $name() {

}
