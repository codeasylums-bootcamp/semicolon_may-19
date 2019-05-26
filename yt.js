var dat = [];
var alana = 0;
document.getElementById("input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("butt").click();
    }
});

function a() {
    var count = 0;
    var add = document.getElementById('input').value;
    document.getElementById('input').value = '';
    for (let index = 0; index < dat.length; index++) {
        if (add == `${dat[index]}`)
            count++;
    }
    if (count == 0) {
        document.getElementById('un').innerHTML += `<input type="checkbox" onclick="b('${alana}')"> <span id="${alana}">${add}</span><br> `;
        dat.push(`${add}`);
        alana++;
    }

}

function b(alana) {
    var kat = document.getElementById(alana).innerHTML;
    document.getElementById(alana).innerHTML = `<strike>${kat}</strike>`;
    for (let index = 0; index < dat.length; index++) {
        if (dat[index] === `${kat}`)
            dat[index] = -1;

    }
}

function x() {
    var c = document.getElementById('pip');
    axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + "food" + "&type=video&key=AIzaSyCVg8QjFEyWIls8WTFWbjr-qcLwZoYKDdU")
        .then(function(response) {
            console.log(response);
            for (let i = 0; i < 5; i++) {
                c.innerHTML +=
                    `<iframe width = "420" height = "315" src = "https://www.youtube.com/embed/${response.data.items[i].videoId}"</iframe>`
            }
        })
        .catch(function(error) {
            console.log(error);
        })
}