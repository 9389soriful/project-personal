// store korbo api er data in assign section 
const assign = document.getElementById('assign')

// create a variable for arr val of stored 
let arrVal = []


// this create reson is api data calling 
const fetchAPi  = async () =>{
    const api  = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await api.json()
    arrVal = data
    console.log(data)
    showData(data)
}

// allTime calling this api data this reasons showData() calling 
fetchAPi()


// create a function for api object data filtering 

const DataFilterIng =() =>{
    const search = document.getElementById('Search').value.toLowerCase()
    const filterIng = arrVal.filter((feel) =>{
        return  feel.name.toLowerCase().includes(search) ||
                feel.id.toString() === search ||
                feel.email.toLowerCase().includes(search); 
    })
    showData(filterIng); 
}; 



// Display data on the page
const showData = (data) => {
    assign.innerHTML = ""; // Clear existing content
    data.forEach((details) => {
      const showing = document.createElement("div");
      showing.innerHTML = `
      <div id="card" class="rounded-[1rem] gap-[1rem] p-[2rem] text-white bg-[#112031] flex flex-col justify-center items-center">
          <div class="icon-bar">
              <img class="rounded-full w-full" 
                   src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
                   class="card-img-top"
                   alt="User Image"/>
          </div>
          <h1 class="text-[1.5rem] font-bold">${details.name}</h1>
          <p class="font-bold text-[15px]">Email: ${details.email}</p>
          <span class="font-bold">ID: ${details.id}</span>
          <span class="font-bold">Username: ${details.username}</span>
          <hr class="text-[white] border-[1.2px] w-full">
          <button id="details" class="rounded-[10px] hover:bg-[#D4ECDD] hover:text-black border-[2px] p-[5px] w-full font-bold">Details</button>
      </div>`;
      assign.appendChild(showing);
    });
  };