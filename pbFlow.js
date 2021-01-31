console.log("HI FROM PBflow");





sampleObject.inChNumArray = [1, 2, 3, 4];
sampleObject.inChNameArray = ["WELCOME", "TO", "PATCH", "BAE"];
sampleObject.inChColorArray = [brown, red, orange, yellow];
sampleObject.inChMicArray = ["57", "57", "81", "91"];
sampleObject.inChStandArray = ["Short", "Short", "Tall", "Tall"];
sampleObject.inChNotesArray = ["Short", "Short", "Tall", "Tall"];
sampleObject.inChPatchArray = [1,2,3,4];
sampleObject.outChNumArray = [1,2,3,4];
sampleObject.outChColorArray = [white, brown, red, orange];
sampleObject.outChPatchArray = [1,2,3,4];
sampleObject.outChNotesArray = ["Left", "Right", "Sub", "Fill"];
sampleObject.outChNameArray = ["PRESS", "NEW", "TO", "BEGIN"];

// workingObject.name = "Select New to Begin";
populateTable(sampleObject);



window.onbeforeunload = function(){
    return "Current Data will be lost on refresh";
}

// workingObject = sampleObject;
