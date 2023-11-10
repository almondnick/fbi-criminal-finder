var nameInput = localStorage.getItem("name");
var heightInput = localStorage.getItem("height");
var userCity = localStorage.getItem("user-city");
var userState = localStorage.getItem("user-state");
var userName = document.getElementById("userName");
var nameContent = document.getElementById("name-content");
var locationContent = document.getElementById("location-content");
var heightContent = document.getElementById("height-content");
var locationInput = localStorage.getItem("location");
var spanLocation = document.getElementById("userLocation");
var spanName = document.getElementById("userName");
var spanHeight = document.getElementById("userHeight");

userCity = userCity.toLowerCase();
userCity.replace(" ","");

function locationApi(){
    if(userCity === ""){
        var container = document.createElement("div");
            container.setAttribute("id","card");
            locationContent.appendChild(container);
            var noCriminal = document.createElement("p");
            noCriminal.textContent = ("You chose not to give your location.");
            container.appendChild(noCriminal);
    }else{
        fetch("https://api.fbi.gov/@wanted?pageSize=1017&page=1&sort_on=modified&sort_order=desc&field_offices="+userCity)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
    
            if(data.items.length < 1 ){
                userCity = userCity.toUpperCase();
                spanLocation.textContent = (userCity);
                var container = document.createElement("div");
                container.setAttribute("id","card");
                locationContent.appendChild(container);
                var noCriminal = document.createElement("p");
                noCriminal.textContent = ("There are no criminals in the city of " + userCity + ".");
                container.appendChild(noCriminal);
                return;
            }
    
            for(var i = 0; i < data.items.length; i++){
                var container = document.createElement("div");
                container.setAttribute("id","card");
                locationContent.appendChild(container);
    
                if(data.items[i].title !== null){
                    var criminalName = document.createElement("p");
                    criminalName.textContent = (data.items[i].title);
                    container.appendChild(criminalName);
                }
                if (data.items[i].images !== null){
                    var criminalImage = document.createElement("img");
                    criminalImage.classList.add("criminal-img");
                    criminalImage.src = (data.items[i].images[0].thumb);
                    container.appendChild(criminalImage);
                }
                if (data.items[i].field_offices !== null){
                    userCity = userCity.toUpperCase();
                    spanLocation.textContent = (userCity);
                    var criminalLocation = document.createElement("p");
                    criminalLocation.textContent = ("Location: " + data.items[i].field_offices[0].toUpperCase());
                    container.appendChild(criminalLocation);
                }
                if(data.items[i].dates_of_birth_used !== null){
                    var criminalBirthday = document.createElement("p");
                    criminalBirthday.textContent = ("Birthday: " + data.items[i].dates_of_birth_used[0]);
                    container.appendChild(criminalBirthday);
                }
                if(data.items[i].height_max !== null){
                    var criminalHeight = document.createElement("p");
                    criminalHeight.textContent = ("They are " + data.items[i].height_max + " inches tall.");
                    container.appendChild(criminalHeight);
                }
                if(data.items[i].caution !== null){
                    var criminalDescription = document.createElement("p");
                    criminalDescription.textContent = ("Description: " + data.items[i].caution);
                    container.appendChild(criminalDescription);
                }
            }
        })
    }
    }
    

function nameApi(){  
    if(nameInput === ""){
            var container = document.createElement("div");
            container.setAttribute("id","card");
            nameContent.appendChild(container);
            var noCriminal = document.createElement("p");
            noCriminal.textContent = ("You chose not to give your name.");
            container.appendChild(noCriminal);
            return;
    }else{
        fetch("https://api.fbi.gov/@wanted?pageSize=1017&page=1&sort_on=modified&sort_order=desc&title="+nameInput)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if(data.items.length < 1 ){
                nameInput = nameInput.toUpperCase();
                spanName.textContent = (nameInput);
                var container = document.createElement("div");
                container.setAttribute("id","card");
                nameContent.appendChild(container);
                var noCriminal = document.createElement("p");
                noCriminal.textContent = ("There are no criminals with the name " + nameInput + ".");
                container.appendChild(noCriminal);
                return;
            }

            for(var i = 0; i < data.items.length; i++){
                var container = document.createElement("div");
                container.setAttribute("id","card");
                nameContent.appendChild(container);
    
                if(data.items[i].title !== null){
                    nameInput = nameInput.toUpperCase();
                    spanName.textContent = (nameInput);
                    var criminalName = document.createElement("p");
                    criminalName.textContent = (data.items[i].title);
                    container.appendChild(criminalName);
                }
                if (data.items[i].images !== null){
                    var criminalImage = document.createElement("img");
                    criminalImage.classList.add("criminal-img");
                    criminalImage.src = (data.items[i].images[0].thumb);
                    container.appendChild(criminalImage);
                }
                if (data.items[i].field_offices !== null){
                    var criminalLocation = document.createElement("p");
                    criminalLocation.textContent = ("Location: " + data.items[i].field_offices[0].toUpperCase());
                    container.appendChild(criminalLocation);
                }
                if(data.items[i].dates_of_birth_used !== null){
                    var criminalBirthday = document.createElement("p");
                    criminalBirthday.textContent = ("Birthday: " + data.items[i].dates_of_birth_used[0]);
                    container.appendChild(criminalBirthday);
                }
                if(data.items[i].height_max !== null){
                    var criminalHeight = document.createElement("p");
                    criminalHeight.textContent = ("They are " + data.items[i].height_max + " inches tall.");
                    container.appendChild(criminalHeight);
                }
                if(data.items[i].caution !== null){
                    var criminalDescription = document.createElement("p");
                    criminalDescription.textContent = ("Description: " + data.items[i].caution);
                    container.appendChild(criminalDescription);
                }
            }
        })
    }
    }


function heightApi(){

    if(heightInput === ""){
        var container = document.createElement("div");
        container.setAttribute("id","card");
        heightContent.appendChild(container);
        var noCriminal = document.createElement("p");
        noCriminal.textContent = ("You chose not to give your height.");
        container.appendChild(noCriminal);
        return;
    }else{
        fetch("https://api.fbi.gov/@wanted?pageSize=1017&page=1&sort_on=modified&sort_order=desc&height_max="+heightInput)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
    
            if(data.items.length < 1 ){
                spanHeight.textContent = (heightInput);
                var container = document.createElement("div");
                container.setAttribute("id","card");
                heightContent.appendChild(container);
                var noCriminal = document.createElement("p");
                noCriminal.textContent = ("There are no criminals with a height of " + heightInput + " inches.");
                container.appendChild(noCriminal);
                return;
            }
    
            for(var i = 0; i < data.items.length; i++){
                var container = document.createElement("div");
                container.setAttribute("id","card");
                heightContent.appendChild(container);
    
                if(data.items[i].title !== null){
                    var criminalName = document.createElement("p");
                    criminalName.textContent = (data.items[i].title);
                    container.appendChild(criminalName);
                }
                if (data.items[i].images !== null){
                    var criminalImage = document.createElement("img");
                    criminalImage.classList.add("criminal-img");
                    criminalImage.src = (data.items[i].images[0].thumb);
                    container.appendChild(criminalImage);
                }
                if (data.items[i].field_offices !== null){
                    var criminalLocation = document.createElement("p");
                    criminalLocation.textContent = ("Location: " + data.items[i].field_offices[0].toUpperCase());
                    container.appendChild(criminalLocation);
                }
                if(data.items[i].dates_of_birth_used !== null){
                    var criminalBirthday = document.createElement("p");
                    criminalBirthday.textContent = ("Birthday: " + data.items[i].dates_of_birth_used[0]);
                    container.appendChild(criminalBirthday);
                }
                if(data.items[i].height_max !== null){
                    spanHeight.textContent = (heightInput);
                    var criminalHeight = document.createElement("p");
                    criminalHeight.textContent = ("They are " + data.items[i].height_max + " inches tall.");
                    container.appendChild(criminalHeight);
                }
                if(data.items[i].caution !== null){
                    var criminalDescription = document.createElement("p");
                    criminalDescription.textContent = ("Description: " + data.items[i].caution);
                    container.appendChild(criminalDescription);
                }
            }
        })
    }
    }

locationApi();
nameApi();
heightApi();