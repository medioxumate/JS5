/**
 * Created in PhpStorm
 * @author Brian Kiehn
 * @date 2/2/2020
 * @version 1.0
 * json-search.js
 * https://github.com/medioxumate/JS5.git
 * GreenRiverDev
 */

janeD = {
    "Name": {
        "first" : "Jane",
        "last" : "Doe"
    },
    "Sex": "f",
    "Born" : 1876,
    "Died" : 1956,
    "Father" : {
        "first" : "Petrus",
        "last" : "de Milliano"
    },
    "Mother" : {
        "first" : "Sophia",
        "last" :  "van Damme"
    }
};

janeR = {
    "Name": {
        "first" : "Jane",
        "last" : "Ramirez"
    },
    "Sex": "f",
    "Born" : 1878,
    "Died" : 1980,
    "Father" : {
        "first" : "Petrus",
        "last" : "de Milliano"
    },
    "Mother" : {
        "first" : "Isabel",
        "last" : "Nunez"
    }
};

let list = {janeD, janeR};

function search(){
    let string = document.getElementById("search").value;
    document.getElementById("print").innerHTML = "";

    let success = false;

    if(string !== "") {
        let reg = new RegExp(string, "i");
        for (let query in list) {

            if (query.search(reg) !== -1) {
                printJSON(query);
                success = true;
            }
        }
        if (success === false) {
            document.getElementById("print").innerHTML = "Could not find query.<br>";
        }
    }
    else{
        document.getElementById("print").innerHTML = "Query is empty.<br>";
    }
}

function printJSON(object) {
        document.getElementById("print").innerHTML += "<li>Name: "+
            object.Name.first+" "+object.Name.last+"</li>";
        document.getElementById("print").innerHTML += "<li>Sex: " + object.Sex +"</li>";
        document.getElementById("print").innerHTML += "<li>Born: " + object.Born+ "</li>";
        document.getElementById("print").innerHTML += "<li>Died: " + object.Died+ "</li>";
        document.getElementById("print").innerHTML += "<li>Father: "+
            object.Father.first+" "+object.Father.last+"</li>";
        document.getElementById("print").innerHTML += "<li>Mother: "+
            object.Mother.first+" "+ object.Mother.last+"</li>";
}