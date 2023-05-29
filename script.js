let timer=10;
        let time = document.getElementById('display');      
        
        setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() =>{
               
                time.innerHTML = timer--;
                setTimeout(() =>{
               
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.style.fontSize = "36px";
                                                    time.style.maxWidth = "610px";
                                                
                                                    time.innerHTML = "Happy Indepedence Day"
                                                    
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000);