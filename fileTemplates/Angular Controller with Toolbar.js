#set($name = ${NAME})
#set($nameLower = $name.substring(0,1).toLowerCase() + $name.substring(1))
angular
    .module('app')
    .controller('$nameLower', $name);

/** @ngInject */
function $name(${DS}scope, ${DS}state, setToolbarService) {
    setToolbarService('', false, false, '');
}
