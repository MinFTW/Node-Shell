const date = (done) => {
  const today = new Date();

  done(today.toDateString());
};

export default date;
