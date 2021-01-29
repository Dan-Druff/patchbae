console.log("HI FROM PBfunctions");



function populateTable(patch){
    let tableRows = "";
    let outputTableRows = "";
    let theTitleBar = `<h2>${workingObject.name}</h2>`;
console.log("IN POLPULATE TABLE AND COLOR ARRAY IS: " + patch.inChColorArray);
    for(i=0; i<patch.inChNumArray.length; i++){
        tableRows += `
        <tr style='background-color:${patch.inChColorArray[i]}'>
        <td><form name='channel${i+1}' action='#'><input id='edit${i+1}' type='submit' name='edit' value='${patch.inChNumArray[i]}'></form></td>
        <td>${patch.inChNameArray[i]}</td>
        <td>${patch.inChPatchArray[i]}</td>
        <td>${patch.inChMicArray[i]}</td>
        <td>${patch.inChStandArray[i]}</td></tr>
        `;
    }
let theTable = theTitleBar + tableTop + tableRows + tableBottom;

if(patch.outChNumArray.length > 0){
    theTable += outputTableTop;

    for(o=0; o<patch.outChNumArray.length; o++){
        outputTableRows += `
        <tr style='background-color:${patch.outChColorArray[o]}'>
        <td><form name='outputChannel${o+1}' action='#'>
        <input id='outputEdit${o+1}' type='submit' name='outputEdit' value='${patch.outChNumArray[o]}'></form></td>
        <td>${patch.outChNameArray[o]}</td>
        <td>${patch.outChPatchArray[o]}</td>
        <td>${patch.outChNotesArray[o]}<td>
        `;
    }
theTable += outputTableRows;
theTable += tableBottom;
}

// SPIT OUT HTML TO TABLE DIV HERE 
tableDiv.innerHTML = theTable;

}

function tableClick (e){

var channelRow = e.target || e.srcElement;
selectedChannel = channelRow.value;
 
console.log("Selected Channel " + selectedChannel);

editFormDiv.style.display = "block";

let formElements = document.querySelectorAll('#editFormId input');


if(channelRow.name == 'edit'){
    // INPUT SELECTED

prevPatchColor = workingObject.inChColorArray[selectedChannel - 1];
prevPatchNumber = workingObject.inChPatchArray[selectedChannel - 1];
editBanner.innerText = "Editing Input Channel: " + selectedChannel;
inputOnly.style.display = "block";
inputSelected = true;
formElements[0].value = workingObject.inChNameArray[selectedChannel - 1];
formElements[8].value = workingObject.inChPatchArray[selectedChannel - 1];
formElements[9].value = workingObject.inChMicArray[selectedChannel - 1];
formElements[10].value = workingObject.inChStandArray[selectedChannel - 1];
formElements[11].value = workingObject.inChNotesArray[selectedChannel - 1];

switch (workingObject.inChColorArray[selectedChannel - 1]) {
    case brown:
                
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                noneButt.checked = false;
                brownButt.checked = true;

        break;
    case red:
                brownButt.checked = false;
                noneButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                redButt.checked = true;
        break;
    case orange:
                brownButt.checked = false;
                redButt.checked = false;
                noneButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                orangeButt.checked = true;
        break;
    case yellow:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                noneButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                yellowButt.checked = true;
        break;
    case green:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                noneButt.checked = false;

                blueButt.checked = false;
                greenButt.checked = true;
        break;
    case blue:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
               
                noneButt.checked = false;
                blueButt.checked = true;
        break;
    case white:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                noneButt.checked = true;
        break;

    default:
        break;
}


}
if(channelRow.name == 'outputEdit'){
    // OUTPUT SELECTED
    inputOnly.style.display = "none";

    prevPatchColor = workingObject.outChColorArray[selectedChannel - 1];
    prevPatchNumber = workingObject.outChPatchArray[selectedChannel - 1];

    editBanner.innerText = "Editing Output Channel: " + selectedChannel;
    inputSelected = false;
    formElements[0].value = workingObject.outChNameArray[selectedChannel - 1];
    formElements[8].value = workingObject.outChPatchArray[selectedChannel - 1];
    formElements[11].value = workingObject.outChNotesArray[selectedChannel - 1];


switch (workingObject.outChColorArray[selectedChannel - 1]) {
    case brown:
                
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                noneButt.checked = false;
                brownButt.checked = true;

        break;
    case red:
                brownButt.checked = false;
                noneButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                redButt.checked = true;
        break;
    case orange:
                brownButt.checked = false;
                redButt.checked = false;
                noneButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                orangeButt.checked = true;
        break;
    case yellow:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                noneButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                yellowButt.checked = true;
        break;
    case green:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                noneButt.checked = false;

                blueButt.checked = false;
                greenButt.checked = true;
        break;
    case blue:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
               
                noneButt.checked = false;
                blueButt.checked = true;
        break;
    case white:
                brownButt.checked = false;
                redButt.checked = false;
                orangeButt.checked = false;
                yellowButt.checked = false;
                greenButt.checked = false;
                blueButt.checked = false;
                noneButt.checked = true;
        break;

    default:
        break;
}







}

    return false
}