//import { Document, Packer, TextRun, Paragraph } from 'docx'
//import { saveAs } from 'file-saver'
//import * as fs from "fs";

//cleanup the json so it's ISO compatible
function dateFixup (workingString) {
  workingString.replace(/\//,'-');
}

// Populate the pay period dropdown
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
      let stuffHere = data[i].End.replaceAll(/\//g,'-')
      option.text = stuffHere;
      option.value = stuffHere;
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

//Fill in the dayWorked values based on the selection from the dropDown
function periodSelect() {
  let dropPeriod = document.getElementById('periodDropdown').value;

// Trying this out: https://stackoverflow.com/questions/3871547/js-iterating-over-result-of-getelementsbyclassname-using-array-foreach
  var elements = document.getElementsByClassName('workDay')
  if(dropPeriod != 'Select Period'){
    for (let i=0; i>15, i++;) {
      unixDate = Date.parse(dropPeriod)
      console.log(unixDate)
      Array.from(elements).forEach(
      (element) => {
          element.value = unixDate+i-14;
          console.log(element.value)
      }
      );
    // ;
    // for (let i=14; i>0; i--){
  
    //   }
    // )
    // }


    //This next line actual;ly puts the dropdown value into Day 14

    //    document.getElementById('hwd14').value = dropPeriod;
    // console.log(document.getElementsByClassName("workDay"))
   // for (let i = 0; i < 15 ; i++) {
   //   targetDate = string('hwd', string(i+1));
      //console.log
      //document.getElementById(targetDate).val
   // }
                      }
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