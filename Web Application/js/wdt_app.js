let currentDate = new Date().toLocaleString();

function digitalClock() {
    setInterval(function(){
        currentDate = new Date().toLocaleString();
        document.getElementById("time").innerHTML = currentDate;
    }, 1000);
};

function staffUserGet(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        success: function(data) {
        return data;
        }
      });
}

let staff1 = staffUserGet();
console.log(staff1);

class Employee {
    constructor(Name, surname){
        this.name = Name;
        this.surname = surname;
    };
};

class StaffMember extends Employee {
    constructor(picture, email, status, outTime, duration, expectedReturnTime){
        super(Name, surname)
        this.picture = picture;
        this.email = email;
        this.status = status;
        this.outTime = outTime;
        this.duration = duration;
        this.expectedReturnTime = expectedReturnTime;
    };
    // staffMemberIsLate();
};

class DeliveryDriver extends Employee {
    constructor(vehicle, telephone, deliveryAdress, returnTime){
        super(Name, surname)
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliveryAdress = deliveryAdress;
        this.returnTime = returnTime;
    };
    // deliveryDriverIsLate();
};

class StaffFactory {
    create(type) {
        switch(type) {
            case 'Emplyee1':
                return new Student();
            case 'Margaret':
                return new Student("Margaret", 21, 'female');
        }
    }
}