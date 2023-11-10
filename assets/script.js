var nameInput = document.getElementById("nameInput");
var heightInput = document.getElementById("heightInput");
var locationInput = document.getElementById("locationInput");
var submitBtn = document.querySelector(".submit-btn")
var checkbox = document.querySelector("input[type=checkbox]");

var geoApi = 'https://ipgeolocation.abstractapi.com/v1/?api_key=7402278e289b44908370d363047e8fe9';
var userCity;
var userState;

function handleFormSubmit(event){
    event.preventDefault();
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("height", heightInput.value);
    localStorage.setItem("location", locationInput.checked);

    var checked = JSON.parse(localStorage.getItem("location"));
    console.log(checked);
    if(checked == true ){
        fetch(geoApi)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    userCity = (data.city);
                    userState = (data.region);
                    localStorage.setItem("user-city", userCity);
                    localStorage.setItem("user-state", userState);
                    location.assign("./list.html");
                })
    }else{
        userCity = "";
        userState = "";
        localStorage.setItem("user-city", userCity);
        localStorage.setItem("user-state", userState);
        location.assign("./list.html");
    }
}

submitBtn.addEventListener("click", handleFormSubmit);