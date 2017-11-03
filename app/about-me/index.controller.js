(function () {
    'use strict';

    angular
        .module('app')
        .controller('About-me.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.user = null;
        vm.btn = 'I Am Button';
        vm.showDarkTheme = true;
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }
    }

})();