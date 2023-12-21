const sections = document.querySelectorAll("section"), navLinks = document.querySelectorAll("nav a");

const resetLInks = () => navLinks.forEach(link => link.classList.remove("active"));

const handleScroll = () => {const { pageYOffset } = window;
sections.forEach(section => { const { id, offsetTop, clientHeight  } = section; 
    const offset = offsetTop - 1;
    if (
        pageYOffset >= offset &&
        pageYOffset < offset + clientHeight){
            resetLInks();
            navLinks.forEach(link => {
                if(link.dataset.scroll === id){
                    link.classList.add("active");
                }
            });
        }
        });
     };
    

    document.addEventListener("scroll", handleScroll);


   const faqs = document.querySelectorAll(".faq");

   faqs.forEach((faq) =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
   });


   ///////////////////////////
   
    

