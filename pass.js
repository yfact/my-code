//document.getElementById('num').innerText =5;
let count = 0
let show = document.getElementById('num')

function lag() {
 count += 1
show.innerText= count
 //document.getElementById('num').innerText = count

 //console.log(count)
}

//save btn
let entery = document.getElementById('message')


function save() { 
    entery.innerText +=  " - "+ count
    console.log(entery)

    count = 0
    entry = 0
}
save()
 


