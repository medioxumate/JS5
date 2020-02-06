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
        "first" : "Patli",
        "last" : "Ramirez"
    }
};

petrusM = {
    "Name": {
        "first" : "Petrus",
        "last" : "de Milliano"
    },
    "Sex": "m",
    "Born" : 1858,
    "Died" : 1895,
    "Father" : {
        "first" : "Escobar",
        "last" : "de Milliano"
    },
    "Mother" : {
        "first" : "Isabel",
        "last" : "Nunez"
    }
};

ottoG = {
    "Name": {
        "first" : "Otto",
        "last" : "the Great"
    },
    "Sex": "m",
    "Born" : 912,
    "Died" : 973,
    "Father" : {
        "first" : "Henry",
        "last" : "the Fowler"
    },
    "Mother" : {
        "first" : "Mathilde",
        "last" : "of Enger"
    }
};

catA = {
    "Name": {
        "first" : "Catherine",
        "last" : " of Aragon"
    },
    "Sex": "f",
    "Born" : 1485,
    "Died" : 1536,
    "Father" : {
        "first" : "Ferdinand",
        "last" : "of Aragon"
    },
    "Mother" : {
        "first" : "Isabella",
        "last" : "of Castile"
    }
};

let list = [janeD, janeR, petrusM, ottoG, catA];

function search(){
    let string = document.getElementById("search").value.toString();
    document.getElementById("print").innerHTML = "";

    let success = false;

    if(!(string === "")) {
        for (let i = 0; i < list.length; i++) {
            let comp = compare(list[i]);

            if(comp.toLowerCase().includes(string.toLowerCase())) {
                printJSON(list[i]);
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

function compare(object){
    return object.Name.first+" "+object.Name.last+" : "+ object.Sex +" : " + object.Born+ " : " + object.Died +" : "
    + object.Father.first+" "+object.Father.last+" : "+ object.Mother.first+" "+ object.Mother.last;
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
            object.Mother.first+" "+ object.Mother.last+"</li><br>";
}