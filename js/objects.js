const person = {
    firstname : "dipen" ,
    lastname : "patel",
    fullname : function(){
        return this.firstname + " " + this.lastname ;
    }
}
console.log(person.lastname);
console.log(person.firstname);
console.log(person.fullname());