const testPromiseFirst = function (param) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`hello Itamar ${param}`);
        }, 2000);
    })
};

const testPromiseSecond = function (param) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`hello Valery ${param}`);
        }, 3000);
    })
};

const assignedPromise1 = testPromiseFirst.bind(null, 'Itamar');
const assignedPromise2 = testPromiseSecond.bind(null, 'Gadoli');

return Promise.all([assignedPromise1(), assignedPromise2()]).then(console.log)
