require.config({
    baseUrl: './js/',
    paths:{    //相对这个js文件的路径
        mmState: 'tool/mmState',
        mmPromise: 'tool/mmPromise',
        mmRouter: 'tool/mmRouter',
        mmHistory : 'tool/mmHistory'
    },
    shim:{
    }
});

require(["mmState"], function() {
    avalon.config({debug:false});
    var vm = avalon.define({
        $id : 'root',
        userInfo:{name:"小明 "}
    });
    avalon.state("home", {
        controller: "root",
        url: "/",
        views: {
            "": { 
                templateUrl: 'home.html'
            }
        }
    }).state("a", {
        controller: "root",
        url: "/a",
        views: {
            "": {
                templateUrl: 'a.html',
                controllerUrl: ["a.js"]
            }
        }
    }).state("a.aa", {
        controller: "root",
        url: "/aa",
        views: {
            "": {
                templateUrl: 'aa.html',
                controllerUrl: ["aa.js"]
            }
        }
    }).state("a.ab", {
        controller: "root",
        url: "/ab",
        views: {
            "": {
                templateUrl: 'ab.html',
                controllerUrl: ["ab.js"]
            }
        }
    }).state("b", {
        controller: "root",
        url: "/b",
        views: {
            "": {
                templateUrl: 'b.html'
            }
        }
    }); //avalon.state结束

    avalon.history.start();
    avalon.scan()
});