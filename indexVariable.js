var userInfo = {
    name: ko.observable("Mayank"),
    age: ko.observable(10), 
    salutation:ko.observable("Hello World")
}

function changeName() {
    userInfo.name("Anshul");
    userInfo.age(20);
}

function getAge() {
    alert(userInfo.age())
}

userInfo.name.subscribe(function() {
    userInfo.salutation("Hello All, I am " + userInfo.name())
});

function isCorrectName() {
    return userInfo.name() == "Anshul Gupta"
}

ko.when(function() {
    return isCorrectName();
}, function() {
    alert("Value has been correctly Changed");
})

ko.applyBindings(userInfo);