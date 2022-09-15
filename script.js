function createCalculator(value) {
  let counts = value;

  return {
      add: (val) => counts+=val,
      sub: (val) => counts-=val,
      div: (val) => counts=counts/val,
      mult: (val) => counts=counts*val,
      set: (val) => (counts = val),
  };
}