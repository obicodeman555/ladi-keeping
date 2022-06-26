/*
    @arg url
    
*/

export default function getData(url) {
  //send request
  return fetch(url).then((resp) => {
    //check response for errors
    if (!resp.ok) {
      throw Error("There was a probem fetching data.");
    }
    //convert response to javascript object
    return resp.json();
  });
}
