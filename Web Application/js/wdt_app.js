let currentDate = new Date().toLocaleString();
// Digital clock to show time and date
function digitalClock() {
    setInterval(function(){
        currentDate = new Date().toLocaleString();
        document.getElementById("time").innerHTML = currentDate;
    }, 1000);
};

// CLASSES

class Employee {
    constructor(Name, surname){
        this.name = Name;
        this.surname = surname;
    };
};

class StaffMember extends Employee {
    constructor(Name, surname, picture, email){
        super(Name, surname)
        this.picture = picture;
        this.email = email;
    };
    staffMemberIsLate(){
        console.log(`${this.name} + " is Late`)
    };
};

class DeliveryDriver extends Employee {
    constructor(Name, surname, vehicle, telephone, deliveryAdress, returnTime){
        super(Name, surname)
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliveryAdress = deliveryAdress;
        this.returnTime = returnTime;
    };
    // deliveryDriverIsLate();
};


staffUserGet()

function staffUserGet(){
    // WHEN CREATING OWN USERS DELETE THIS RANDOM USER GENERATOR <
    $.ajax({
        url: 'https://randomuser.me/api/?results=5',
        success: function(data) {
        const user1 = data.results[0];
        const user2 = data.results[1];
        const user3 = data.results[2];
        const user4 = data.results[3];
        const user5 = data.results[4];
        // END OF RANDOM USER GENERATOR >>

        // CREATE OWN USERS HERE. ADD OR DELETE LINES AS NEEDED. BUT FOLLOW THIS FORMAT
        // {"name": "user1", "surname": "user1", "picture": "user1", "email": "user1"},
        // {"name": "user2", "surname": "user2", "picture": "user2", "email": "user2"}
        // INSIDE OF THE [ ]
let staffMembers = [
    {"name": `${user1.name.first}`, "surname": `${user1.name.last}`, "picture": `${user1.picture.large}`, "email": `${user1.email}`},
    {"name": `${user2.name.first}`, "surname": `${user2.name.last}`, "picture": `${user2.picture.large}`, "email": `${user2.email}`},
    {"name": `${user3.name.first}`, "surname": `${user3.name.last}`, "picture": `${user3.picture.large}`, "email": `${user3.email}`},
    {"name": `${user4.name.first}`, "surname": `${user4.name.last}`, "picture": `${user4.picture.large}`, "email": `${user4.email}`},
    {"name": `${user5.name.first}`, "surname": `${user5.name.last}`, "picture": `${user5.picture.large}`, "email": `${user5.email}`}
];

    // GENERATING CLASS AND TABLE

for(let i = 0; i <= staffMembers.length -1; i++) {

    let staff = new StaffMember(staffMembers[i].name, staffMembers[i].surname, staffMembers[i].picture, staffMembers[i].email)

    console.log(staff)

    var table = document.getElementById("staffTable").getElementsByTagName("tbody")[0];

    var row = table.insertRow(0);
    var picture = row.insertCell(0);
    var name = row.insertCell(1);
    var surname = row.insertCell(2);
    var email = row.insertCell(3);
    var status = row.insertCell(4);
    var outTime = row.insertCell(5);
    var duration = row.insertCell(6);
    var expectedReturnTime = row.insertCell(7);

    picture.innerHTML = ("<img id='picture' src="+`${staff.picture}`+" alt='Staff picture'>");
    name.innerHTML = ("<p>"+staff.name+"</p>");
    surname.innerHTML = ("<p>"+staff.surname+"</p>");
    email.innerHTML = ("<p>"+staff.email+"</p>");
    status.innerHTML = "<p id='status'></p>";
    outTime.innerHTML = "<p id='outTime'></p>";
    duration.innerHTML = "<p id='duration'></p>";
    expectedReturnTime.innerHTML = "<p id='returnTime'></p>";
} 
}
});
};

// clicking on Staff pictures opens the staff info in a new window

$("table img").click(function(){
    open($(this).attr('src'));
});

function outBtn() {
    const howLong = prompt("Duration of out time? (in minutes)", 30);
    var hours = Math.floor(howLong / 60);
    var remainingMinutes = howLong % 60;
    
    const status = document.getElementById("status");
    const outTime = document.getElementById("outTime");
    const duration = document.getElementById("duration");
    const returnTime = document.getElementById("returnTime");

    status.innerHTML = "out";
    outTime.innerHTML = currentDate;
    duration.innerHTML = (hours + " hr and " + remainingMinutes + " min");

    var now = new Date();
// Add some minutes to the current time
    now.setMinutes(now.getMinutes() + remainingMinutes);
    now.setHours(now.getHours() + hours);

// Get the updated hours and minutes
    var hours = now.getHours();
    var minutes = now.getMinutes();

    returnTime.innerHTML = (hours + ":" + minutes);
};

function inBtn() {
    const status = document.getElementById("status");
    const outTime = document.getElementById("outTime");
    const duration = document.getElementById("duration");
    const returnTime = document.getElementById("returnTime");

    status.innerText = "in";
    outTime.innerHTML = "";
    duration.innerHTML = "";
    returnTime.innerHTML = "";
};

// Add deliveries to delivery board from the scheduele delivery
function addBtn() {
    const sVehicle = document.getElementById("sVehicle").value;
    const sName = document.getElementById("sName").value;
    const sSurname = document.getElementById("sSurname").value;
    const sTelephone = document.getElementById("sTelephone").value;
    const sAdress = document.getElementById("sAdress").value;
    const sReturnTime = document.getElementById("sReturnTime").value;
    
    var table = document.getElementById("deliveryTable").getElementsByTagName("tbody")[0];

    var row = table.insertRow(0);
    var vehicle = row.insertCell(0);
    var name = row.insertCell(1);
    var surname = row.insertCell(2);
    var telephone = row.insertCell(3);
    var adress = row.insertCell(4);
    var returnTime = row.insertCell(5);

    vehicle.innerHTML = ("<p>"+sVehicle+"</p>");
    name.innerHTML = ("<p>"+sName+"</p>");
    surname.innerHTML = ("<p>"+sSurname+"</p>");
    telephone.innerHTML = ("<p>"+sTelephone+"</p>");
    adress.innerHTML = ("<p>"+sAdress+"</p>");
    returnTime.innerHTML = ("<p>"+sReturnTime+"</p>");
}