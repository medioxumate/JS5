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
    "Farther" : "Petrus de Milliano",
    "Mother" : "Sophia van Damme"
};

janeR = {
    "Name": {
        "first" : "Jane",
        "last" : "Ramirez"
    },
    "Sex": "f",
    "Born" : 1878,
    "Died" : 1980,
    "Farther" : "Petrus de Milliano",
    "Mother" : "Isabel Nunez"
};

let list = {janeD, janeR};


function search(string){
    for(let search in list){

    }
}


function printJSON(object) {
    for (let part in object) {
        document.getElementById("print").innerHTML += part + " : " + object[part] + "<br>";
    }
    document.getElementById("print").innerHTML += "<br>";
}