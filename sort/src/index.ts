class Sorter {
  constructor(public collection: number[]) {}
  swap(arr: number[], n1: number, n2: number): void {
    let tmp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = tmp;
  }
  gnomeSort(): void {
    for (let i = 0, arr = this.collection; i <= arr.length; ) {
      if (i === 0) i++;
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
  }
}

const sorter = new Sorter([2, 1, 10, 2, 4, 90, 54, 32, 20, 77, 12]);
sorter.gnomeSort();
console.log(sorter.collection);
