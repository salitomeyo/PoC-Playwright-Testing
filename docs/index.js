function appendData(data) {
    var mainContainer = document.getElementById("users");
    for (var i = 0; i < data.length; i++) {
        var user = document.createElement("div");
        var col_left = document.createElement("div");
        col_left.className = "col-md-3 profile-picture";
        var img = document.createElement("img");
        img.src = data[i].avatar;
        img.className = "profile-picture"
        col_left.appendChild(img);
        user.appendChild(col_left);

        var col_right = document.createElement("div");
        col_right.className = "col-md-9";
        var p = document.createElement("p");
        p.innerText = 'User information: ' + '\n' + data[i].first_name + data[i].last_name + '\n' + data[i].email;
        col_right.appendChild(p);
        user.appendChild(col_right);
        user.className = "user-container row";
        mainContainer.appendChild(user);
    }
}

function clearUsers() {
    var mainContainer = document.getElementById("users");
    mainContainer.innerHTML = '';
}

function apiCall() {
    fetch('https://reqres.in/api/users?page=1').then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.data)
        appendData(data.data)
    });
}


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
