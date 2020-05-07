class Data {

constructor () {
this.index = 3;
}
updateIndex  () {
   
    this.index = this.index + 1
    this.yo = createElement('h4');
}

getAnswers(){
    this.firstName = form.firstInput.value();
    this.secondName = form.secondInput.value();
    this.thirdName = form.thirdInput.value();
    this.fourthName = form.personInput.value();
     }

updateFood () {
    var foodIndex = "food/responders/responder" + this.index;
database.ref (foodIndex).set({
answer : this.firstName
})
}

updateCount () {
var count = "count/answers";
database.ref(count).set({
    count:this.index
})
}

updateContribution () {
    var contIndex = "contribution/responders/responder" + this.index;
database.ref (contIndex).set({
answer : this.secondName
})

}

updateAmount () {
    var amountIndex = "amount/responders/responder" + this.index;
database.ref (amountIndex).set({
answer : this.thirdName
})
}

updateName () {
    var nameIndex = "name/responders/responder" + this.index;
database.ref (nameIndex).set({
answer : this.fourthName
})
}

display () {

form.submitButton.mousePressed (() => {
 this.getAnswers();
 this.updateIndex();

 this.updateFood();
 this.updateContribution();
this.updateAmount();
this.updateName();
this.updateCount(); 

form.dataLink.html("please go to this link to view your and other answers-: https://console.firebase.google.com/project/survey-5c81d/database/survey-5c81d/data");
this.yo.html ("Thank you for attempting");

});

}

}