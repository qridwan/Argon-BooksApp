export const handleChange = (e, func, preValue) => {
  func({
    ...preValue,
    [e.target.name]: e.target.value,
  });
};