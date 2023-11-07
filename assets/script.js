var searchFormEl = document.getElementById("button-id");
var nameInput = document.getElementById("nameInput");
var birthdayInput = document.getElementById("birthdayInput");
var heightInput = document.getElementById("heightInput");
var locationInput = document.getElementById("locationInput");


var geoApi = 'https://ipgeolocation.abstractapi.com/v1/?api_key=7402278e289b44908370d363047e8fe9';
var fbiApi = 'https://api.fbi.gov/wanted/v1/list';
var userCity = "ATLANTA";
var userState;
var userName;
var userBirthday;
var userHeight;

var checkbox = document.querySelector("input[type=checkbox]");
var submitBtn = document.querySelector(".submit-btn")
var locationContainer = document.getElementById("location-container");
var nameContainer = document.getElementById("name-container");
var birthdayContainer = document.getElementById("birthday-container");
var heightContainer = document.getElementById("height-container");

function handleFormSubmit(event){
    console.log("hi");
    localStorage.setItem("name", nameInput);
    localStorage.setItem("birthday", birthdayInput);
    localStorage.setItem("height", heightInput);
    localStorage.setItem("location", locationInput.checked());
}

handleFormSubmit();
searchFormEl.addEventListener("click", handleFormSubmit);
// Tracks the user's location when they click the checkbox.
/*if (checkbox !== null){
    checkbox.addEventListener("change", function(){
        if (this.checked){
            fetch(geoApi)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    userCity.textContent = (data.city);
                    userState.textContent = (data.region);
                })
        }else{
            userCity.textContent = "";
            userState.textContent = "";
        }
    });
}*/

// This chunk of code generates a list of criminals in the same city as the user.
fetch("https://api.fbi.gov/wanted/v1/list")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        userCity.toLowerCase().trim();
        for (var i = 0; i < data.items.length; i++) {
            if(userCity === data.items[i].field_offices[0]){
                console.log("works");
                var criminalLocation = document.createElement("p");
                criminalLocation.textContent = (data.items[i].field_offices[0].toUpperCase());
                locationContainer.appendChild(criminalLocation);
            }
        
    /*
            if (data.items[i].field_offices !== null){
                var criminalName = document.createElement("p");
                var criminalLocation = document.createElement("p");
                criminalName.textContent = (data.items[i].title);
                criminalLocation.textContent = (data.items[i].field_offices[0].toUpperCase());
                locationContainer.appendChild(criminalName);
                locationContainer.appendChild(criminalLocation);
            }*/

            if (data.items[i].dates_of_birth_used !== null){
                var criminalBirthday = document.createElement("p");
                criminalBirthday.textContent(data.items[i].dates_of_birth_used[0]);
                locationContainer.appendChild(criminalBirthday);
            }
        
            if (data.items[i].height_max !== null){
                var criminalHeight = document.createElement("p");
                criminalHeight.textContent(data.items[i].height_max);
                locationContainer.appendChild(criminalHeight);
            }
        
            if (data.items[i].images !== null){
                var criminalImage = document.createElement("p");
                criminalImage.src = (data.items[i].images[0].thumb);
                locationContainer.appendChild(criminalImage);
            }
        }
    });

// This chunk of code generates a list of criminals with the same name as the user.
fetch("https://api.fbi.gov/wanted/v1/list?title=" + userName)//needs userName variable
.then(function(response){
    return response.json();
})
.then(function(data){
for (var i = 0; i < data.items.length; i++){
    if (data.items[i].title !== null){
        var criminalName = document.createElement("p");
        criminalName.textContent = (data.items[i].title);
        nameContainer.appendChild(criminalName);
    }
    
    if (data.items[i].field_offices !== null){
        var criminalLocation = document.createElement("p");
        criminalLocation.textContent(data.items[i].field_offices[0].toUpperCase());
        nameContainer.appendChild(criminalLocation);
    }

    if (data.items[i].dates_of_birth_used !== null){
        var criminalBirthday = document.createElement("p");
        criminalBirthday.textContent(data.items[i].dates_of_birth_used[0]);
        nameContainer.appendChild(criminalBirthday);
    }

    if (data.items[i].height_max !== null){
        var criminalHeight = document.createElement("p");
        criminalHeight.textContent(data.items[i].height_max);
        nameContainer.appendChild(criminalHeight);
    }

    if (data.items[i].images !== null){
        var criminalImage = document.createElement("p");
        criminalImage.src = (data.items[i].images[0].thumb);
        nameContainer.appendChild(criminalImage);
    }
}
});

// This chunk of code generates a list of criminals with the same birthday as the user.
fetch("https://api.fbi.gov/wanted/v1/list?dates_of_birth_used=" + userBirthday)//needs userBirthday variable
.then(function(response){
    return response.json();
})
.then(function(data){
for (var i = 0; i < data.items.length; i++){
    if (data.items[i].title !== null){
        var criminalName = document.createElement("p");
        criminalName.textContent = (data.items[i].title);
        birthdayContainer.appendChild(criminalName);
    }
    
    if (data.items[i].field_offices !== null){
        var criminalLocation = document.createElement("p");
        criminalLocation.textContent(data.items[i].field_offices[0].toUpperCase());
        birthdayContainer.appendChild(criminalLocation);
    }

    if (data.items[i].dates_of_birth_used !== null){
        var criminalBirthday = document.createElement("p");
        criminalBirthday.textContent(data.items[i].dates_of_birth_used[0]);
        birthdayContainer.appendChild(criminalBirthday);
    }

    if (data.items[i].height_max !== null){
        var criminalHeight = document.createElement("p");
        criminalHeight.textContent(data.items[i].height_max);
        birthdayContainer.appendChild(criminalHeight);
    }

    if (data.items[i].images !== null){
        var criminalImage = document.createElement("p");
        criminalImage.src = (data.items[i].images[0].thumb);
        birthdayContainer.appendChild(criminalImage);
    }
}
});

// This chunk of code generates a list of criminals with the same height as the user. 
fetch("https://api.fbi.gov/wanted/v1/list?height-max=" + userHeight)//needs userHeight variable
.then(function(response){
    return response.json();
})
.then(function(data){
for (var i = 0; i < data.items.length; i++){
    if (data.items[i].title !== null){
        var criminalName = document.createElement("p");
        criminalName.textContent = (data.items[i].title);
        heightContainer.appendChild(criminalName);
    }
    
    if (data.items[i].field_offices !== null){
        var criminalLocation = document.createElement("p");
        criminalLocation.textContent(data.items[i].field_offices[0].toUpperCase());
        heightContainer.appendChild(criminalLocation);
        console.log(data);
    }

    if (data.items[i].dates_of_birth_used !== null){
        var criminalBirthday = document.createElement("p");
        criminalBirthday.textContent(data.items[i].dates_of_birth_used[0]);
        heightContainer.appendChild(criminalBirthday);
    }

    if (data.items[i].height_max !== null){
        var criminalHeight = document.createElement("p");
        criminalHeight.textContent(data.items[i].height_max);
        heightContainer.appendChild(criminalHeight);
    }

    if (data.items[i].images !== null){
        var criminalImage = document.createElement("p");
        criminalImage.src = (data.items[i].images[0].thumb);
        heightContainer.appendChild(criminalImage);
    }
}
});

