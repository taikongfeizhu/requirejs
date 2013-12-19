requirejs.config({
    baseUrl: './js', //默认库寻址地址

    //路径配置
    paths: {
        /*库依赖*/
        jquery: "lib/jquery-1.10.2.min",
        domReady: "lib/domReady",
        bootstrap: "lib/bootstrap.min",
        extBase: "lib/ext-base",
        extAll: 'lib/ext-all',
        underscore: 'lib/underscore',
        modernizr: "lib/modernizr.min",
        jqueryAlpha: 'lib/jquery.alpha',
        jqueryBeta: 'lib/jquery.beta'

    },
    shim: {
        'underscore': {
            exports: "_"
        },

        'domReady': {
            exports: "Doc"
        },

        'modernizr': {
            exports: "Mod"
        },

        'extAll': {
            deps: ['extBase'],
            exports: 'Ext'
        },
        "jqueryAlpha":["jquery"],
        "jqueryBeta":["jquery"],
        'bootstrap': ["jquery"]
    }
});

requirejs(["app/demo2"]);