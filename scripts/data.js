    
    async function getData(url) {

    let res = await fetch(url);
    
    let data = await res.json();
    
    return data;
    
    }
    
    function append(data,container) {
    //console.log(data)
        data.forEach((el) => {
            
    let div = document.createElement("div");

    let img = document.createElement("img");
    
    img.src = el.strMealThumb;
    
    let dish = document.createElement("h1");

    dish.style.color = "rgb(255, 90, 61)"
    
    dish.innerHTML = el.strMeal;

    let type = document.createElement('h3');

    type.style.color = "orange"
    type.innerHTML =el.strTags;

    let recipe = document.createElement("p")

   recipe.innerHTML = el.strInstructions;
     
    div.append(img,dish,type,recipe);
    
    container.append(div);
    
        });
    }
  

    const inputBtn = () => {
        return  `<input type="text" name="" id="qwery" placeholder="Search here" />
    
        <button id="searchBtn">Search</button>`
    }


  
    
    export {getData , append, inputBtn} ;


