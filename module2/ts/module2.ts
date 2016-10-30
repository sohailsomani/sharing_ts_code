namespace module2 {
    export function module2(parameter:string) {
        module1.module1("Hi");
        return `You passed in ${parameter} to module2`;
    }
}
