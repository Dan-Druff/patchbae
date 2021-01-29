console.log("HI FROM PBconstatnts");

const { jsPDF } = window.jspdf;

const tableTop = "<table id='inputTableId' onclick='return tableClick(event);'><caption>INPUTS</caption><colgroup><col span='1' class='chCol'><col span='1' class='nameCol'><col span='1' class='patchCol'><col span='1' class='micCol'><col span='1' class='standCol'></colgroup><thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th><th>MIC/DI</th><th>STAND</th></tr></thead><tbody>";
const tableBottom = "</tbody></table>";
const outputTableTop = "<hr /><br /><table id='outputTableId' onclick='return tableClick(event);'><caption>OUTPUTS</caption><colgroup><col span='1' class='outChCol'><col span='1' class='outNameCol'><col span='1' class='outPatchCol'><col span='1' class='outNotesCol'></colgroup><thead><tr><th>CH #</th><th>NAME</th><th>PATCH</th><th>NOTES</th></tr></thead><tbody>";

const tableDiv = document.getElementById("tableDivId");
const editBanner = document.getElementById("editHeaderId");
const inputOnly = document.getElementById("inputOnlyId");
const editFormDiv = document.getElementById("editFormDivId");

const brownButt = document.getElementById("brownId");
const redButt = document.getElementById("redId");
const orangeButt = document.getElementById("orangeId");
const yellowButt = document.getElementById("yellowId");
const greenButt = document.getElementById("greenId");
const blueButt = document.getElementById("blueId");
const noneButt = document.getElementById("noneId");

var brownSort = new Patch("brown", 0, 0, "brown", "");
var redSort = new Patch("red", 0, 0, "red", "");
var orangeSort = new Patch("orange", 0, 0, "orange", "");
var yellowSort = new Patch("yellow", 0, 0, "yellow", "");
var greenSort = new Patch("green", 0, 0, "green", "");
var blueSort = new Patch("blue", 0, 0, "blue", "");
var noneSort = new Patch("none", 0, 0, "none", "");
var workingObject = new Patch("working", 0, 0, "working", "");

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