import {module1} from "./module1";
import {module2} from "./module2";

@component("test-web-component")
export class TestWebComponent extends polymer.Base {
    ready() {
        this.$.target.textContent = module1("TO MODULE 1") + " " +
            module2("TO MODULE 2");
    }
};

TestWebComponent.register();
