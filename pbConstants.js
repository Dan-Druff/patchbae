console.log("HI FROM PBconstatnts");

const { jsPDF } = window.jspdf;
const constInputNumberArray = [8,12,16,24,32,48,56,64,96,128];
const constOutputNumberArray = [0,4,8,12,16,24,32,48,128];
const tableTop = `
<table id='inputTableId' onclick='return tableClick(event);'>
<caption>INPUTS</caption>
<colgroup>
<col span='1' class='chCol'>
<col span='1' class='nameCol'>
<col span='1' class='patchCol'>
<col span='1' class='micCol'>
<col span='1' class='standCol'>
</colgroup>
<thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th><th>MIC/DI</th><th>STAND</th></tr></thead>
<tbody>
`;
const newTableTop = `
<table id='inputTableId'>
<caption>INPUTS</caption>
<colgroup>
<col span='1' class='chCol'>
<col span='1' class='nameCol'>
<col span='1' class='patchCol'>
<col span='1' class='micCol'>
<col span='1' class='standCol'>
</colgroup>
<thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th><th>MIC/DI</th><th>STAND</th></tr></thead>
<tbody>
`;
const tableBottom = "</tbody></table>";
const outputTableTop = `
<br /><table id='outputTableId' onclick='return tableClick(event);'>
<caption>OUTPUTS</caption>
<colgroup>
<col span='1' class='outChCol'>
<col span='1' class='outNameCol'>
<col span='1' class='outPatchCol'>
<col span='1' class='outNotesCol'>
</colgroup>
<thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th><th>NOTES</th></tr></thead>
<tbody>
`;
const newOutputTableTop = `
<br /><table id='outputTableId'>
<caption>OUTPUTS</caption>
<colgroup>
<col span='1' class='outChCol'>
<col span='1' class='outNameCol'>
<col span='1' class='outPatchCol'>
<col span='1' class='outNotesCol'>
</colgroup>
<thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th><th>NOTES</th></tr></thead>
<tbody>
`;
const editMessage1 = "<p>↑ Sort by Color ↑</p><p>↓ Select Channel to Edit ↓</p>";
const editMessage2 = "<p>↑ Sort by Color ↑</p><hr />";

const instructionsDiv = document.getElementById("instructionsDivId");

const tableDiv = document.getElementById("tableDivId");
const editBanner = document.getElementById("editHeaderId");
const inputOnly = document.getElementById("inputOnlyId");
const editFormDiv = document.getElementById("editFormDivId");

const appState = {
none:"none",
setup:"setup",
patching:"patching",
editing:"editing",
sorting:"sorting",
brown:"brown",
red:"red",
orange:"orange",
yellow:"yellow",
green:"green",
blue:"blue",
white:"white",
saving:"saving",
};

const brownButt = document.getElementById("brownId");
const redButt = document.getElementById("redId");
const orangeButt = document.getElementById("orangeId");
const yellowButt = document.getElementById("yellowId");
const greenButt = document.getElementById("greenId");
const blueButt = document.getElementById("blueId");
const noneButt = document.getElementById("noneId");

const whiteSortButton = document.getElementById("whiteSortId");
const brownSortButton = document.getElementById("brownSortId");
const redSortButton = document.getElementById("redSortId");
const orangeSortButton = document.getElementById("orangeSortId");
const yellowSortButton = document.getElementById("yellowSortId");
const greenSortButton = document.getElementById("greenSortId");
const blueSortButton = document.getElementById("blueSortId");

const optionsDiv = document.getElementById("optionsDivId");
const confirmDiv = document.getElementById("confirmModalId");
const confirmMessageDiv = document.getElementById("confirmMessageDivId");
const nevermindButton = document.getElementById("nevermindButtonId");
const imSureButton = document.getElementById("imSureButtonId");
const errorDiv = document.getElementById("errorModalId");
const errorMessageArea = document.getElementById("errorDivId");
const gotItButton = document.getElementById("gotItButtonId");
const signupDiv = document.getElementById("signupModalId");
const loginDiv = document.getElementById("loginModalId");
const accountDiv = document.getElementById("accountModalId");
const savedFileListDiv = document.getElementById("savedFileListId");

const colorSortArea = document.getElementById("colorSortDivId");
const pdfButton = document.getElementById("getPdfButton");

const newButton = document.getElementById("newButtonId");
const signupButton = document.getElementById("signupButtonId");
const loginButton = document.getElementById("loginButtonId");
const accountButton = document.getElementById("accountButtonId");
const logoutButton = document.getElementById("logoutButtonId");
const saveButton = document.getElementById("saveButtonId");

const optionsForm = document.getElementById("optionsFormId");
const optionsExitButton = document.getElementById("optionsExitButtonId");

const editForm = document.getElementById("editFormId");
const loginForm = document.getElementById("loginFormId");
const signupForm = document.getElementById("signupFormId");

const loggedOutLinks = document.querySelectorAll('.loggedOut');
const loggedInLinks = document.querySelectorAll('.loggedIn');

const accountHeader = document.getElementById("accountHeaderId");
const accountExitButt = document.getElementById("accountExitId");
var brownSort = new Patch("brown", 0, 0, "brown channels", "");
var redSort = new Patch("red", 0, 0, "red channels", "");
var orangeSort = new Patch("orange", 0, 0, "orange channels", "");
var yellowSort = new Patch("yellow", 0, 0, "yellow channels", "");
var greenSort = new Patch("green", 0, 0, "green channels", "");
var blueSort = new Patch("blue", 0, 0, "blue channels", "");
var whiteSort = new Patch("none", 0, 0, "channels with no color", "");
var workingObject = new Patch("working", 0, 0, "", "");
var sampleObject = new Patch("working", 0, 0, "Select 'NEW' to start", "");

const brown = "#a18948";
const red = "#f74f4f";
const orange = "#f7ae4f";
const yellow = "#f6e61f";
const green = "#26c423";
const blue = "#6094e0";
const white = "#e0e0e0";


var editingOn = false;
var inputSelected = true;
var selectedChannel = 0;
var colorSortingOn = false;
var prevPatchColor = "";
var prevPatchNumber = 0;
var currentState = appState.none;
var selectedColor = white;
var userId = "";
var userEmail = "";
var loadedPatchesArray = [];
var usersSavedPatches = 0;
var userEmail = "";
