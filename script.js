let gorevGir = document.getElementById("gorevGir");
let gorevEkle=document.getElementById("gorevEkle");
let gorevListesi=document.getElementById("gorevListesi");
gorevEkle.addEventListener("click", function(){
    let gorevMetni=gorevGir.value;
    if(gorevMetni.trim()===""){
        return;
    }
       let yeniGorev=document.createElement("li")
       yeniGorev.textContent="Görev:"+gorevMetni+" tamamlandı";
       gorevListesi.appendChild(yeniGorev)
       gorevGir.value="";

       let butonSil=document.createElement("button");
       butonSil.textContent="sil";
    yeniGorev.appendChild(butonSil);
    butonSil.addEventListener("click",function(){
       butonSil.parentElement.remove();
       
       
    });
    butonSil.addEventListener("keydown",function(event){
    if(event.key==="Delete")
    {
        butonSil.click();
    }

});
   


    
    
});
 gorevGir.addEventListener("keydown", function(event){
        if(event.key==="Enter"){
          gorevEkle.click();
        }
        });
