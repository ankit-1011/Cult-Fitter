export const exerciseOptions = {
  method: 'GET',

  headers: {
    'x-rapidapi-key': 'd0a284415dmsheb306b9e7ad4ce9p1c369fjsn5f81a774c680',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
