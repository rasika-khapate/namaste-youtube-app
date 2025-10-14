Cache Logic :


time complexity to search data in array = O(n)
time complexity to search data in object/map = O(1)

[ i, ip, iph, iphon, iphone]

{
    ip:
    iph:
    ipho:
    iphon:
    iphone: 
}

O(1) > O(n)


# Video 1:

1.Drawing the apps layout by divided into different components and adding tailwind css
2.Displaying video cards in video container by using Youtube video api
3.Building a toggle feature with redux store and disptaching actions and reading data whereever needed
4.Routing the app with react-router-dom 
5.Building a watchPage and getting the data of the video clicked based on the searchParams
6.Making a API call with the videoId we got by using searchParams to get that particular clicked video's details ex: Title, channel title, views etc


# Video 2 : 

1.Building search feature with youtube's api 
2.Optimizing the search with debouncing
3.Understanding what kind of data format to store in redux based on time complexity and DSA
4.Storing and retreving the cached results from searchQuery in and from redux store
5.Understanding the data structure of comments
6.Understanding how to creat a single comment component , then map over it to display a list of commentsList by calling the commentsList recursively and rendering it.

# Video 3:

1.Buidling live Chat feature
2.Dealing with Live chat challenges
   a. Data Layer : Getting the live data api
   b. UI Layer : Update the data in an efficient way
3.Two Ways to deal with this challenge
      a. Web Sockets : Handshake between UI layer/ one server and Server wherein the data flow is bidirectional with no regural intervals , initial connection takes a bit of a time 
      b. API polling : The data flow is unidirectional - From server to UI with regular interviews, the UI will keep polling data from server after some seconds
4.Understanding how UI layer is handled to improve the UX: Deleting the number of chats after a certain number of chats from above to keep the page from freezing and bloating, we are achieving this with the help of redux.
5.Creating LiveChat for displaying chat msgs and ChatMessages for list of chat msgs
6.Getting random names and sentences and setting up in helper.jsx
7.Applying appropriate css to make it look like YT live chat


  