"use strict";
let myName = window.addEventListener("load", () => {
    let name = localStorage.getItem("name");
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pass1 = localStorage.getItem("pass1");
    let deg = localStorage.getItem("deg");
    let uni = localStorage.getItem("uni");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let uni2 = localStorage.getItem("uni2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let lang = localStorage.getItem("lang");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let Compony = localStorage.getItem("Compony");
    let comlocation = localStorage.getItem("comlocation");
    let jobTitle = localStorage.getItem("jobTitle");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    let picture = localStorage.getItem("profile_pic");
    let resName = document.getElementById("resName");
    resName.textContent = name;
    let resDesig = document.getElementById("resDesig");
    resDesig.textContent = desig;
    let resPhone = document.getElementById("resPhone");
    resPhone.textContent = phone;
    let resEmail = document.getElementById("resEmail");
    resEmail.textContent = email;
    let resAdd = document.getElementById("resAdd");
    resAdd.textContent = add;
    let resPass = document.getElementById("resPass");
    resPass.textContent = pass1;
    let resDeg = document.getElementById("resDeg");
    resDeg.textContent = deg;
    let resIns = document.getElementById("resIns");
    resIns.textContent = uni;
    let resPass2 = document.getElementById("resPass2");
    resPass2.textContent = pass2;
    let resDeg2 = document.getElementById("resDeg2");
    resDeg2.textContent = deg2;
    let resIns2 = document.getElementById("resIns2");
    resIns2.textContent = uni2;
    let resSkill1 = document.getElementById("resSkill1");
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById("resSkill2");
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById("resSkill3");
    resSkill3.textContent = skill3;
    let resLang1 = document.getElementById("resLang1");
    resLang1.textContent = lang;
    let resLang2 = document.getElementById("resLang2");
    resLang2.textContent = lang2;
    let resStartYear = document.getElementById("resStartYear");
    resStartYear.textContent = styear;
    let resEndYear = document.getElementById("resEndYear");
    resEndYear.textContent = endyear;
    let resCompany = document.getElementById("resCompany");
    resCompany.textContent = Compony;
    let resComLocation = document.getElementById("resComLocation");
    resComLocation.textContent = comlocation;
    let resJobTitle = document.getElementById("resJobTitle");
    resJobTitle.textContent = jobTitle;
    let resAch1 = document.getElementById("resAch1");
    resAch1.textContent = achv1;
    let resAch2 = document.getElementById("resAch2");
    resAch2.textContent = achv2;
    let resAch3 = document.getElementById("resAch3");
    resAch3.textContent = achv3;
    let resImg = document.getElementById("resImg");
    resImg.src = picture;
});
//................print section...............
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
//................edit section...............
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
// ................shareable section...............
// let share_btn = document.getElementById("share_btn");
// let userName;
// if(name){
//     userName  = myName.toLowerCase().replace(/\s+g, "-")
// }else{
//     userName = "user"
// }
// share_btn?.addEventListener("click", ()=>{
// })
