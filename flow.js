console.log("Hi from flow yo");

for (i=0; i<patchObject.chNumArray.length; i++){
console.log(patchObject.chNameArray[i]);
tableRows += "<tr style='background-color:";
tableRows += patchObject.chColorArray[i];
tableRows += "'><td><form name='channel";
tableRows += i + 1;
tableRows += "' action='#'><input id='edit";
tableRows += i + 1;
tableRows += "' type='submit' name='edit' value='";
tableRows += i + 1;
tableRows += "'></form></td><td style='background-color:white;'>";
tableRows += patchObject.chNameArray[i];
tableRows += "</td><td>";
tableRows += patchObject.chPatchArray[i];
tableRows += "</td><td>";
tableRows += patchObject.chMicArray[i];
tableRows += "</td><td>";
tableRows += patchObject.chStandArray[i];
tableRows += "</td></tr>";
}

let theTable = tableTop + tableRows + tableBottom;
tableDiv.innerHTML = theTable;

