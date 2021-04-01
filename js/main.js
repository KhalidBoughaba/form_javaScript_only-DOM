
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

    allInput = document.querySelectorAll(".inpt"),

    //create Attribute
    attr = document.createAttribute("type");
attr.value = "text";

// Append Attribute to Input
myInput_nom.setAttributeNode(attr);
/*myInput_prenom.setAttributeNode(attr);
myInput_adresse.setAttributeNode(attr);
myInput_phone.setAttributeNode(attr);
myInput_email.setAttributeNode(attr);
myInput_password.setAttributeNode(attr);
myInput_confirmerPass.setAttributeNode(attr);*/

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

//Added <br> in input
