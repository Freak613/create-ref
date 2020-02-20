const createRef = init => {
  let value = init;
  const get = () => value;
  const set = next => {
    const setter = typeof next === "function" ? next : () => next;
    value = setter(value);
  };
  return {
    get,
    set
  };
};

export default createRef;
