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
        <td>${patch.outChNotesArray[o]}</td></tr>
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

function sortPatches (){

brownSort.clearPatch();
redSort.clearPatch();
orangeSort.clearPatch();
yellowSort.clearPatch();
greenSort.clearPatch();
blueSort.clearPatch();
whiteSort.clearPatch();

for(i=0; i<workingObject.inChNumArray.length; i++){
    switch (workingObject.inChColorArray[i]) {
        case brown:
            brownSort.inChNumArray.push(workingObject.inChNumArray[i]);
            brownSort.inChNameArray.push(workingObject.inChNameArray[i]);
            brownSort.inChPatchArray.push(workingObject.inChPatchArray[i]);
            brownSort.inChMicArray.push(workingObject.inChMicArray[i]);
            brownSort.inChStandArray.push(workingObject.inChStandArray[i]);
            brownSort.inChNotesArray.push(workingObject.inChNotesArray[i]);
            brownSort.inChColorArray.push(brown);
            break;
        case red:
            redSort.inChNumArray.push(workingObject.inChNumArray[i]);
            redSort.inChNameArray.push(workingObject.inChNameArray[i]);
            redSort.inChPatchArray.push(workingObject.inChPatchArray[i]);
            redSort.inChMicArray.push(workingObject.inChMicArray[i]);
            redSort.inChStandArray.push(workingObject.inChStandArray[i]);
            redSort.inChNotesArray.push(workingObject.inChNotesArray[i]);
            redSort.inChColorArray.push(red);
            break;
        case orange:
            orangeSort.inChNumArray.push(workingObject.inChNumArray[i]);
            orangeSort.inChNameArray.push(workingObject.inChNameArray[i]);
            orangeSort.inChPatchArray.push(workingObject.inChPatchArray[i]);
            orangeSort.inChMicArray.push(workingObject.inChMicArray[i]);
            orangeSort.inChStandArray.push(workingObject.inChStandArray[i]);
            orangeSort.inChNotesArray.push(workingObject.inChNotesArray[i]);
            orangeSort.inChColorArray.push(orange);
            break;
        case yellow:
            yellowSort.inChNumArray.push(workingObject.inChNumArray[i]);
            yellowSort.inChNameArray.push(workingObject.inChNameArray[i]);
            yellowSort.inChPatchArray.push(workingObject.inChPatchArray[i]);
            yellowSort.inChMicArray.push(workingObject.inChMicArray[i]);
            yellowSort.inChStandArray.push(workingObject.inChStandArray[i]);
            yellowSort.inChNotesArray.push(workingObject.inChNotesArray[i]);
            yellowSort.inChColorArray.push(yellow);
            break;
        case green:
            greenSort.inChNumArray.push(workingObject.inChNumArray[i]);
            greenSort.inChNameArray.push(workingObject.inChNameArray[i]);
            greenSort.inChPatchArray.push(workingObject.inChPatchArray[i]);
            greenSort.inChMicArray.push(workingObject.inChMicArray[i]);
            greenSort.inChStandArray.push(workingObject.inChStandArray[i]);
            greenSort.inChNotesArray.push(workingObject.inChNotesArray[i]);
            greenSort.inChColorArray.push(green);
            break;
        case blue:
            blueSort.inChNumArray.push(workingObject.inChNumArray[i]);
            blueSort.inChNameArray.push(workingObject.inChNameArray[i]);
            blueSort.inChPatchArray.push(workingObject.inChPatchArray[i]);
            blueSort.inChMicArray.push(workingObject.inChMicArray[i]);
            blueSort.inChStandArray.push(workingObject.inChStandArray[i]);
            blueSort.inChNotesArray.push(workingObject.inChNotesArray[i]);
            blueSort.inChColorArray.push(blue);
            break;
        case white:
            whiteSort.inChNumArray.push(workingObject.inChNumArray[i]);
            whiteSort.inChNameArray.push(workingObject.inChNameArray[i]);
            whiteSort.inChPatchArray.push(workingObject.inChPatchArray[i]);
            whiteSort.inChMicArray.push(workingObject.inChMicArray[i]);
            whiteSort.inChStandArray.push(workingObject.inChStandArray[i]);
            whiteSort.inChNotesArray.push(workingObject.inChNotesArray[i]);
            whiteSort.inChColorArray.push(white);
            break;            
    
        default:
            break;
    }
}


for(o=0; o<workingObject.outChNumArray.length; o++){
    switch (workingObject.outChColorArray[o]) {
        case brown:
            brownSort.outChNumArray.push(workingObject.outChNumArray[o]);
            brownSort.outChNameArray.push(workingObject.outChNameArray[o]);
            brownSort.outChPatchArray.push(workingObject.outChPatchArray[o]);
            brownSort.outChNotesArray.push(workingObject.outChNotesArray[o]);
            brownSort.outChColorArray.push(brown);
            break;
        case red:
            redSort.outChNumArray.push(workingObject.outChNumArray[o]);
            redSort.outChNameArray.push(workingObject.outChNameArray[o]);
            redSort.outChPatchArray.push(workingObject.outChPatchArray[o]);
            redSort.outChNotesArray.push(workingObject.outChNotesArray[o]);
            redSort.outChColorArray.push(red);
            break;
        case orange:
            orangeSort.outChNumArray.push(workingObject.outChNumArray[o]);
            orangeSort.outChNameArray.push(workingObject.outChNameArray[o]);
            orangeSort.outChPatchArray.push(workingObject.outChPatchArray[o]);
            orangeSort.outChNotesArray.push(workingObject.outChNotesArray[o]);
            orangeSort.outChColorArray.push(orange);
            break;
        case yellow:
            yellowSort.outChNumArray.push(workingObject.outChNumArray[o]);
            yellowSort.outChNameArray.push(workingObject.outChNameArray[o]);
            yellowSort.outChPatchArray.push(workingObject.outChPatchArray[o]);
            yellowSort.outChNotesArray.push(workingObject.outChNotesArray[o]);
            yellowSort.outChColorArray.push(yellow);
            break;
        case green:
            greenSort.outChNumArray.push(workingObject.outChNumArray[o]);
            greenSort.outChNameArray.push(workingObject.outChNameArray[o]);
            greenSort.outChPatchArray.push(workingObject.outChPatchArray[o]);
            greenSort.outChNotesArray.push(workingObject.outChNotesArray[o]);
            greenSort.outChColorArray.push(green);
            break;
        case blue:
            blueSort.outChNumArray.push(workingObject.outChNumArray[o]);
            blueSort.outChNameArray.push(workingObject.outChNameArray[o]);
            blueSort.outChPatchArray.push(workingObject.outChPatchArray[o]);
            blueSort.outChNotesArray.push(workingObject.outChNotesArray[o]);
            blueSort.outChColorArray.push(blue);
            break;
        case white:
            whiteSort.outChNumArray.push(workingObject.outChNumArray[o]);
            whiteSort.outChNameArray.push(workingObject.outChNameArray[o]);
            whiteSort.outChPatchArray.push(workingObject.outChPatchArray[o]);
            whiteSort.outChNotesArray.push(workingObject.outChNotesArray[o]);
            whiteSort.outChColorArray.push(white);
            break;

    
        default:
            break;
    }
}

}
function killModals(){
    optionsDiv.style.display = "none";
    signupDiv.style.display = "none";
    loginDiv.style.display = "none";
    accountDiv.style.display = "none";
    errorDiv.style.display = "none";
    confirmDiv.style.display = "none";
    signupForm.reset();
    loginForm.reset();
    optionsForm.reset();
}
function setupUi(user){

    if(user){

        loggedInLinks.forEach(item => item.style.display = 'inline');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        console.log("DO LOGGED IN UI STUFF", user.email);

    }else{
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'inline');
        console.log("DO LOGGED OUT UI STUFF");
    }
   
}
newButton.onclick = function(){
    currentState = appState.setup;
optionsDiv.style.display = "block";
};
signupButton.onclick = function(){
    console.log("SIGNUP CLICK");
signupDiv.style.display = "block";
};
loginButton.onclick = function(){
loginDiv.style.display = "block";
};
accountButton.onclick = function(){
accountDiv.style.display = "block";
};

logoutButton.onclick = function(){
    auth.signOut().then(() => {
        console.log("LOGOUT BUTT");

    });


};

saveButton.onclick = function(){
console.log("SAVE BUTT");
};
optionsExitButton.onclick = function(){
    killModals();
}
nevermindButton.onclick = function(){
    confirmDiv.style.display = "none";
};
imSureButton.onclick = function(){
    if(currentState == appState.setup){
        killModals();
        currentState = appState.patching;
        populateTable(workingObject);
    }


};
gotItButton.onclick = function(){
errorDiv.style.display = "none";
};
whiteSortButton.onclick = function(){

    if(colorSortingOn){

        if(selectedColor == white){
            // TOGGLING COLOR SORT OFF
            colorSortingOn = false;
            populateTable(workingObject);
        }else{
            //COMING FROM ANOTHER COLOR SORT COLOR
            selectedColor = white;
            colorSortingOn = true;
            sortPatches();
            populateTable(whiteSort);
        }
        
        
    }else{
        sortPatches();
        populateTable(whiteSort);
        colorSortingOn = true;
        selectedColor = white;
        console.log("WHITE SORT BUTTON toggling on");
    }
    
};
brownSortButton.onclick = function(){
    if(colorSortingOn){

        if(selectedColor == brown){
            // TOGGLING COLOR SORT OFF
            colorSortingOn = false;
            populateTable(workingObject);
        }else{
            //COMING FROM ANOTHER COLOR SORT COLOR
            selectedColor = brown;
            colorSortingOn = true;
            sortPatches();
            populateTable(brownSort);
        }
        
        
    }else{
        sortPatches();
        populateTable(brownSort);
        colorSortingOn = true;
        selectedColor = brown;
        console.log("brown SORT BUTTON toggling on");
    }
};
redSortButton.onclick = function(){
    if(colorSortingOn){

        if(selectedColor == red){
            // TOGGLING COLOR SORT OFF
            colorSortingOn = false;
            populateTable(workingObject);
        }else{
            //COMING FROM ANOTHER COLOR SORT COLOR
            selectedColor = red;
            colorSortingOn = true;
            sortPatches();
            populateTable(redSort);
        }
        
        
    }else{
        sortPatches();
        populateTable(redSort);
        colorSortingOn = true;
        selectedColor = red;
        console.log("red SORT BUTTON toggling on");
    }
};
orangeSortButton.onclick = function(){
    if(colorSortingOn){

        if(selectedColor == orange){
            // TOGGLING COLOR SORT OFF
            colorSortingOn = false;
            populateTable(workingObject);
        }else{
            //COMING FROM ANOTHER COLOR SORT COLOR
            selectedColor = orange;
            colorSortingOn = true;
            sortPatches();
            populateTable(orangeSort);
        }
        
        
    }else{
        sortPatches();
        populateTable(orangeSort);
        colorSortingOn = true;
        selectedColor = orange;
        console.log("orange SORT BUTTON toggling on");
    }
};
yellowSortButton.onclick = function(){
    if(colorSortingOn){

        if(selectedColor == yellow){
            // TOGGLING COLOR SORT OFF
            colorSortingOn = false;
            populateTable(workingObject);
        }else{
            //COMING FROM ANOTHER COLOR SORT COLOR
            selectedColor = yellow;
            colorSortingOn = true;
            sortPatches();
            populateTable(yellowSort);
        }
        
        
    }else{
        sortPatches();
        populateTable(yellowSort);
        colorSortingOn = true;
        selectedColor = yellow;
        console.log("yellow SORT BUTTON toggling on");
    }
};
greenSortButton.onclick = function(){
    if(colorSortingOn){

        if(selectedColor == green){
            // TOGGLING COLOR SORT OFF
            colorSortingOn = false;
            populateTable(workingObject);
        }else{
            //COMING FROM ANOTHER COLOR SORT COLOR
            selectedColor = green;
            colorSortingOn = true;
            sortPatches();
            populateTable(greenSort);
        }
        
        
    }else{
        sortPatches();
        populateTable(greenSort);
        colorSortingOn = true;
        selectedColor = green;
        console.log("green SORT BUTTON toggling on");
    }
};
blueSortButton.onclick = function(){
    if(colorSortingOn){

        if(selectedColor == blue){
            // TOGGLING COLOR SORT OFF
            colorSortingOn = false;
            populateTable(workingObject);
        }else{
            //COMING FROM ANOTHER COLOR SORT COLOR
            selectedColor = blue;
            colorSortingOn = true;
            sortPatches();
            populateTable(blueSort);
        }
        
        
    }else{
        sortPatches();
        populateTable(blueSort);
        colorSortingOn = true;
        selectedColor = blue;
        console.log("blue SORT BUTTON toggling on");
    }
};
optionsForm.addEventListener('submit', (e) => {
    e.preventDefault();
let sessionName = document.getElementById("sessionNameId").value;
let sessionNotes = document.getElementById("sessionNotesId").value;

let chosenInputs = document.getElementsByName("inputs");
let chosenOutputs = document.getElementsByName("outputs");
let tempInputs = 0;
let tempOutputs = 0;


for (i=0; i<chosenInputs.length; i++){
    if(chosenInputs[i].checked){
    tempInputs = constInputNumberArray[i];
    }
}
for(o=0; o<chosenOutputs.length; o++){
    if(chosenOutputs[o].checked){
        tempOutputs = constOutputNumberArray[o];
    }
}



let tempPatch = new Patch("",tempInputs,tempOutputs,sessionName,sessionNotes);
workingObject.clearPatch();
workingObject = tempPatch;
console.log(workingObject);

let confirmMessage = `
<h4>Session Name: ${sessionName}</h4><br />
<h4>Inputs: ${tempInputs}</h4><br />
<h4>Outputs: ${tempOutputs}</h4><br />
<h4>Notes: ${sessionNotes}</h4>
`;

confirmDiv.style.display = "block";
confirmMessageDiv.innerHTML = confirmMessage;

    console.log("OPTION FORM SUBMIT");
})
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("EDIT SUBMIT YOU");

    let result = Array.from(document.querySelectorAll('#editFormId input')).reduce((acc,input) => ({...acc, [input.id]:input.value}),{});
    let chosenColor = document.getElementsByName("color");
    let colorString = "";
    //WILL THIS COME BACK TO BITE ME IN COLOR SORT MODE BELOW?
    let arrayPosition = selectedChannel - 1;
        
    if (chosenColor[0].checked){
        colorString = brown;
    }
  
    if (chosenColor[1].checked){
        colorString = red;
    }
    if (chosenColor[2].checked){
        colorString = orange;
    }
    if (chosenColor[3].checked){
        colorString = yellow;
    }
    if (chosenColor[4].checked){

        colorString = green;
    }
    if (chosenColor[5].checked){
        colorString = blue;
    }
    if (chosenColor[6].checked){
        colorString = white;
    }


    let anyErrors = false;

if(prevPatchNumber == result.patchNumberId && prevPatchColor == colorString){
    // JUST A RE_EDIT HERE> DONT CHECK FOR ERRORS>
}else{
    // NOT A RE_EDIT> MUST CHECK FOR ERRORS

    for(i=0; i<workingObject.inChNumArray.length; i++){
        if(workingObject.inChColorArray[i] == colorString && workingObject.inChPatchArray[i] == result.patchNumberId){
          
            anyErrors = true;
        }
    }
    for(o=0; o<workingObject.outChNumArray.length; o++){
        if(workingObject.outChColorArray[o] == colorString && workingObject.outChPatchArray[o] == result.patchNumberId){
        
            anyErrors = true;
        }
    }
    
}



    if(anyErrors){
        let errorMessage = `
        <h3>Whoops! Looks like that patch channel is in use....</h3>
        `;
        errorDiv.style.display = "block";
        errorMessageArea.innerHTML = errorMessage;

        console.log("ERROR MESSAGE, PATCH CHANNEL IN USE ALREADY");
    }else{
        console.log("NO ERRORS, GO AHEAD AND PATCH");
        if(inputSelected){
            // INPUT EDIT PATCH STAYS THE SAME
            workingObject.inChNameArray[arrayPosition] = result.nameId;
            workingObject.inChColorArray[arrayPosition] = colorString;
            workingObject.inChPatchArray[arrayPosition] = result.patchNumberId;
            workingObject.inChMicArray[arrayPosition] = result.micId;
            workingObject.inChNotesArray[arrayPosition] = result.notesId;
            workingObject.inChStandArray[arrayPosition] = result.standId;
            }else{
            // OUTPUT EDIT PATCH STAYS THE SAME
            workingObject.outChNameArray[arrayPosition] = result.nameId;
            workingObject.outChColorArray[arrayPosition] = colorString;
            workingObject.outChPatchArray[arrayPosition] = result.patchNumberId;
            workingObject.outChNotesArray[arrayPosition] = result.notesId;
            }
          editFormDiv.style.display = "none";
            populateTable(workingObject);
    }







})
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("signupForm Button");
    const email = signupForm['signupEmailId'].value;
    const password1 = signupForm['signupPassword1Id'].value;
    const password2 = signupForm['signupPassword2Id'].value;

    auth.createUserWithEmailAndPassword(email, password1).then(cred => {
        console.log("SUCCES CREATING USER get uid here" + cred);
        return db.collection('users').doc(cred.user.uid).set({
            testField: "testData"
        })
    }).then(() => {
        console.log("FINISHED SETTING USER UID DATA");
    });

})
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("loginForm Submit button");
    const email = loginForm['loginEmailId'].value;
    const password = loginForm['loginPasswordId'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
       console.log(cred.user.uid);
       // GET USER DOCUMENT HERE
       return db.collection('users').doc(cred.user.uid).get().then(doc => {
           console.log("HERE IS RETREIVED DATA: " + doc.data().testField);
           storePatchToDataBase();
       })
    });
})

function storePatchToDataBase(patch){
    let pRef = db.collection('users').doc('CZwYsfJvwgZTjEuqPma3L2tHnPG3').collection('ppp');
  let myUser = auth.currentUser.uid;
console.log(workingObject.dateCreated);
console.log(myUser + pRef);
db.collection('users').doc
}