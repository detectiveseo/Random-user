const randomUser = () => {
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => userMake(data));
}

const userMake = (data) =>{
    const warper = document.getElementById('user_warper');
    const results = data.results[0];
    const user_image = results.picture.large;
    const FirstName = results.name.first;
    const lastName = results.name.last;
    const gender = results.gender;
    const userLocation = results.location.city;
    const userPhone = results.phone;

    warper.innerHTML = `
    <img style="width: 50%; border-radius: 100%;" src="${user_image}">
    <h1>Name:${FirstName} ${lastName}</h1>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px">
    <h3>Gender: ${gender}</h3> 
    <h3>Location: ${userLocation}</h3>
    <h3>${userPhone}</h3>
    </div>
    <button id="user_button" style="padding: 10px 20px">See More</button>`
}
randomUser();