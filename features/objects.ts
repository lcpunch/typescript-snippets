(function() {
  const obj = {
    name: 'whatever',
    type: 'nice type',
    coords: {
      lat: 0,
      lng: 15
    },
    setName(name: string): void {
      this.name = name;
    }
  };

  const { name }: { name: string } = obj;
  const {
    coords: { lat, lng }
  }: { coords: { lat: number; lng: number } } = obj;
})();

const pepsi = ['brown', true, 30];

const a: (b: number) => number = c => {
  return c;
};

a(3);
