class Form {
    constructor () {

         // name
         this.personName = createElement ('h3');
         this.personInput = createInput ("name")
     

        // creating first q and input box
        this.firstQuestion = createElement ('h5');
        this.firstInput = createInput ("Express Your Views");

        //creating 2nd q and input box
        this.secondQuestion = createElement ('h5');
        this.secondInput = createInput ("yes or no")

        // creating 3rd and input box
        this.thirdQuestion = createElement ('h5');
        this.thirdInput = createInput ("Amount");

        // submit button 
        this.submitButton = createButton ('Submit');

        // name 
        this.firstName = null
        this.secondName = null
        this.thirdName = null
        this.fourthName = null

        // Database link 
        this.dataLink = createElement ('h6');
    }

 

    display() {
      
        //first question and input 
       this.firstQuestion.html ("Do you think food should me given to poor children in schools?")
        this.firstQuestion.position (10,0);
       this.firstInput.position (100,50);

       // second question and input 
       this.secondQuestion.html ("Will you be willing to donate to such an organization?");
       this.secondQuestion.position(10,70);
       this.secondInput.position(100,110);

       // third question and input 
       this.thirdQuestion.html ("What is the amount that you will be willing to donate")
   this.thirdQuestion.position(10,140);
   this.thirdInput.position(100,180)

   // submit box position 
   this.submitButton.position(100,300)

   // name 
   this.personName.html ("What is your name/nickname")
this.personName.position(90,220)
this.personInput.position(100,260)
   
    }
  
}