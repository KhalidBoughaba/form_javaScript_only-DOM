
//Declare Element 

var
    myForm = document.getElementById("main"),

    //Create Label
    label_nom = document.createElement("label"),
    label_prenom = document.createElement("label"),
    label_adresse = document.createElement("label"),
    label_phone = document.createElement("label"),
    label_email = document.createElement("label"),
    label_password = document.createElement("label"),
    label_confirmerPass = document.createElement("label"),

    //Create Input
    myInput_nom = document.createElement("input"),
    myInput_prenom = document.createElement("input"),
    myInput_adresse = document.createElement("input"),
    myInput_phone = document.createElement("input"),
    myInput_email = document.createElement("input"),
    myInput_password = document.createElement("input"),
    myInput_confirmerPass = document.createElement("input"),

    allInput = document.querySelectorAll(".inpt");

//create Attribute "type" to Input
attr_nom = document.createAttribute("type");
attr_nom.value = "text";

attr_prenom = document.createAttribute("type");
attr_prenom.value = "text";

attr_adresse = document.createAttribute("type");
attr_adresse.value = "text";

attr_phone = document.createAttribute("type");
attr_phone.value = "text";

attr_email = document.createAttribute("type");
attr_email.value = "text";

attr_password = document.createAttribute("type");
attr_password.value = "password";

attr_confirmerPass = document.createAttribute("type");
attr_confirmerPass.value = "password";

// Append Attribute "type" to Input
myInput_nom.setAttributeNode(attr_nom);
myInput_prenom.setAttributeNode(attr_prenom);
myInput_adresse.setAttributeNode(attr_adresse);
myInput_phone.setAttributeNode(attr_phone);
myInput_email.setAttributeNode(attr_email);
myInput_password.setAttributeNode(attr_password);
myInput_confirmerPass.setAttributeNode(attr_confirmerPass);

//Append Element to Element

myForm.appendChild(label_nom);
myForm.appendChild(myInput_nom);

myForm.appendChild(label_prenom);
myForm.appendChild(myInput_prenom);

myForm.appendChild(label_adresse);
myForm.appendChild(myInput_adresse);

myForm.appendChild(label_phone);
myForm.appendChild(myInput_phone);

myForm.appendChild(label_email);
myForm.appendChild(myInput_email);

myForm.appendChild(label_password);
myForm.appendChild(myInput_password);

myForm.appendChild(label_confirmerPass);
myForm.appendChild(myInput_confirmerPass);


//Added id IN Label
label_nom.id = "lbN";
label_prenom.id = "lbP";
label_adresse.id = "lbA";
label_phone.id = "lbPh";
label_email.id = "lbE";
label_password.id = "lbPss";
label_confirmerPass.id = "lbCpss";

//Added Class IN Input
myInput_nom.classList = "inpN inpt";
myInput_prenom.classList = "inpP inpt";
myInput_adresse.classList = "inpA inpt";
myInput_phone.classList = "inpPh inpt";
myInput_email.classList = "inpE inpt";
myInput_password.classList = "inpPss inpt";
myInput_confirmerPass.classList = "inpCpss inpt";


//Added Name IN Label

document.getElementById("lbN").innerHTML = "Nom <br>";
document.getElementById("lbP").innerHTML = "Prenom <br>";
document.getElementById("lbA").innerHTML = "Adresse <br>";
document.getElementById("lbPh").innerHTML = "Phone <br>";
document.getElementById("lbE").innerHTML = "Email <br>";
document.getElementById("lbPss").innerHTML = "Mot de Passe <br>";
document.getElementById("lbCpss").innerHTML = "Confirmer Mot de Passe <br>";

// Using Style "css" In Element

// Style On body
document.body.style.backgroundImage = "URL(\"back.jpg\")"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundSize = "cover"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.height = "100vh"
document.body.style.overflow = "hidden";

//Style On Form
Object.assign(myForm.style, {
    width: "350px", position: "relative",
    bottom: "-60px", left: "30px", padding: "40px", backgroundColor: "#cd36cd1f", borderRadius: "10px"
});

//Style On Input
Object.assign(myInput_nom.style, { display: "block", padding: "8px", borderRadius: "10px", width: "300px", margin: "5px", });

Object.assign(myInput_prenom.style, { display: "block", padding: "8px", borderRadius: "10px", width: "300px", margin: "5px" });

Object.assign(myInput_adresse.style, { display: "block", padding: "8px", borderRadius: "10px", width: "300px", margin: "5px" });

Object.assign(myInput_phone.style, { display: "block", padding: "8px", borderRadius: "10px", width: "300px", margin: "5px" });

Object.assign(myInput_email.style, { display: "block", padding: "8px", borderRadius: "10px", width: "300px", margin: "5px" });

Object.assign(myInput_password.style, { display: "block", padding: "8px", borderRadius: "10px", width: "300px", margin: "5px" });

Object.assign(myInput_confirmerPass.style, { display: "block", padding: "8px", borderRadius: "10px", width: "300px", margin: "5px" });

//Style On Label

Object.assign(label_nom.style, { color: "white", fontFamily: "sans-serif" })
Object.assign(label_prenom.style, { color: "white", fontFamily: "sans-serif" })
Object.assign(label_adresse.style, { color: "white", fontFamily: "sans-serif" })
Object.assign(label_phone.style, { color: "white", fontFamily: "sans-serif" })
Object.assign(label_email.style, { color: "white", fontFamily: "sans-serif" })
Object.assign(label_password.style, { color: "white", fontFamily: "sans-serif" })
Object.assign(label_confirmerPass.style, { color: "white", fontFamily: "sans-serif" })
