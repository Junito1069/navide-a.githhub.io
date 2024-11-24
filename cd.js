const colores = ["null", 
    "#FFFF00",
    "#00CCFF", "#00CCFF", 
    "#FF3399", "#FF3399", "#FF3399", 
    "#00FFFF", "#00FFFF","#00FFFF", "#00FFFF", 
    "#9966FF", "#9966FF", "#9966FF", "#9966FF", "#9966FF",
    "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00",
    "#FF0000","#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000",
    "#99FF00","#99FF00", "#99FF00", "#99FF00", "#99FF00", "#99FF00", "#99FF00", "#99FF00"];
    
    const tiempo = ["null", 
    ".2s", 
    ".3s", ".3s", 
    ".4s", ".4s", ".4s", 
    ".5s", ".5s", ".5s", ".5s", 
    ".6s", ".6s", ".6s", ".6s", ".6s", 
    ".7s", ".7s", ".7s", ".7s", ".7s", ".7s",
    ".8s", ".8s", ".8s", ".8s", ".8s", ".8s", ".8s",
    ".9s", ".9s", ".9s", ".9s", ".9s", ".9s", ".9s", ".9s"];
    
    
    for (let i = 1; i <= 36; i++) {
           
        let foco = ".a"+i;
        let a = document.querySelector(foco);
        a.style.setProperty("animation-delay", tiempo[i]); 
        
        a.style.setProperty("--color", colores[i]); 
        a.style.setProperty("background", "var(--color)"); 
    
    }
    document.addEventListener('DOMContentLoaded', () => {
        const snowContainer = document.querySelector('.snow-container');
        const snowflakesCount = 200; // Set a fixed number of snowflakes
    
        for (let i = 0; i < snowflakesCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
    
            // Random horizontal position
            snowflake.style.left = `${Math.random() * 100}%`;
    
            // Random size
            const size = `${Math.random() * 5 + 5}px`; // size between 5px and 10px
            snowflake.style.width = size;
            snowflake.style.height = size;
    
            // Random animation duration and delay
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;
    
            // Randomize the horizontal movement
            snowflake.style.setProperty('--random-x', Math.random());
    
            // Randomize opacity to create different shades of white
            const opacity = Math.random() * 0.5 + 0.5; // between 0.5 and 1
            snowflake.style.opacity = opacity;
            snowflake.style.boxShadow = `0 0 20px 5px rgba(255, 255, 255, ${opacity * 0.7})`; // Corresponding glow opacity
    
            // Append snowflake to container
            snowContainer.appendChild(snowflake);
            const colores = ["null", 
                "#FFFF00",
                "#00CCFF", "#00CCFF", 
                "#FF3399", "#FF3399", "#FF3399", 
                "#00FFFF", "#00FFFF","#00FFFF", "#00FFFF", 
                "#9966FF", "#9966FF", "#9966FF", "#9966FF", "#9966FF",
                "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00",
                "#FF0000","#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000",
                "#99FF00","#99FF00", "#99FF00", "#99FF00", "#99FF00", "#99FF00", "#99FF00", "#99FF00"];
                
                const tiempo = ["null", 
                ".2s", 
                ".3s", ".3s", 
                ".4s", ".4s", ".4s", 
                ".5s", ".5s", ".5s", ".5s", 
                ".6s", ".6s", ".6s", ".6s", ".6s", 
                ".7s", ".7s", ".7s", ".7s", ".7s", ".7s",
                ".8s", ".8s", ".8s", ".8s", ".8s", ".8s", ".8s",
                ".9s", ".9s", ".9s", ".9s", ".9s", ".9s", ".9s", ".9s"];
                
                
                for (let i = 1; i <= 36; i++) {
                       
                    let foco = ".a"+i;
                    let a = document.querySelector(foco);
                    a.style.setProperty("animation-delay", tiempo[i]); 
                    
                    a.style.setProperty("--color", colores[i]); 
                    a.style.setProperty("background", "var(--color)"); 
                
                }
                
                
        }
    });