const p= document.getElementById("text");
console.log(p);
const pclass=document.getElementsByClassName("text")[0];
console.log(pclass);
const pq=document.querySelector(".text");
console.log(pq);
const qall=document.querySelectorAll(".text");
console.log(qall);//gives node list
//use index also
const c=document.querySelector(".create");
const cp=document.createElement("input");
c.append(cp);
c.classList="divelement";
p.style.color="red";
p.remove();
