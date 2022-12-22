var updateWindow = document.getElementById("update-window");

fetch('scripts/updates.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(x => {
            let box = document.createElement("div");
            box.className = "box fancy-button";
            // console.log(x["title"])
            let h2 = document.createElement("h2");
            h2.innerHTML = x["title"];
            let p = document.createElement("p");
            p.innerHTML = x["content"];
            updateWindow.appendChild(box);
            box.appendChild(h2);
            box.appendChild(p);
        })
    })
    .catch(function (err) {
        console.log('error retrieving data for updates ' + err);
    });
