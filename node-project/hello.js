var Man = /** @class */ (function () {
    function Man() {
    }
    Man.prototype.speak = function () {
        console.log('In male voice, I am ', this.name);
    };
    return Man;
}());
var Woman = /** @class */ (function () {
    function Woman() {
    }
    Woman.prototype.speak = function () {
        console.log('In female voice, I am ', this.name);
    };
    return Woman;
}());
var abishek = new Man();
abishek.name = 'Abishek';
abishek.speak();
