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

let toastCounter = 1;

class StaffMember extends Employee {
    constructor(Name, surname, picture, email, duration){
        super(Name, surname)
        this.picture = picture;
        this.email = email;
        this.returnTime = null;
        this.duration = duration;
    };
    
    staffMemberIsLate(returnTime) {
        let toastContainer = document.getElementById("toastContainer");
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<div id="staffToast${toastCounter}" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div class="toast-header">
        <strong class="me-auto">Staff member is late!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <img id="toastPic${toastCounter}" src="" alt="Staff picture">
        <div id="staffMessage${toastCounter}" class="toast-body">
        </div>
    </div>`;
    toastContainer.appendChild(newDiv);

        let toastText =  `${this.name} ${this.surname} ${this.email} is late. ${this.name} has been away for ${this.duration}`;
        let toastPic = `${this.picture}`;
        console.log(toastPic)
        let staffMessage = document.getElementById("staffMessage"+`${toastCounter}`)
        staffMessage.innerText = toastText;
        let toastPicture = document.getElementById("toastPic"+`${toastCounter}`)
        toastPicture.src = toastPic;
        $("#staffToast"+`${toastCounter}`).toast("show");
        
    toastCounter++
};
};


class DeliveryDriver extends Employee {
    constructor(Name, surname, vehicle, telephone, adress, returnTime){
        super(Name, surname)
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.adress = adress;
        this.returnTime = returnTime;
        
    };
    deliveryDriverIsLate(returnTime){
        let toastContainer = document.getElementById("toastContainer");
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<div id="deliveryToast${toastCounter}" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div class="toast-header">
        <strong class="me-auto">Delivery driver is late!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div id="deliveryMessage${toastCounter}" class="toast-body">
        
        </div>
    </div>`;
    toastContainer.appendChild(newDiv);

        let toastText = `Delivery driver ${this.name} ${this.surname} (${this.telephone}) is late. Expected return time was ${this.returnTime}`;
        console.log(toastText);
        
        let staffMessage = document.getElementById("deliveryMessage"+`${toastCounter}`)
        staffMessage.innerText = toastText;
        $("#deliveryToast"+`${toastCounter}`).toast("show");
        
    toastCounter++
};

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
// console.log(staffMembers[0].picture)
    // GENERATING CLASS AND TABLE

for(let i = 0; i <= staffMembers.length -1; i++) {

    let staff = new StaffMember(staffMembers[i].name, staffMembers[i].surname, staffMembers[i].picture, staffMembers[i].email)
    // console.log(staff.picture)

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
    
    picture.innerHTML = "<img id='picture' src="+`${staff.picture}`+" alt='Staff picture'>";
    name.innerHTML = "<p>"+staff.name+"</p>";
    surname.innerHTML = "<p>"+staff.surname+"</p>";
    email.innerHTML = "<p>"+staff.email+"</p>";
    status.innerHTML = "<p></p>";
    outTime.innerHTML = "<p></p>";
    duration.innerHTML = "<p></p>";
    expectedReturnTime.innerHTML = "<p></p>";

    // clicking on Staff pictures opens the staff info in a new window

    $("table img").click(function(){
        window.open($(this).attr('src'));
    });
} 
}
});
};

function outBtn() {
    const rows = document.querySelectorAll("#staffTable tbody tr");

    rows.forEach((row) => {
    row.addEventListener("click", handleRowClick);
    });


    function handleRowClick(event) {
    const cells = event.currentTarget.cells;

    const howLong = prompt("Duration of out time? (in minutes)", 30);
    var hours = Math.floor(howLong / 60);
    var remainingMinutes = howLong % 60;

    const status = cells[4];
    const outTime = cells[5];
    const duration = cells[6];
    const returnTime = cells[7];

    status.innerHTML = "<p>Out</p>";
    outTime.innerHTML = ("<p>" + currentDate + "</p>");
    duration.innerHTML = ("<p>" + hours + " hr and " + remainingMinutes + " min </p>");

    var now = new Date();
    now.setMinutes(now.getMinutes() + remainingMinutes);
    now.setHours(now.getHours() + hours);

    hours = now.getHours();
    var minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    returnTime.innerHTML = "<p>" + hours + ":" + minutes + "</p>";

    rows.forEach((row) => {
        row.removeEventListener("click", handleRowClick);
    });

    const returnTimeValue = hours + ":" + minutes;

    const name = cells[1].innerText;
    const surname = cells[2].innerText;
    const email = cells[3].innerText;
    const picture = cells[0].querySelector("img").src;
    const durations = cells[6].innerText;

    const staff = new StaffMember(name, surname, picture, email, durations);
        staff.returnTime = returnTimeValue; 

    const checkReturnTime = setInterval(() => {
        const currentTime = new Date();
        const currentHours = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
        if (currentHours === hours && currentMinutes === minutes) {
        staff.staffMemberIsLate(returnTimeValue);
        clearInterval(checkReturnTime);
        } else if (duration.innerHTML == "<p></p>") {
            clearInterval(checkReturnTime);
        }
    }, 1000);
    }
}



function inBtn() {
    const rows = document.querySelectorAll("#staffTable tbody tr");

    rows.forEach((row) => {
        row.addEventListener("click", handleRowClick);

    });

    function handleRowClick(event) {
    const cells = event.currentTarget.cells;
    
    const status = cells[4];
    const outTime = cells[5];
    const duration = cells[6];
    const returnTime = cells[7];

    status.innerHTML = "<p>In</p>";
    outTime.innerHTML = "<p></p>";
    duration.innerHTML = "<p></p>";
    returnTime.innerHTML = "<p></p>";

    rows.forEach((row) => {
        row.removeEventListener("click", handleRowClick);
    });
};
};

// Add deliveries to delivery board from the scheduele delivery

function addBtn() {
    const sVehicle = document.getElementById("sVehicle").value;
    const sName = document.getElementById("sName").value;
    const sSurname = document.getElementById("sSurname").value;
    const sTelephone = document.getElementById("sTelephone").value;
    const sAdress = document.getElementById("sAdress").value;
    const sReturnTime = document.getElementById("sReturnTime").value;
    let deliveryDriver = [
    {"name": sName, "surname": sSurname, "vehicle": sVehicle, "telephone": sTelephone, "adress": sAdress, "returnTime": sReturnTime}
    ]
    let driver = new DeliveryDriver(deliveryDriver[0].name, deliveryDriver[0].surname, deliveryDriver[0].vehicle, deliveryDriver[0].telephone, deliveryDriver[0].adress, deliveryDriver[0].returnTime)


validateDelivery(driver)
};

function validateDelivery(driver) {
    let validateCount = 0;
    if (driver.vehicle.toLowerCase() === "car") {
        driver.vehicle = '<i id="icon" class="bi bi-car-front-fill"></i>'
        validateCount++;
    } else if (driver.vehicle.toLowerCase() === "motorcycle"){
        driver.vehicle = '<i id="icon" class="fa fa-motorcycle"></i>' //https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-motorcycle
        validateCount++;
    } else {
        document.getElementById("sVehicle").style.color = "red";
    }

    if (isNaN(parseFloat(driver.telephone))) {
        document.getElementById("sTelephone").style.color = "red";
    } else {
        validateCount++
    }

    if (validateCount == 2) {
        document.getElementById("sVehicle").removeAttribute("style");
        document.getElementById("sTelephone").removeAttribute("style");
        createDeliveryTable(driver);
    } else {
        alert("Not the correct format");
    };
};

function createDeliveryTable(driver) {
    var table = document.getElementById("deliveryTable").getElementsByTagName("tbody")[0];
    var row = table.insertRow(0);
    var vehicle = row.insertCell(0);
    var name = row.insertCell(1);
    var surname = row.insertCell(2);
    var telephone = row.insertCell(3);
    var adress = row.insertCell(4);
    var returnTime = row.insertCell(5);

    vehicle.innerHTML = "<p>"+driver.vehicle+"</p>";
    name.innerHTML = "<p>"+driver.name+"</p>";
    surname.innerHTML = "<p>"+driver.surname+"</p>";
    telephone.innerHTML = "<p>"+driver.telephone+"</p>";
    adress.innerHTML = "<p>"+driver.adress+"</p>";
    returnTime.innerHTML = "<p>"+driver.returnTime+"</p>";

    const checkReturnTime = setInterval(() => {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();

        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (currentHours < 10) {
            currentHours = "0" + currentHours;
        }
        console.log("Im running")
        const timeCorrectFormat = currentHours+":"+currentMinutes;
        if (timeCorrectFormat == driver.returnTime) {
            if (row.parentNode) {
        driver.deliveryDriverIsLate(driver.returnTime);
            } clearInterval(checkReturnTime);
        } else if (!row.parentNode) {
            clearInterval(checkReturnTime);
        }
    }, 1000);
}
    
function clearBtn() {
    const rows = document.querySelectorAll("#deliveryTable tbody tr");

    rows.forEach((row) => {
        row.addEventListener("click", handleDeleteClick);
    });

    function handleDeleteClick(event) {
        const row = event.currentTarget;
        const shouldDelete = confirm("Are you sure you want to delete this row?");
        if (shouldDelete) {
        row.parentNode.removeChild(row);
        }

        rows.forEach((row) => {
            row.removeEventListener("click", handleDeleteClick);
        });
    }
    
};
