const getWords = async () => {
  return fetch("http://localhost:5000/ahorcado/")
    .then(response => response.json())
    .then(data => (data, { data }))
    .catch(function(error) {
      console.log("Request failed", error);
    });
};

export default { getWords };
