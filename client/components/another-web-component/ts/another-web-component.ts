/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts" />

import {TestWebComponent} from "./test-web-component";

@component("another-web-component")
class AnotherWebComponent extends polymer.Base {
    ready() {
        let child:TestWebComponent = this.querySelector("test-web-component") as TestWebComponent;
    }
};

AnotherWebComponent.register();
