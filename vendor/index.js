
const _initStore = () => {
  const _settings_store_ = {};

  return (base, common = []) => {
    _settings_store_[base] = common;

    define(`settings/${base}`, [], () => _settings_store_[base]);

    return (value) => {
      _settings_store_[base].push(value);
    }
  }
}

const addStore = _initStore();
