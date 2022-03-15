//import { Document, Packer, TextRun, Paragraph } from 'docx'
//import { saveAs } from 'file-saver'
//import * as fs from "fs";

let dropdown = document.getElementById('periodDropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Select Period';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'data/2022-periods.json';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].End
      option.value = data[i].End;
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

function changeEvent() {
  let dropPeriod = option;
  if(selvalue != 'Select Period'){
    document.getElementsByClassName('hoursWorked','d14').value(dropPeriod)
  }
}

// document.querySelectorAll('#allInputs')


  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
//   const doc = new Document({
//       sections: [{
//           properties: {},
//           children: [
//               new Paragraph({
//                   children: [
//                       new TextRun("Hello World"),
//                       new TextRun({
//                           text: fname,
//                           bold: true,
//                       }),
//                       new TextRun({
//                           text: lname,
//                           bold: true,
//                       }),
//                   ],
//               }),
//           ],
//       }],
//   });
  
  // Used to export the file into a .docx file
 //Packer.toBuffer(doc).then((buffer) => {
  //    fs.writeFileSync("Timesheet.docx", buffer);
 // });
  
  // Done! A file called 'My Document.docx' will be in your file system.