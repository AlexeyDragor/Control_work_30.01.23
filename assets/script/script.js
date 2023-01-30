    let sortOrder = true; // true = от А до Я, false = от Я до А

function inpBtn() {
    let name = document.querySelector("#nameInput").value;
    let names = JSON.parse(localStorage.getItem("names")) || [];
    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));
    listNames();
}

function alfBtn() {
    let names = JSON.parse(localStorage.getItem("names"));
    names.sort();
    if (!sortOrder) {
        names.reverse();
    }
    localStorage.setItem("names", JSON.stringify(names));
    sortOrder = !sortOrder;
    listNames();
}

function listNames() {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    let namesList = "<ul>";
    names.forEach(function (name) {
        namesList += "<li>" + name + "</li>";
    });
    namesList += "</ul>";
    document.querySelector('.iputNames').innerHTML = namesList;
} 
