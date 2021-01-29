console.log("HI FROM PBPATCH");

// var currentDate = new Date();


function Patch(user, inputs, outputs, name, notes){
    
    this.user = user;
    this.inputs = inputs;
    this.outputs = outputs;
    this.name = name;
    this.notes = notes;
    this.id = "";
    this.inChNumArray = [];
    this.inChNameArray = [];
    this.inChColorArray = [];
    this.inChPatchArray = [];
    this.inChMicArray = [];
    this.inChStandArray = [];
    this.inChNotesArray = [];
    this.outChNumArray = [];
    this.outChNameArray = [];
    this.outChColorArray = [];    
    this.outChPatchArray = [];
    this.outChNotesArray = [];
    this.inputBool = true;
    this.selectedChannel = 0;
    this.selectedColor = "white";
    this.patchBool1 = false;
    this.patchBool2 = false;

    let currentDate = new Date();
    this.dateCreated = currentDate;
    this.dateModified = currentDate;

    //CREATE INPUT ARRAYS
    for(i=0; i<inputs; i++){
        this.inChNumArray.push(i+1);
        this.inChNameArray.push("");
        this.inChColorArray.push(white);
        this.inChMicArray.push("");
        this.inChPatchArray.push("");
        this.inChStandArray.push("");
        this.inChNotesArray.push("");
    }
    console.log("Finished input for loop" + this.inChNameArray);

    //CREATE OUTPUT ARRAys
    for (o=0; o<outputs; o++){
        this.outChNumArray.push(o+1);
        this.outChNameArray.push("");
        this.outChColorArray.push(white);
        this.outChPatchArray.push("");
        this.outChNotesArray.push("");

    }
    console.log("Finsiehd output for loop " + this.outChNameArray);
}


Patch.prototype.updateInput = function(intel){
    console.log("Calling prototype function update Input, do something with *this* and intel: " + intel);
}
Patch.prototype.updateOutput = function(intel){
    console.log("Calling prototype function update Input, do something with *this* and intel: " + intel);
}
Patch.prototype.checkForErrors = function(){
    console.log("Checking for errors prototype function");
}
Patch.prototype.clearPatch = function(){
    console.log("Clear Patch Function");
    this.inputs = 0;
    this.outputs = 0;
    this.inChNumArray = [];
    this.inChNameArray = [];
    this.inChColorArray = [];
    this.inChPatchArray = [];
    this.inChMicArray = [];
    this.inChStandArray = [];
    this.inChNotesArray = [];
    this.outChNumArray = [];
    this.outChNameArray = [];
    this.outChColorArray = [];    
    this.outChPatchArray = [];
    this.outChNotesArray = [];
}
