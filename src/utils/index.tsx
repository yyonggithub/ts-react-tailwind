export const debounce = (fn: Function, wait = 200) => {
  let timer: any = undefined;
  return (...rest: any) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn(...rest);
    }, wait);
  };
};
