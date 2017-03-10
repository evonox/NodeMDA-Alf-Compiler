
class A {
    do() {
        console.log("A");
    }
}

let mixin = Base => class extends Base {
    do() {
        console.log("mixin");
    }
}

class B extends mixin(A) {

}

class C extends mixin(A) {
    do() {
        console.log("C");
    }
}

new A().do();
new B().do();
new C().do();