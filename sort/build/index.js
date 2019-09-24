"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.swap = function (arr, n1, n2) {
        var tmp = arr[n1];
        arr[n1] = arr[n2];
        arr[n2] = tmp;
    };
    Sorter.prototype.gnomeSort = function () {
        for (var i = 0, arr = this.collection; i <= arr.length;) {
            if (i === 0)
                i++;
            if (arr[i] >= arr[i - 1]) {
                i++;
            }
            if (arr[i] < arr[i - 1]) {
                this.swap(arr, i, i - 1);
                i--;
            }
            if (i + 1 === arr.length) {
                break;
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([2, 1, 10, 2, 4, 90, 54, 32, 20, 77, 12]);
sorter.gnomeSort();
console.log(sorter.collection);
