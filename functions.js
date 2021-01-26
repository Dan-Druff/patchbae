console.log("Hi from functions");
const { jsPDF } = window.jspdf;

function doThePdf (){
    const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
}
function clearErrorDiv(){
    errorDiv.style.display = "none";
}
function clearArray(arrayToClear){
arrayToClear.chNumArray = [];
arrayToClear.chNameArray = [];
arrayToClear.chColorArray = [];
arrayToClear.chPatchArray = [];
arrayToClear.chMicArray = [];
arrayToClear.chStandArray = [];
arrayToClear.outChNumArray = [];
arrayToClear.outChNameArray = [];
arrayToClear.outChColorArray = [];
arrayToClear.outChPatchArray = [];

}
function formatArray(){
    // workingArray = blankPatch;
    // workingArray.chNumArray = [];
    // workingArray.chNameArray = [];
    // workingArray.chColorArray = [];
    // workingArray.chMicArray = [];
    // workingArray.chStandArray = [];
    // workingArray.chPatchArray = [];
    // workingArray.outChNumArray = [];
    // workingArray.outChNameArray = [];
    // workingArray.outChColorArray = [];
    // workingArray.outChPatchArray = [];


clearArray(workingArray);

    for(i=0; i<workingArray.inputs; i++){
        workingArray.chNumArray.push(i);
        workingArray.chNameArray.push("");
        workingArray.chColorArray.push("white");
        workingArray.chMicArray.push("");
        workingArray.chPatchArray.push("");
        workingArray.chStandArray.push("");
    }
    for(o=0; o<workingArray.outputs; o++){
        workingArray.outChNumArray.push(o);
        workingArray.outChNameArray.push("");
        workingArray.outChColorArray.push("white");
        workingArray.outChPatchArray.push("")
    }
}
function populateTable (){

if (colorSortingOn){
    tableRows = "";
    outputTableRows = "";
    
    let theName = "<h2>" + workingArray.name + "</h2><hr />";
        
    for (i=0; i<colorSortPatch.chNumArray.length; i++){
            
            tableRows += "<tr style='background-color:";
            tableRows += colorSortPatch.chColorArray[i];
            tableRows += "'><td><form name='channel";
            tableRows += i + 1;
            tableRows += "' action='#'><input id='edit";
            tableRows += i + 1;
            tableRows += "' type='submit' name='edit' value='";
            tableRows += colorSortPatch.chNumArray[i] + 1;
            tableRows += "'></form></td><td>";
            tableRows += colorSortPatch.chNameArray[i];
            tableRows += "</td><td>";
            tableRows += colorSortPatch.chPatchArray[i];
            tableRows += "</td><td>";
            tableRows += colorSortPatch.chMicArray[i];
            tableRows += "</td><td>";
            tableRows += colorSortPatch.chStandArray[i];
            tableRows += "</td></tr>";
            }
            
            
    var theTable = theName + tableTop + tableRows + tableBottom;
    
    if(colorSortPatch.outChNumArray.length > 0){
        theTable += outputTableTop;
    for(o=0; o<colorSortPatch.outChNumArray.length; o++){
        outputTableRows += "<tr style='background-color:";
        outputTableRows += colorSortPatch.outChColorArray[o];
        outputTableRows += "'><td><form name='outputChannel";
        outputTableRows += o + 1;
        outputTableRows += "' action='#'><input id='outputEdit";
        outputTableRows += o + 1;
        outputTableRows += "' type='submit' name='outputEdit' value='";
        outputTableRows += colorSortPatch.outChNumArray[o] + 1;
        outputTableRows += "'></form></td><td>";
        outputTableRows += colorSortPatch.outChNameArray[o];
        outputTableRows += "</td><td>";
        outputTableRows += colorSortPatch.outChPatchArray[o];
    
        outputTableRows += "</td></tr>";
    }
    theTable += outputTableRows;
    theTable += tableBottom;
    }
    
    
    tableDiv.innerHTML = theTable;
}else{
    tableRows = "";
    outputTableRows = "";
    
    let theName = "<h2>" + workingArray.name + "</h2><hr />";
        
    for (i=0; i<workingArray.chNumArray.length; i++){
            
            tableRows += "<tr style='background-color:";
            tableRows += workingArray.chColorArray[i];
            tableRows += "'><td><form name='channel";
            tableRows += i + 1;
            tableRows += "' action='#'><input id='edit";
            tableRows += i + 1;
            tableRows += "' type='submit' name='edit' value='";
            tableRows += i + 1;
            tableRows += "'></form></td><td>";
            tableRows += workingArray.chNameArray[i];
            tableRows += "</td><td>";
            tableRows += workingArray.chPatchArray[i];
            tableRows += "</td><td>";
            tableRows += workingArray.chMicArray[i];
            tableRows += "</td><td>";
            tableRows += workingArray.chStandArray[i];
            tableRows += "</td></tr>";
            }
            
            
    var theTable = theName + tableTop + tableRows + tableBottom;
    
    if(workingArray.outputs > 0){
        theTable += outputTableTop;
    for(o=0; o<workingArray.outChNumArray.length; o++){
        outputTableRows += "<tr style='background-color:";
        outputTableRows += workingArray.outChColorArray[o];
        outputTableRows += "'><td><form name='outputChannel";
        outputTableRows += o + 1;
        outputTableRows += "' action='#'><input id='outputEdit";
        outputTableRows += o + 1;
        outputTableRows += "' type='submit' name='outputEdit' value='";
        outputTableRows += o + 1;
        outputTableRows += "'></form></td><td>";
        outputTableRows += workingArray.outChNameArray[o];
        outputTableRows += "</td><td>";
        outputTableRows += workingArray.outChPatchArray[o];
    
        outputTableRows += "</td></tr>";
    }
    theTable += outputTableRows;
    theTable += tableBottom;
    }
    
    
    tableDiv.innerHTML = theTable;
}    



}
function optionsSubmitButton(){
        
    let sessionName = document.getElementById("sessionNameId").value;
    let chosenInputs = document.getElementsByName("inputs");
    let chosenInputNumber = 0;
    let chosenOutputs = document.getElementsByName("outputs");
    let chosenOutputNumber = 0;
    let sessionNotes = document.getElementById("sessionNotesId").value;
    workingArray = blankPatch;
    workingArray.name = sessionName;
    workingArray.notes = sessionNotes;
    
    for (i=0; i<chosenInputs.length; i++){
        if(chosenInputs[i].checked){
        workingArray.inputs = constInputNumberArray[i];
        }
    }
    for(o=0; o<chosenOutputs.length; o++){
    if(chosenOutputs[o].checked){
        workingArray.outputs = constOutputNumberArray[o];
    
    }
    }
    errorDiv.style.display = "block";
    nameDisp.innerText = workingArray.name;
    inputsDisp.innerText = workingArray.inputs;
    outputsDisp.innerText = workingArray.outputs;
    notesDisp.innerText = workingArray.notes;
    
    
    
      
        

}
function editSubmitButton(){


editingOn = false;

console.log("EDIT SUBMIT AND PREV IS: " + prevPatchColor + prevPatchNumber);

        editFormDiv.style.display = "none";
    
    
    let result = Array.from(document.querySelectorAll('#editFormId input')).reduce((acc,input) => ({...acc, [input.id]:input.value}),{});

    let chosenColor = document.getElementsByName("color");
    let colorString = "";
    let arrayPosition = selectedChannel - 1;

  

        
    if (chosenColor[0].checked){
        colorString = "brown";
    }
  
    if (chosenColor[1].checked){
        colorString = "red";
    }
    if (chosenColor[2].checked){
        colorString = "orange";
    }
    if (chosenColor[3].checked){
        colorString = "yellow";
    }
    if (chosenColor[4].checked){

        colorString = "green";
    }
    if (chosenColor[5].checked){
        colorString = "blue";
    }
    //CHECK FOR SUB BOX ERRORS HERE FIRST

    let anyErrors = false;

if(prevPatchColor == colorString && prevPatchNumber == result.patchNumberId){
console.log("WE'RE JUST RE-EDITING THE CHANNEL");
if(inputSelected){
    if(colorSortingOn){
        console.log("color sorting on");
        colorSortPatch.chNameArray[arrayPosition] = result.nameId;
        colorSortPatch.chPatchArray[arrayPosition] = result.patchNumberId;
        colorSortPatch.chStandArray[arrayPosition] = result.standId;
        colorSortPatch.chColorArray[arrayPosition] = colorString;
        colorSortPatch.chMicArray[arrayPosition] = result.micId;
    }else{
        console.log("color sorting on");
        colorSortPatch.outChNameArray[arrayPosition] = result.nameId;
        colorSortPatch.outChPatchArray[arrayPosition] = result.patchNumberId;
        colorSortPatch.outChColorArray[arrayPosition] = colorString;
    }
    workingArray.chNameArray[arrayPosition] = result.nameId;
    workingArray.chPatchArray[arrayPosition] = result.patchNumberId;
    workingArray.chStandArray[arrayPosition] = result.standId;
    workingArray.chColorArray[arrayPosition] = colorString;
    workingArray.chMicArray[arrayPosition] = result.micId;
    
        }else{
            if(colorSortingOn){
                console.log("color sorting on");
                colorSortPatch.outChNameArray[arrayPosition] = result.nameId;
                colorSortPatch.outChPatchArray[arrayPosition] = result.patchNumberId;
              
                colorSortPatch.outChColorArray[arrayPosition] = colorString;
                
            }else{
                colorSortPatch.outChNameArray[arrayPosition] = result.nameId;
                colorSortPatch.outChPatchArray[arrayPosition] = result.patchNumberId;
              
                colorSortPatch.outChColorArray[arrayPosition] = colorString;
                console.log("color sorting on");
            }

    workingArray.outChColorArray[arrayPosition] = colorString;
    workingArray.outChNameArray[arrayPosition] = result.nameId;
    workingArray.outChPatchArray[arrayPosition] = result.patchNumberId;
        }
    populateTable();
}else{
console.log("FIRST TIME EDITING CHANNEL, OR DOES NOT EQUAL SUBMISSION");

for (i=0; i<workingArray.chNumArray.length; i++){

    if(workingArray.chColorArray[i] == colorString && workingArray.chPatchArray[i] == result.patchNumberId){



        anyErrors = true;
        let channelWithError = workingArray.chNumArray[i] + 1;
        let errorHtml = "<h2>Patch Error Detected...</h2><br /><p>It appears you are trying to double patch channel " + channelWithError + " to " + colorString + " " + result.patchNumberId;
        errorHtml += "<br /><hr /><button onclick='javascript:clearErrorDiv()'>Go Back...</button>"
        errorDiv.style.display = "block";
        errorDiv.innerHTML = errorHtml;
        }

        if(workingArray.outChColorArray[i] == colorString && workingArray.outChPatchArray[i] == result.patchNumberId){
            anyErrors = true;
            let channelWithError = workingArray.outChNumArray[i] + 1;
            let errorHtml = "<h2>Patch Error Detected...</h2><br /><p>It appears you are trying to double patch channel " + channelWithError + " to " + colorString + " " + result.patchNumberId;
            errorHtml += "<br /><hr /><button onclick='javascript:clearErrorDiv()'>Go Back...</button>"
            errorDiv.style.display = "block";
            errorDiv.innerHTML = errorHtml;
        }
    }

    if(anyErrors != true){
        console.log("SELECTED COLOR IS: " + colorString);
        console.log("Channel Name Is: " + result.nameId);
        console.log("Channel Patch Is: " + result.patchNumberId);
        console.log("Channel Mic is: " + result.micId);
        console.log("Channel Stand Is: " + result.standId);
        console.log("Channel notes Are: " + result.notesId);
        
    
        if(inputSelected){
    workingArray.chNameArray[arrayPosition] = result.nameId;
    workingArray.chPatchArray[arrayPosition] = result.patchNumberId;
    workingArray.chStandArray[arrayPosition] = result.standId;
    workingArray.chColorArray[arrayPosition] = colorString;
    workingArray.chMicArray[arrayPosition] = result.micId;
    
        }else{
    workingArray.outChColorArray[arrayPosition] = colorString;
    workingArray.outChNameArray[arrayPosition] = result.nameId;
    workingArray.outChPatchArray[arrayPosition] = result.patchNumberId;
        }
    populateTable();
    }

}


}

cancelButt.onclick = function(){
    errorDiv.style.display = "none";
};
confirmButt.onclick = function(){
    errorDiv.style.display = "none";
    options.style.display = "none";
formatArray();
populateTable();
};
colorSelect.onclick = function(){
 
};
newButt.onclick = function(){
    
    
    // workingArray.chNumArray = [];
    options.style.display = "block";
    return false;
};
exitOptionsButt.onclick = function(){
    options.style.display = "none";
    return false;
};

function handleClick(evt){
    
    var channelRow = evt.target || evt.srcElement;
    selectedChannel = channelRow.value;

 


        if (channelRow.name == 'edit') {
            prevPatchColor = workingArray.chColorArray[selectedChannel -1];
            prevPatchNumber = workingArray.chPatchArray[selectedChannel -1];
            inputSelected = true;
        
            editBanner.innerHtml = "";
          
            editFormDiv.style.display = "block";
            inputOnlyDiv.style.display = "block";
            editBanner.innerText = "Editing Input Channel: " + selectedChannel; 

            let testResult = document.querySelectorAll('#editFormId input');
            testResult[0].value = workingArray.chNameArray[selectedChannel -1];
            testResult[7].value = workingArray.chPatchArray[selectedChannel - 1];
            testResult[8].value = workingArray.chMicArray[selectedChannel - 1];
            testResult[9].value = workingArray.chStandArray[selectedChannel - 1];
           
            if (workingArray.chColorArray[selectedChannel - 1] == "white"){
                brownButt.checked = true;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
              
            }
            if (workingArray.chColorArray[selectedChannel - 1] == "brown"){
                brownButt.checked = true;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
              
            }
            if (workingArray.chColorArray[selectedChannel - 1] == "red"){
                brownButt.checked = false;
               
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                redButt.checked = true;
            }
               
            if (workingArray.chColorArray[selectedChannel - 1] == "orange"){
                brownButt.checked = false;
                redButt.checked = false;
             
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                orangeButt.checked = true;
            }
            if (workingArray.chColorArray[selectedChannel - 1] == "yellow"){
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
             
                greenButt.checked = false;
                blueButt.checked = false;
                yellowButt.checked = true;
            }
               
            if (workingArray.chColorArray[selectedChannel - 1] == "green"){
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
              
                blueButt.checked = false;
                greenButt.checked = true;
            }
            if (workingArray.chColorArray[selectedChannel - 1] == "blue"){
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = true;
            }
        
            return false;
        }
        if (channelRow.name == 'outputEdit'){
            prevPatchColor = workingArray.outChColorArray[selectedChannel -1];
            prevPatchNumber = workingArray.outChPatchArray[selectedChannel -1];
            inputSelected = false;
            editBanner.innerHTML = "";
            editFormDiv.style.display = "block";
            inputOnlyDiv.style.display = "none";
            editBanner.innerText = "Editing Output Channel: " + selectedChannel; 

            let testResult = document.querySelectorAll('#editFormId input');
            testResult[0].value = workingArray.outChNameArray[selectedChannel -1];
            testResult[7].value = workingArray.outChPatchArray[selectedChannel - 1];
           
           
            if (workingArray.outChColorArray[selectedChannel - 1] == "brown"){
              
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                brownButt.checked = true;
            }
            if (workingArray.outChColorArray[selectedChannel - 1] == "red"){
                brownButt.checked = false;
               
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                redButt.checked = true;
            }
               
            if (workingArray.outChColorArray[selectedChannel - 1] == "orange"){
                brownButt.checked = false;
                redButt.checked = false;
             
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                orangeButt.checked = true;
            }
            if (workingArray.outChColorArray[selectedChannel - 1] == "yellow"){
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
             
                greenButt.checked = false;
                blueButt.checked = false;
                yellowButt.checked = true;
            }
               
            if (workingArray.outChColorArray[selectedChannel - 1] == "green"){
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
              
                blueButt.checked = false;
                greenButt.checked = true;
            }
            if (workingArray.outChColorArray[selectedChannel - 1] == "blue"){
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = true;
            }

            return false;
        }

}
    
 function colorSort(colorId){



clearArray(colorSortPatch);

  
     switch (colorId) {
        case 0:
            if (currentColor == "brown"){
                currentColor = currentColorEnum.none
                colorSortingOn = false;
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
            }else{
                brownSortButt.style.background = "brown";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
                colorSortingOn = true;
                currentColor = currentColorEnum.brown
                for(i=0; i<workingArray.chNumArray.length; i++){
                    if (workingArray.chColorArray[i] == "brown"){
                    colorSortPatch.chColorArray.push("brown");
                    colorSortPatch.chNumArray.push(workingArray.chNumArray[i]);
                    colorSortPatch.chNameArray.push(workingArray.chNameArray[i]);
                    colorSortPatch.chPatchArray.push(workingArray.chPatchArray[i]);
                    colorSortPatch.chStandArray.push(workingArray.chStandArray[i]);
                    colorSortPatch.chMicArray.push(workingArray.chMicArray[i]);
                    }
                    
                }
                if (workingArray.outputs > 0){
    
                    for(o=0; o<workingArray.outChNumArray.length; o++){
    
                        if (workingArray.outChColorArray[o] == "brown"){
                            colorSortPatch.outChColorArray.push("brown");
                            colorSortPatch.outChNumArray.push(workingArray.outChNumArray[o]);
                            colorSortPatch.outChNameArray.push(workingArray.outChNameArray[o]);
                            colorSortPatch.outChPatchArray.push(workingArray.outChPatchArray[o]);
                         
                            }
                    }
                }
            }

            
            

            
        break;
        case 1:
           
            if (currentColor == "red"){
                currentColor = currentColorEnum.none
                colorSortingOn = false;
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
            }else{
                brownSortButt.style.background = "white";
                redSortButt.style.background = "red";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
                colorSortingOn = true;
                currentColor = currentColorEnum.red
                for(i=0; i<workingArray.chNumArray.length; i++){
                    if (workingArray.chColorArray[i] == "red"){
                    colorSortPatch.chColorArray.push("red");
                    colorSortPatch.chNumArray.push(workingArray.chNumArray[i]);
                    colorSortPatch.chNameArray.push(workingArray.chNameArray[i]);
                    colorSortPatch.chPatchArray.push(workingArray.chPatchArray[i]);
                    colorSortPatch.chStandArray.push(workingArray.chStandArray[i]);
                    colorSortPatch.chMicArray.push(workingArray.chMicArray[i]);
                    }
                    
                }
                if (workingArray.outputs > 0){
    
                    for(o=0; o<workingArray.outChNumArray.length; o++){
    
                        if (workingArray.outChColorArray[o] == "red"){
                            colorSortPatch.outChColorArray.push("red");
                            colorSortPatch.outChNumArray.push(workingArray.outChNumArray[o]);
                            colorSortPatch.outChNameArray.push(workingArray.outChNameArray[o]);
                            colorSortPatch.outChPatchArray.push(workingArray.outChPatchArray[o]);
                         
                            }
                    }
                }
            }
        break;
        case 2:
            if (currentColor == "orange"){
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
                currentColor = currentColorEnum.none
                colorSortingOn = false;
            }else{
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "orange";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
                colorSortingOn = true;
                currentColor = currentColorEnum.orange
                for(i=0; i<workingArray.chNumArray.length; i++){
                    if (workingArray.chColorArray[i] == "orange"){
                    colorSortPatch.chColorArray.push("orange");
                    colorSortPatch.chNumArray.push(workingArray.chNumArray[i]);
                    colorSortPatch.chNameArray.push(workingArray.chNameArray[i]);
                    colorSortPatch.chPatchArray.push(workingArray.chPatchArray[i]);
                    colorSortPatch.chStandArray.push(workingArray.chStandArray[i]);
                    colorSortPatch.chMicArray.push(workingArray.chMicArray[i]);
                    }
                    
                }
                if (workingArray.outputs > 0){
    
                    for(o=0; o<workingArray.outChNumArray.length; o++){
    
                        if (workingArray.outChColorArray[o] == "orange"){
                            colorSortPatch.outChColorArray.push("orange");
                            colorSortPatch.outChNumArray.push(workingArray.outChNumArray[o]);
                            colorSortPatch.outChNameArray.push(workingArray.outChNameArray[o]);
                            colorSortPatch.outChPatchArray.push(workingArray.outChPatchArray[o]);
                         
                            }
                    }
                }
            }
        break;
        case 3:
            if (currentColor == "yellow"){
                currentColor = currentColorEnum.none
                colorSortingOn = false;
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
            }else{
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "yellow";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
                colorSortingOn = true;
                currentColor = currentColorEnum.yellow
                for(i=0; i<workingArray.chNumArray.length; i++){
                    if (workingArray.chColorArray[i] == "yellow"){
                    colorSortPatch.chColorArray.push("yellow");
                    colorSortPatch.chNumArray.push(workingArray.chNumArray[i]);
                    colorSortPatch.chNameArray.push(workingArray.chNameArray[i]);
                    colorSortPatch.chPatchArray.push(workingArray.chPatchArray[i]);
                    colorSortPatch.chStandArray.push(workingArray.chStandArray[i]);
                    colorSortPatch.chMicArray.push(workingArray.chMicArray[i]);
                    }
                    
                }
                if (workingArray.outputs > 0){
    
                    for(o=0; o<workingArray.outChNumArray.length; o++){
    
                        if (workingArray.outChColorArray[o] == "yellow"){
                            colorSortPatch.outChColorArray.push("yellow");
                            colorSortPatch.outChNumArray.push(workingArray.outChNumArray[o]);
                            colorSortPatch.outChNameArray.push(workingArray.outChNameArray[o]);
                            colorSortPatch.outChPatchArray.push(workingArray.outChPatchArray[o]);
                         
                            }
                    }
                }
            }
        break;
        case 4:
            if (currentColor == "green"){
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
                currentColor = currentColorEnum.none
                colorSortingOn = false;
            }else{
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "green";
                blueSortButt.style.background = "white";
                colorSortingOn = true;
                currentColor = currentColorEnum.green
                for(i=0; i<workingArray.chNumArray.length; i++){
                    if (workingArray.chColorArray[i] == "green"){
                    colorSortPatch.chColorArray.push("green");
                    colorSortPatch.chNumArray.push(workingArray.chNumArray[i]);
                    colorSortPatch.chNameArray.push(workingArray.chNameArray[i]);
                    colorSortPatch.chPatchArray.push(workingArray.chPatchArray[i]);
                    colorSortPatch.chStandArray.push(workingArray.chStandArray[i]);
                    colorSortPatch.chMicArray.push(workingArray.chMicArray[i]);
                    }
                    
                }
                if (workingArray.outputs > 0){
    
                    for(o=0; o<workingArray.outChNumArray.length; o++){
    
                        if (workingArray.outChColorArray[o] == "green"){
                            colorSortPatch.outChColorArray.push("green");
                            colorSortPatch.outChNumArray.push(workingArray.outChNumArray[o]);
                            colorSortPatch.outChNameArray.push(workingArray.outChNameArray[o]);
                            colorSortPatch.outChPatchArray.push(workingArray.outChPatchArray[o]);
                         
                            }
                    }
                }
            }
        break;
        case 5:
            if (currentColor == "blue"){
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "white";
                currentColor = currentColorEnum.none
                colorSortingOn = false;
            }else{
                brownSortButt.style.background = "white";
                redSortButt.style.background = "white";
                orangeSortButt.style.background = "white";
                yellowSortButt.style.background = "white";
                greenSortButt.style.background = "white";
                blueSortButt.style.background = "blue";
                colorSortingOn = true;
                currentColor = currentColorEnum.blue
                for(i=0; i<workingArray.chNumArray.length; i++){
                    if (workingArray.chColorArray[i] == "blue"){
                    colorSortPatch.chColorArray.push("blue");
                    colorSortPatch.chNumArray.push(workingArray.chNumArray[i]);
                    colorSortPatch.chNameArray.push(workingArray.chNameArray[i]);
                    colorSortPatch.chPatchArray.push(workingArray.chPatchArray[i]);
                    colorSortPatch.chStandArray.push(workingArray.chStandArray[i]);
                    colorSortPatch.chMicArray.push(workingArray.chMicArray[i]);
                    }
                    
                }
                if (workingArray.outputs > 0){
    
                    for(o=0; o<workingArray.outChNumArray.length; o++){
    
                        if (workingArray.outChColorArray[o] == "blue"){
                            colorSortPatch.outChColorArray.push("blue");
                            colorSortPatch.outChNumArray.push(workingArray.outChNumArray[o]);
                            colorSortPatch.outChNameArray.push(workingArray.outChNameArray[o]);
                            colorSortPatch.outChPatchArray.push(workingArray.outChPatchArray[o]);
                         
                            }
                    }
                }
            }
        break;
     
        default:
            console.log("DEFAULT SWITCH OVER HERE");
        break;
     }
     populateTable();
}