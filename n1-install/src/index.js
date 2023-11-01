
Array.of([1,2,3]);

const p = new Promise(resolve => {
    resolve();
});

async function f() {
}

// @babel/plugin-proposal-function-bind
function a() {
    console.log(this);
}
let obj = {name: 'bmd'};
obj::a(); // vscode 报错

// babel-plugin-transform-remove-console
console.log('hello world');

// @babel/plugin-proposal-optional-chaining
let b = {a: {b: {c: 123}}};
let c = b?.a?.b?.c;


// @babel/plugin-proposal-do-expressions
let d = do {
    if (x > 10) {
        'big'
    } else {
        'small';
    }
};

// @babel/plugin-transform-runtime
// 提供一些公共特性, 避免公共特性在不同文件中重复导入
class A {}