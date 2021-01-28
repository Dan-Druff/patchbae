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
        `;
    }
theTable += outputTableRows;
theTable += tableBottom;
}

// SPIT OUT HTML TO TABLE DIV HERE 
tableDiv.innerHTML = theTable;

}

function tableClick (e){
console.log("TABLE CLICK");

var channelRow = e.target || e.srcElement;
selectedChannel = channelRow.value;
workingObject.selectedChannel = channelRow.value + 1;

if(channelRow.name == 'edit'){}
if(channelRow.name == 'outputEdit'){}

    return false
}