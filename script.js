document.querySelector(".hesap").addEventListener("click" , function(){
    const girilenDeger = Number(document.querySelector(".deger").value);
    if (girilenDeger % 2 === 0) {
        document.querySelector(".result").textContent = "Girdiğiniz Sayı Çift."
    }
    else {
        document.querySelector(".result").textContent = "Girdiğiniz Sayı Tek"
    }
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".deger").value = "";
    document.querySelector(".result").textContent = "";
})