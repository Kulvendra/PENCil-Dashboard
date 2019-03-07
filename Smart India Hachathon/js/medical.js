var height = document.getElementById("Height");
var weight = document.getElementById("Weight");
var bloodGroup = document.getElementById("BloodGroup");
var identification = document.getElementById("IdentificationMark");
var disability = document.getElementById("Disability");
var vision = document.getElementById("Vision");

var key="2016UCS0026"    ;
var NCLP = 'iitjammu';


function lock(){


    if(height.value !="" && weight.value !="" && bloodGroup.value !="" && identification.value !="" && 
        vision.value !="" ){

            var strUser = disability.options[disability.selectedIndex].value;


            db.collection(NCLP).doc(key).collection("medical").doc("Report").set({
                Height: height.value,
                Weight: weight.value,
                BloodGroup:bloodGroup.value,
                Identification:identification.value,
                Disability:strUser,
                Vision:vision.value

            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            


                              }else{
                                  alert("Complete the form first..!!");
                              }







}


