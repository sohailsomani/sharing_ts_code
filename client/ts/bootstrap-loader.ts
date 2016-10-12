/// <reference path="../typings/modules/requirejs/index.d.ts" />

var requirejs = (window as any).requirejs;

requirejs.config({
    baseUrl: 'js',
});

requirejs(['./client']);
