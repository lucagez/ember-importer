const _initCommon = () => {
  const store = {};

  define('settings/common', [], () => store);

  return [
    (path, value) => store[path] = value,
    (path) => store[path],
  ];
};

const [addCommon, getCommon] = _initCommon();
