define('a', [], function () {
    var vm = avalon.define({
        $id: "a",
        p:[],
        aRoot:'aaaa'
    });

    return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function() {
            $.ajax({
                url:"a.json",
                type:"get ",
                success: function (data) {
                    vm.p = data
                }
            });
        }
    })
});