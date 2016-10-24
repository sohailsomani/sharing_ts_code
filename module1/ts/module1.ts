import * as Promise from "bluebird";

export function module1(parameter:string) {
    Promise.resolve(true);
    return `You passed in ${parameter} to module1`;
}
