const API_URL = "https://trefle.io/api/v1/plants/search";
const fetch = require('node-fetch');

export const getPlantDetails = async (plantName) => {
//   console.log (`${API_URL}?q=${plantName}&token=t9Y-9aYgpPD0lw4XplEe018SkLf86F7kr-fqBz7lD7Q`)
  return await fetch(`${API_URL}?q=${plantName}&limit=3&token=t9Y-9aYgpPD0lw4XplEe018SkLf86F7kr-fqBz7lD7Q`, { mode: 'no-cors', Authorization : 'bearer', 'Access-Control-Allow-Origin': '*'})
            .then(res => res.json())
            // .then(jsonResponse => jsonResponse)
            .catch(e => {
                console.log(e);
                return e;
              });
}

// https://trefle.io/api/v1/species/search?token=t9Y-9aYgpPD0lw4XplEe018SkLf86F7kr-fqBz7lD7Q&q=Nephrolepis&limit=3