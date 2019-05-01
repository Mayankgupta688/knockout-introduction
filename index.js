var observableArrayData = ko.observableArray([
    { name: "Mayank", age: 10 },
    { name: "Anshul", age: 20 }
]);


function userInfoData() {
    this.name = ko.observable("Mayank");
    this.age = ko.observable("20");
    this.fullName = ko.computed(function() {
        if(this.age() > 10) {
            return this.name() + "(Senior)";
        } else return "(Junior)";
    }, this);
}

ko.applyBindings(new userInfoData());