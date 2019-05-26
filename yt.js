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

var z;

function y(z) {
    var c = document.getElementById('pip');
    var z;
    let flag = 0;
    for (let i = dat.length - 1; i >= 0; --i) {
        if (dat[i] !== `-1`) {
            z = dat[i];
            dat[i] = `-1`;
            break;
        }
    }
    console.log(dat);
    axios.get("http://codeforces.com/api/problemset.problems?tags=implementation")
        .then(function(response) {
            var prb;
            arr = response.data.result.problems;
            var k;
            for (let i = 0; i < arr.length; i++) {
                if (z === response.data.result.problems[i].name) {
                    flag = 1;
                    k = response.data.result.problems[i].tags;
                }
            }
            if (flag === 0)
                alert("Problem is not in Codeforces");
            else {
                x(k);
            }

        })
        .catch(function(error) {
            console.log(error);
        })
}

function x(k) {
    var c = document.getElementById('pip');
    var abc = "";
    for (let i = 0; i < k.length; i++) {
        abc = abc + k[i] + "%2B";
    }
    abc = abc.replace(" ", "+");
    abc = abc + '"%2Bprogramming"';
    console.log(abc);
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=` + `${abc}` +
            `&type=video&key=AIzaSyCVg8QjFEyWIls8WTFWbjr-qcLwZoYKDdU `)
        .then(function(response) {
            console.log(response);
            c.innerHTML = "";
            for (let i = 0; i < 5; i++) {
                console.log(response.data.items[i].id.videoId);
                c.innerHTML +=
                    `<iframe width = "420" height = "315" src = "https://www.youtube.com/embed/${response.data.items[i].id.videoId}"> < /iframe>`
            }
            for (let i = dat.length - 1; i >= 0; --i) {
                if (dat[i] !== `-1`) {
                    z = dat[i];
                    break;
                }
            }
            console.log(dat[i]);
        })
        .catch(function(error) {
            console.log(error);
        })
}