// DIGITAL CLOCK

let currentDate = new Date().toLocaleString();

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
    constructor(Name, surname, picture, email, duration, status){
        super(Name, surname)
        this.picture = picture;
        this.email = email;
        this.returnTime = null;
        this.duration = duration;
        this.status = status;
        this.outTime = null;
    };
        // TOAST
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
        // TOAST
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

        let toastText = `Delivery driver ${this.name} ${this.surname} (${this.telephone}) is late. Expected return time was ${this.returnTime}. The driver was delivering to ${this.adress}.`;
        
        let staffMessage = document.getElementById("deliveryMessage"+`${toastCounter}`)
        staffMessage.innerText = toastText;
        $("#deliveryToast"+`${toastCounter}`).toast("show");
        
    toastCounter++
};

};

let StaffId = 1;

        // CREATE OWN USERS HERE. ADD OR DELETE LINES AS NEEDED. BUT FOLLOW THIS FORMAT
        // REMEMBER TO PUT THE CORRECT STAFF PICTURE IN THE IMG FOLDER WITH THE CORRECT NAME
        // {"name": "user1", "surname": "user1", "picture": `./img/user1.jpg`, "email": "user1"},
        // {"name": "user2", "surname": "user2", "picture": `./img/user2.jpg`, "email": "user2"}
        // INSIDE OF THE [ ]
let staffMembers = [
    // {"name": "user1", "surname": "user1", "picture": `./img/user1.jpg`, "email": "user1"},
    // {"name": "user2", "surname": "user2", "picture": `./img/user2.jpg`, "email": "user2"}
];

if (staffMembers.length === 0) {
    staffUserGet();
} else {
    createStaffTable();
};

function staffUserGet(){
    // I used and edited version of this (https://stackoverflow.com/questions/73550934/using-fetch-and-randomuser-me-how-do-i-return-multiple-results)
    $.ajax({
        url: 'https://randomuser.me/api/?results=5',
        success: function(data) {
        const user1 = data.results[0];
        const user2 = data.results[1];
        const user3 = data.results[2];
        const user4 = data.results[3];
        const user5 = data.results[4];

let GeneratedStaffMembers = [
    {"name": `${user1.name.first}`, "surname": `${user1.name.last}`, "picture": `${user1.picture.large}`, "email": `${user1.email}`, "duration": "", "status": ""},
    {"name": `${user2.name.first}`, "surname": `${user2.name.last}`, "picture": `${user2.picture.large}`, "email": `${user2.email}`, "duration": "", "status": ""},
    {"name": `${user3.name.first}`, "surname": `${user3.name.last}`, "picture": `${user3.picture.large}`, "email": `${user3.email}`, "duration": "", "status": ""},
    {"name": `${user4.name.first}`, "surname": `${user4.name.last}`, "picture": `${user4.picture.large}`, "email": `${user4.email}`, "duration": "", "status": ""},
    {"name": `${user5.name.first}`, "surname": `${user5.name.last}`, "picture": `${user5.picture.large}`, "email": `${user5.email}`, "duration": "", "status": ""}
];
staffMembers.push(...GeneratedStaffMembers);
    createStaffTable()
}
});
};

// GENERATING CLASS AND TABLE
function createStaffTable() {
for(let i = 0; i <= staffMembers.length -1; i++) {

    let staff = new StaffMember(staffMembers[i].name, staffMembers[i].surname, staffMembers[i].picture, staffMembers[i].email)

    let table = document.getElementById("staffTable").getElementsByTagName("tbody")[0];

    let row = table.insertRow(0);
    let picture = row.insertCell(0);
    let nname = row.insertCell(1);
    let surname = row.insertCell(2);
    let email = row.insertCell(3);
    let sstatus = row.insertCell(4);
    let outTime = row.insertCell(5);
    let duration = row.insertCell(6);
    let expectedReturnTime = row.insertCell(7);

    row.setAttribute("id", i);
    
    picture.innerHTML = "<img id='picture' src="+`${staff.picture}`+" alt='Staff picture'>";
    nname.innerHTML = "<p>"+staff.name+"</p>";
    surname.innerHTML = "<p>"+staff.surname+"</p>";
    email.innerHTML = "<p>"+staff.email+"</p>";
    sstatus.innerHTML = "<p></p>";
    outTime.innerHTML = "<p></p>";
    duration.innerHTML = "<p></p>";
    expectedReturnTime.innerHTML = "<p></p>";
};
};
    // CHANGE STATUS OF STAFF MEMBER TO OUT AND PROMPT 
function staffOut() {
    const rows = document.querySelectorAll("#staffTable tbody tr");

    rows.forEach((row) => {
    row.addEventListener("click", handleRowClick);
    });


    function handleRowClick(event) {
    const cells = event.currentTarget.cells;
    // got this from (https://codingbeautydev.com/blog/javascript-convert-minutes-to-hours-and-minutes/?utm_content=cmp-true)
    const howLong = prompt("Duration of out time? (in minutes)", 30);
    if (howLong === null) {
        return;
    }
    let now = new Date();
    let nowHours = now.getHours();
    let nowMinutes = now.getMinutes();
    let hours = Math.floor(howLong / 60);
    let remainingMinutes = howLong % 60;

    if (nowHours < 10) {
        nowHours = "0" + nowHours;
    }
    if (nowMinutes < 10) {
        nowMinutes = "0" + nowMinutes;
    }

    const row = event.currentTarget;
    const id = row.getAttribute("id");

    const status = cells[4];
    const outTime = cells[5];
    const duration = cells[6];
    const returnTime = cells[7];
    
    staffMembers[id].status = "out";
    staffMembers[id].outTime = nowHours +":"+ nowMinutes;
    staffMembers[id].duration = hours + " hr and " + remainingMinutes + " min";

    status.innerHTML = "<p>" + staffMembers[id].status + "</p>";
    outTime.innerHTML = "<p>" + staffMembers[id].outTime + "</p>";
    duration.innerHTML = "<p>" + staffMembers[id].duration + "</p>";

    
    now.setMinutes(now.getMinutes() + remainingMinutes);
    now.setHours(now.getHours() + hours);

    hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    staffMembers[id].returnTime = hours + ":" + minutes;

    returnTime.innerHTML = "<p>" + staffMembers[id].returnTime + "</p>";

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
        staff.staffMemberIsLate(returnTime);
        clearInterval(checkReturnTime);
        } else if (duration.innerHTML == "<p></p>") {
            clearInterval(checkReturnTime);
        }
    }, 1000);
    }
}

    // CHANGE STATUS OF STAFF MEMBER TO IN
function staffIn() {
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

    const row = event.currentTarget;
    const id = row.getAttribute("id");
    

    staffMembers[id].status = "In";
    staffMembers[id].outTime = "";
    staffMembers[id].duration = "";
    staffMembers[id].returnTime = "";

    status.innerHTML = "<p>" + staffMembers[id].status + "</p>";
    outTime.innerHTML = "<p>" + staffMembers[id].outTime + "</p>";
    duration.innerHTML = "<p>" + staffMembers[id].duration + "</p>";
    returnTime.innerHTML = "<p>" + staffMembers[id].returnTime + "</p>";

    rows.forEach((row) => {
        row.removeEventListener("click", handleRowClick);
    });
};
};

let deliveryId = 0; 
let deliveryDrivers = [];

    //ADD DEØIVERIES TO DELIVERY BOARD FROMT THE SCHEDUELE DELIVERY
function addDelivery() {
    let sVehicle = document.getElementById("sVehicle").value;
    let sName = document.getElementById("sName").value;
    let sSurname = document.getElementById("sSurname").value;
    let sTelephone = document.getElementById("sTelephone").value;
    let sAdress = document.getElementById("sAdress").value;
    let sReturnTime = document.getElementById("sReturnTime").value;

 validateDelivery();

    function validateDelivery() {
        let vehicleAlert = "";
        let nameAlert = "";
        let surnameAlert = "";
        let telephoneAlert = "";
        let adressAlert = "";
        let returnTimeAlert ="";

        let validateCount = 0;
        if (sVehicle.toLowerCase() === "car") {
            sVehicle = '<i id="icon" class="bi bi-car-front-fill"></i>'
            validateCount++;
            document.getElementById("sVehicle").removeAttribute("style");
        } else if (sVehicle.toLowerCase() === "motorcycle"){
            sVehicle = '<i id="icon" class="fa fa-motorcycle"></i>' //https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-motorcycle
            validateCount++;
            document.getElementById("sVehicle").removeAttribute("style");
        } else {
            document.getElementById("sVehicle").style.background = "red";
            document.getElementById("sVehicle").style.color = "yellow";
            vehicleAlert = "Vehicle could only be car or motorcycle. "
        }
        if (sName === "") {
            document.getElementById("sName").style.background = "red";
            document.getElementById("sName").style.color = "yellow";
            nameAlert = "Have to input a name. "
        } else {
            validateCount++
            document.getElementById("sName").removeAttribute("style");
        }
        if (sSurname === "") {
            document.getElementById("sSurname").style.background = "red";
            document.getElementById("sSurname").style.color = "yellow";
            surnameAlert = "Have to input a surname. "
        } else {
            validateCount++
            document.getElementById("sSurname").removeAttribute("style");
        }
        if (isNaN(parseFloat(sTelephone))) {
            document.getElementById("sTelephone").style.background = "red";
            document.getElementById("sTelephone").style.color = "yellow";
            telephoneAlert = "Telephone number must be only numbers. "
        } else {
            validateCount++
            document.getElementById("sTelephone").removeAttribute("style");
        }
        if (sAdress === "") {
            document.getElementById("sAdress").style.background = "red";
            document.getElementById("sAdress").style.color = "yellow";
            adressAlert = "Have to input an adress. "
        } else {
            validateCount++
            document.getElementById("sAdress").removeAttribute("style");
        }
        if (sReturnTime === "") {
            document.getElementById("sReturnTime").style.background = "red";
            document.getElementById("sReturnTime").style.color = "yellow";
            returnTimeAlert = "Have to input a returntime. "
        } else {
            validateCount++
            document.getElementById("sReturnTime").removeAttribute("style");
        }
    
        if (validateCount == 6) {
            let deliveryDriver = [
                {"name": sName, "surname": sSurname, "vehicle": sVehicle, "telephone": sTelephone, "adress": sAdress, "returnTime": sReturnTime}
                ]
                deliveryDrivers.push(...deliveryDriver)
            createDriver();
        } else {
            alert(vehicleAlert + nameAlert + surnameAlert + telephoneAlert + adressAlert + returnTimeAlert);
        };
    };

    createDriver()
};
function createDriver(){
    let driver = new DeliveryDriver(deliveryDrivers[deliveryId].name, deliveryDrivers[deliveryId].surname, deliveryDrivers[deliveryId].vehicle, deliveryDrivers[deliveryId].telephone, deliveryDrivers[deliveryId].adress, deliveryDrivers[deliveryId].returnTime);

createDeliveryTable(driver);
};

function createDeliveryTable(driver) {
    let table = document.getElementById("deliveryTable").getElementsByTagName("tbody")[0];
    let row = table.insertRow(0);
    let vehicle = row.insertCell(0);
    let name = row.insertCell(1);
    let surname = row.insertCell(2);
    let telephone = row.insertCell(3);
    let adress = row.insertCell(4);
    let returnTime = row.insertCell(5);

    row.setAttribute("id", deliveryId);

    vehicle.innerHTML = "<p>"+driver.vehicle+"</p>";
    name.innerHTML = "<p>"+driver.name+"</p>";
    surname.innerHTML = "<p>"+driver.surname+"</p>";
    telephone.innerHTML = "<p>"+driver.telephone+"</p>";
    adress.innerHTML = "<p>"+driver.adress+"</p>";
    returnTime.innerHTML = "<p>"+driver.returnTime+"</p>";

    document.getElementById("sVehicle").value = "";
    document.getElementById("sName").value = "";
    document.getElementById("sSurname").value = "";
    document.getElementById("sTelephone").value = "";
    document.getElementById("sAdress").value = "";
    document.getElementById("sReturnTime").value = "";


    deliveryId++

    const checkReturnTime = setInterval(() => {
        let currentTime = new Date();
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();

        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (currentHours < 10) {
            currentHours = "0" + currentHours;
        }
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
    // CLEAR THE ROW OF DELIVERY DRIVER
function clearDelivery() {
    const rows = document.querySelectorAll("#deliveryTable tbody tr");

    rows.forEach((row) => {
        row.addEventListener("click", handleDeleteClick);
    });

    function handleDeleteClick(event) {
        const row = event.currentTarget;
        const id = row.getAttribute("id");
        const name = deliveryDrivers[id].name;
        const adress = deliveryDrivers[id].adress;
        const shouldDelete = confirm("Are you sure you want to delete " + name +"'s delivery to " + adress);
        if (shouldDelete) {
        delete deliveryDrivers[id];
        row.parentNode.removeChild(row);
        }

        rows.forEach((row) => {
            row.removeEventListener("click", handleDeleteClick);
        });
    }
    
};
