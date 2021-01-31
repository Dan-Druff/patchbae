console.log("HI FROM PBfirebase");







auth.onAuthStateChanged(user => {
    
    killModals();
   
    if(user){
        setupUi(user);
   

    }else{
        setupUi();
      
        
    }

});