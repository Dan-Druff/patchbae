console.log("Hi From Constants");

const tableTop = "<table id='inputTableId' onclick='return handleClick(event);'><caption>INPUTS</caption><colgroup><col span='1' class='chCol'><col span='1' class='nameCol'><col span='1' class='patchCol'><col span='1' class='micCol'><col span='1' class='standCol'></colgroup><thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th><th>MIC/DI</th><th>STAND</th></tr></thead><tbody>";
var tableRows = "";
var outputTableRows = "";
const tableBottom = "</tbody></table>";
const outputTableTop = "<hr /><br /><table id='outputTableId' onclick='return handleClick(event);'><caption>OUTPUTS</caption><colgroup><col span='1' class='chCol'><col span='1' class='nameCol'><col span='1' class='patchCol'></colgroup><thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th></tr></thead><tbody>";

const currentColorEnum = {
none: "none",
brown: "brown",
red: "red",
orange: "orange",
yellow: "yellow",
green: "green",
blue: "blue",
};
var currentColor = currentColorEnum.none;

const constInputNumberArray = [8,12,16,24,32,48,56,64,96,128];
const constOutputNumberArray = [0,4,8,12,16,24,32,48,128];
const blankPatch = {
    "dateCreated":null,
    "dateModified":null,
    "id":"",
    "name":"",
    "user":"",
    "inputs":0,
    "outputs":0,
    "notes":"",
    "chNumArray":[],
    "chNameArray":[],
    "chColorArray":[],
    "chPatchArray":[],
    "chMicArray":[],
    "chStandArray":[],
    "outChNumArray":[],
    "outChNameArray":[],
    "outChColorArray":[],
    "outChPatchArray":[],
    
};
var colorSortPatch = {
    "dateCreated":null,
    "dateModified":null,
    "id":"",
    "name":"",
    "user":"",
    "inputs":0,
    "outputs":0,
    "notes":"",
    "chNumArray":[],
    "chNameArray":[],
    "chColorArray":[],
    "chPatchArray":[],
    "chMicArray":[],
    "chStandArray":[],
    "outChNumArray":[],
    "outChNameArray":[],
    "outChColorArray":[],
    "outChPatchArray":[],
    
};
var patchObject = {
    "dateCreated":null,
    "dateModified":null,
    "id":"",
    "name":"",
    "user":"",
    "inputs":8,
    "outputs":0,
    "chNumArray":[1,2,3,4,5,6,7,8],
    "chNameArray":["Kick","Snare","Hats","T1","T2","T3","OHSR","OHSL"],
    "chColorArray":["brown","red","orange","yellow","green","blue","brown","red"],
    "chPatchArray":[1,2,3,4,5,6,7,8],
    "chMicArray":["91","57","184","421","421","421","81","81"],
    "chStandArray":["N/A","Short","Short","Short","Short","Short","Tall","Tall"],
    "outChNumArray":[],
    "outChNameArray":[],
    "outChColorArray":[],
    "outChPatchArray":[],
};

const brownButt = document.getElementById("brownId");
const redButt = document.getElementById("redId");
const orangeButt = document.getElementById("orangeId");
const yellowButt = document.getElementById("yellowId");
const greenButt = document.getElementById("greenId");
const blueButt = document.getElementById("blueId");

const cancelButt = document.getElementById("optionCancelId");
const confirmButt = document.getElementById("optionConfirmId");
const newButt = document.getElementById("newButtonId");
const nameDisp = document.getElementById("optionNameId");
const inputsDisp = document.getElementById("optionInputsId");
const outputsDisp = document.getElementById("optionOutputsId");
const notesDisp = document.getElementById("optionNotesId");
const editBanner = document.getElementById("editHeaderId");
const editFormDiv = document.getElementById("editFormDivId");
const options = document.getElementById("optionsDivId");
const exitOptionsButt = document.getElementById("exitButtonId");
const errorDiv = document.getElementById("errorDivID");
const tableDiv = document.getElementById("tableDivId");
const colorSelect = document.getElementById("editFormId");

const inputOnlyDiv = document.getElementById("inputOnlyId");

const brownSortButt = document.getElementById("brownSortButtonId");
const redSortButt = document.getElementById("redSortButtonId");
const orangeSortButt = document.getElementById("orangeSortButtonId");
const yellowSortButt = document.getElementById("yellowSortButtonId");
const greenSortButt = document.getElementById("greenSortButtonId");
const blueSortButt = document.getElementById("blueSortButtonId");
// const editName = document.getElementById("nameId").value;
// const editPatch = document.getElementById("patchNumberId").value;
// const editMic = document.getElementById("micId").value;
// const editStand = document.getElementById("standId").value;


var editingOn = false;
var inputSelected = true;
var workingArray = blankPatch;
var selectedChannel = 0;
var colorSortingOn = false;
var prevPatchColor = "";
var prevPatchNumber = 0;


