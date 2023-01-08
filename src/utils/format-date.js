var format = require('./format-date');
export const formatDate = (time) => {
  return format("dd.mm.yyyy", new Date(time));
};