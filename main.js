var groupsByGroupsa = {
    A: ["Chemistry"],
    B: ["Finance"],
    C: ["Humanities"]
}

    function changegroa(value) {
        if (value.length == 0) document.getElementById("groupa").innerHTML = "<option></option>";
        else {
            var catOptions = "";
            for (categoryId in groupsByGroupsa[value]) {
                catOptions += "<option>" + groupsByGroupsa[value][categoryId] + "</option>";
                
            }
            document.getElementById("groupa").innerHTML = catOptions;
        }
    }


var groupsByGroups = {
    A: ["Physics"],
    B: ["Accounting"],
    C: ["Law"]
}

    function changegro(value) {
        if (value.length == 0) document.getElementById("group").innerHTML = "<option></option>";
        else {
            var catOptions = "";
            for (categoryId in groupsByGroups[value]) {
                catOptions += "<option>" + groupsByGroups[value][categoryId] + "</option>";
                
            }
            document.getElementById("group").innerHTML = catOptions;
        }
    }

var groupsByCategory = {
    A: ["Select", "Higher Math", "Biology", "Psychology"],
    B: ["Select", "Int. Relations", "Marketing", "Economics"],
    C: ["Select", "Home Science", "Islamic Studies", "Geography"]
}

    function changecat(value) {
        if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
        else {
            var catOptions = "";
            for (categoryId in groupsByCategory[value]) {
                catOptions += "<option>" + groupsByCategory[value][categoryId] + "</option>";
                
            }
            document.getElementById("category").innerHTML = catOptions;
        }
    }

var groupsByOptions = {
    A: ["Select", "Higher Math", "Biology", "Psychology"],
    B: ["Select", "Int. Relations", "Marketing", "Economics"],
    C: ["Select", "Home Science", "Islamic Studies", "Geography"]
}

    function changeman(value) {
        if (value.length == 0) document.getElementById("optional").innerHTML = "<option></option>";
        else {
            var catOptions = "";
            for (categoryId in groupsByOptions[value]) {
                catOptions += "<option>" + groupsByOptions[value][categoryId] + "</option>";
                
            }
            document.getElementById("optional").innerHTML = catOptions;
        }
    }