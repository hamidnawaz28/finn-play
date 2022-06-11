function compare(decending = false) {
  return (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
      decending ? (comparison = -1) : (comparison = 1);
    } else if (nameA < nameB) {
      decending ? (comparison = 1) : (comparison = -1);
    }
    return comparison;
  };
}

const addUnavailableItem = (array, id) => {
  if (array.includes(id)) {
    return array.filter((item) => item !== id);
  }
  return [...array, id];
};

export { compare, addUnavailableItem };
