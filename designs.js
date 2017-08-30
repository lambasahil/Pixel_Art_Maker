



// Select size input
var table_height=document.getElementById('input_height');
var table_width=document.getElementById('input_width');
// Select color input
var color_picker= document.getElementById('colorPicker');
//Select form id
var form_id=document.getElementById('sizePicker');
//Select table id
var table=document.getElementById('pixel_canvas');

//onlick particular column this function call is made
function fillcolor()
{
  this.style.background=color_picker.value;
}
// When size is submitted by the user, call makeGrid() is made using submit button
form_id.onsubmit=function(event)
{
    event.preventDefault();

  makeGrid();
}



function makeGrid()
{
console.log("Motu BC Hai");
  table.innerHTML='';
  var row,col;
  for(var i=0;i<table_height.value;i++)
  {
    row=table.insertRow(i);
    for(var j=0;j<table_width.value;j++)
    {
      col=row.insertCell(j);
      col.addEventListener('click',fillcolor);
    }
  }
}
