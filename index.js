
const getAllEvents= async()=> {
    const response= await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events');
    const responseJson= await response.json();
    const allEvents = responseJson.results;
    return allEvents;
} 
const renderAllEvents= async() => {
try {
const eventsList = await getAllEvents();
const eventLI = document.createElement ('li');
 const eventArray=eventList.map(event=> `
<h3>${event.name}</h3>
<p>Date: ${event.date}</p>
<p>Time: ${event.time}</p>
<p>Location: ${event.location}</p>
<p>Description: ${event.description}</p>
 `);
eventLI.innerHTML= eventArray.join('');

 const ol = document.querySelector(`ol`);

 ol.append(eventsLI);
} catch(error) {
    console.error (`There was an error fetching events`);
}
}
renderAllEvents();
