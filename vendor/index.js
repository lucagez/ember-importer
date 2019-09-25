
const _initStore = () => {
  const store = {};

  return (base, common = []) => {
    store[base] = common;

    define(`settings/${base}`, [], () => store[base]);

    return (value) => {
      store[base].push(value);
    }
  }
}

const addStore = _initStore();
