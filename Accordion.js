
class Accordion{
    #el = null;
    #titlesElements=null;
    #bodiesElements=null;
    
    constructor(el) {
        this.#el = el;
        this.#getDomElemens();
        this.#bindEventListeners();
      
    }
    #getDomElemens(){
        this.#titlesElements=this.#el.querySelectorAll('.accordion-title');
        this.#bodiesElements=this.#el.querySelectorAll('.accordion-body');
    }
    #bindEventListeners() {
        this.#el.addEventListener('click', (e) => {
            if (e.target.classList.contains('accordion-title')) {
                const index = this.#findTitleIndex(e.target);       
                this.#bodiesElements[index].classList.toggle('accordion-body-active');
                this.#hideActiveBodies(index);             
            }
        });
    }
    #findTitleIndex(titleEl) {
            for (let i = 0; i < this.#titlesElements.length; i++) {
                    if (this.#titlesElements[i] === titleEl) {
                        return i;
                    }
                }
                return null;
            }
        
    #hideActiveBodies(index) {
            for (let i = 0; i < this.#bodiesElements.length; i++) {
                if (this.#bodiesElements[i] !== this.#bodiesElements[index]) {
                   this.#bodiesElements[i].classList.remove('accordion-body-active')
                }
              }
           }
    }
            

    