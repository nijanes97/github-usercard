/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/nijanes97")
  .then(response =>{
    const newGit = gitCardCreator(response);
    console.log(response);
    cardsPoint.appendChild(newGit);
  })
  .catch(error => {
    console.log("The Data was not returned", error);
  });
const cardsPoint = document.querySelector(".cards");
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(function(element){
  axios
    .get("https://api.github.com/users/" + element)
    .then(response => {
      const newGit = gitCardCreator(response);
      cardsPoint.appendChild(newGit);
    })
    .catch(error => {
      console.log("The Data was not returned", error);
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function gitCardCreator(gitUrl){
  const card = document.createElement('div'),
  userImg = document.createElement('img'),
  cardInfo = document.createElement('div'),
  userName = document.createElement('h3'),
  userUName = document.createElement('p'),
  userLocation = document.createElement('p'),
  userProfile = document.createElement('p'),
  githubPage = document.createElement('a'),
  userFollowers = document.createElement('p'),
  userFollowing = document.createElement('p'),
  userBio = document.createElement('p');

  userImg.src = gitUrl.data.avatar_url;
  userName.textContent = gitUrl.data.name;
  userUName.textContent = gitUrl.data.login;
  userLocation.textContent = 'Location: ' + gitUrl.data.location;
  userProfile.textContent = 'Profile: ';
  githubPage.href = gitUrl.data.html_url;
  githubPage.textContent = gitUrl.data.html_url;
  userFollowers.textContent = 'Followers: ' + gitUrl.data.followers;
  userFollowing.textContent = 'Following: ' + gitUrl.data.following;
  userBio.textContent = 'Bio: '+ gitUrl.data.bio;

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  userUName.classList.add('username');

  userProfile.appendChild(githubPage);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userUName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  card.appendChild(userImg);
  card.appendChild(cardInfo);

  return card;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
