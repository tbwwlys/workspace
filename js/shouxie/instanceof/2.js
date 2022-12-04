


function myInstanceof (right, left) {
    while(true) {
        // left __proto__原型链一直查找 一直进行下去 __proto__原型对象
        if(left === null) {
            return false;
        }
        if(left.__proto__ === right.prototype) {
            return true;
        }
        left  = left.__proto__
    }
}