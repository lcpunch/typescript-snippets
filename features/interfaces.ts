interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  sugar: 40,
  summary(): string {
    return `Sugar: ${this.sugar}`;
  }
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(drink);
printSummary(oldCivic);

interface Cup {
  volume: number;
  height: number;
}

const coffeeCup = {
  volume: 300,
  height: 20
};
