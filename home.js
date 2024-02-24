var login = document.querySelector("#login")
var profile= document.querySelector("#profile")

var companys=document.querySelectorAll(".hide");
var viewmore=document.querySelector(".view-more").querySelector("button");
var viewless=document.querySelector(".view-less").querySelector("button");

viewmore.addEventListener('click',showcompany);
viewless.addEventListener('click',hidecompany)

login.addEventListener('click',showprofile)
function showprofile(e){
    login.style.display='none';
    profile.style.display='block';
}

function showcompany(e){
    Array.from(companys).forEach(company => {
        company.style.display='block'
    });
    viewmore.style.display='none';
    viewless.style.display='inline-block';      
}
function hidecompany(e){
    Array.from(companys).forEach(company => {
        company.style.display='none';
    });
    viewmore.style.display='inline-block';
    viewless.style.display='none';
}