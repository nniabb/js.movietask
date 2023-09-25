const sitcoms = [
    {
      name: "Friends",
      releaseYear: 1994,
      rating: 8.5,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Office",
      releaseYear: 2005,
      rating: 8.9,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Parks and Recreation",
      releaseYear: 2009,
      rating: 8.6,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Brooklyn Nine-Nine",
      releaseYear: 2013,
      rating: 8.4,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "How I Met Your Mother",
      releaseYear: 2005,
      rating: 8.3,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Big Bang Theory",
      releaseYear: 2007,
      rating: 8.1,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Modern Family",
      releaseYear: 2009,
      rating: 8.4,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Simpsons",
      releaseYear: 1989,
      rating: 8.6,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Seinfeld",
      releaseYear: 1989,
      rating: 8.8,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The IT Crowd",
      releaseYear: 2006,
      rating: 8.5,
      url: "https://netflix.com/sitcom",
    },
  ];
  
  const table = document.querySelector('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody)
  const sortBtn = document.getElementById('sort');
  
  table.style.border = "1px solid blue"
  table.style.borderCollapse = "collapse"


  function link (sitcoms){
    const linkBtn = document.createElement('a');
    linkBtn.href = objects.url;
    linkBtn.innerText = "Movie Link";
    return linkBtn;
  }

 function createTable() {
 
  for(objects of sitcoms){
  const listRow = document.createElement('tr')
  const objName = document.createElement('td')
  objName.textContent = objects.name
  const objRelease = document.createElement('td')
  objRelease.textContent = objects.releaseYear
  const objRating = document.createElement('td')
  objRating.textContent = objects.rating
  const objUrl = document.createElement('td')
  const objRem = document.createElement('td')
  const reBtn = document.createElement('button')
  reBtn.textContent = 'remove movie';

  tbody.appendChild(listRow)
  listRow.appendChild(objName)
  listRow.appendChild(objRelease)
  listRow.appendChild(objRating)
  listRow.appendChild(objUrl)
  listRow.appendChild(objRem)
  listRow.appendChild(reBtn)
  objUrl.appendChild(link(sitcoms))
  
  listRow.style.borderBottom = "1px solid blue";

  reBtn.addEventListener("click", () => {
    listRow.remove()
   });

  }
}

createTable();

let issorted = false;
sortBtn.addEventListener("click", () => {
const sorted = sitcoms.sort((a, b) => {
   if(issorted){
     return b.rating - a.rating
   } else {
     return a.rating - b.rating
   }
 })
 issorted = !issorted
 tbody.innerHTML = "";
 createTable(sorted)
})






