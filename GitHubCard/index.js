/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let myData = {};
axios.get('https://api.github.com/users/gelinas')
  .then(response => {
    console.log(response);
    myData = response;
  })
  .catch(error => console.log(error));

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

const cards = document.querySelector(".cards");

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
axios.get('https://api.github.com/users/gelinas')
  .then(response => {
    console.log(response);
    addCard(response);
  })
  .catch(error => console.log(error));

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['SoosheBot', 'BrandyBecker', 'raaudain', 'alexisjcarr', 'crsullivan'];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => {
    console.log(response);
    addCard(response);
  })
  .catch(error => console.log(error));
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:


*/


function addCard(obj) {
  // definte new elements
  const card = document.createElement('div');
  const avatar = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // set up structure of elements
  cards.appendChild(card);
  card.appendChild(avatar);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // set class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // set attributes
  avatar.src = obj.data.avatar_url;
  link.href = obj.data.html_url;

  // set text content
  name.textContent = obj.data.name;
  username.textContent = obj.data.login;
  location.textContent = `Location: ${obj.data.location}`;
  profile.textContent = `Profile: `
  link.textContent = obj.data.html_url;
  followers.textContent = `Followers: ${obj.data.followers}`;
  following.textContent = `Following: ${obj.data.following}`;
  bio.textContent = `Bio: ${obj.data.bio}`;

  return card;
}

/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
