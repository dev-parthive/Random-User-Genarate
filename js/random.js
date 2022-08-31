const loadUser = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(users => displayUsers(users.results))
}
const displayUsers = (users) => {
    const userContainer = document.getElementById('users-container')
    for (const user of users) {
       if(user.gender === 'female'){ // sudu maya manush show korar jonno ai if condition ta likha 
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML = `
    <img src="${user.picture.large}" alt="">
        <h3>User Name: ${user.name.first} ${user.name.last}</h3>
        <p>Emaill: ${user.email}</p>
        <p>User Location: ${user.location.city} ${user.location.country}</p>
    `
        userContainer.appendChild(userDiv)
    }
}
}
loadUser()