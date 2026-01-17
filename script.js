
const c = document.getElementById("content");
const phone = "994554560595";
for (let k in DATA){
 let d=document.createElement("div");
 let items = DATA[k].map(i=>{
   let text = encodeURIComponent(`Salam, Car Parking Multiplayer üçün ${i} sifarişim var.`);
   return `<li>${i} <a class='order' href="https://wa.me/994554560595?text=${text}">Sifariş et</a></li>`;
 }).join("");
 d.innerHTML="<h2>"+k+"</h2><ul>"+items+"</ul>";
 c.appendChild(d);
}
