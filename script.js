const c=document.getElementById("content");
for(let k in DATA){
let d=document.createElement("div");
d.className="section";
d.innerHTML="<h2>"+k+"</h2>"+DATA[k].map(i=>{
let t=encodeURIComponent("Salam, "+i+" sifariş etmək istəyirəm");
return `<div class='item'>${i}<a href='https://wa.me/994554560595?text=${t}'>Sifariş</a></div>`;
}).join("");
c.appendChild(d);
}