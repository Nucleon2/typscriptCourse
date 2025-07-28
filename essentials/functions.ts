function add(a: number, b: number) {
return a + b
}

function log(message: string) {
    console.log(message)
}

function lodAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage)
    
}

const logMsg = (msg: string) => {
    console.log(msg);
    
}

function performJob (cb: (msg: string) => void) {
    // ... 
    cb("job Done!")
}
performJob(logMsg)

type User = {
    name: string
    age: number
    greet: () => string
}

let user: User = {
name: "Max",
age: 39,
greet(){
    console.log("Hello there");
    return this.name
}}