
var firstName = document.getElementById("Name");
var address = document.getElementById("inputAddress");
var address2 = document.getElementById("inputAddress2");
var city = document.getElementById("inputCity");
var state = document.getElementById("inputState");
var zip = document.getElementById("inputZip");
var description = document.getElementById("description");

var rname = document.getElementById("rName");
var remail= document.getElementById("rEmail");
var rnumber = document.getElementById("rNumber");


function lock(){

    if(address.value!=""&& address2.value!=""&& city.value!=""&&     
        state.value!=""&& zip.value!=""&& description.value!=""&& rname.value!=""&& 
        remail.value!=""&& rnumber.value!="" &&  firstName!=""){

            
            address.disabled = true;
            address2.disabled=true;
            city.disabled=true;
            state.disabled=true;
            zip.disabled=true;
            description.disabled=true;

            rname.disabled=true;
            remail.disabled=true;
            rnumber.disabled=true;

            firstName.disabled=true;

            // alert(firstName.value);


            document.getElementById("photoUploadBox").hidden=false;


            

        }else{
            alert("Complete the form first..!!");   }

}





var complaintNumber;
const usersRef = db.collection("complaintNumber").doc("sequence");
usersRef.get()
.then((docSnapshot) => {
    if (docSnapshot.exists) {
    usersRef.onSnapshot((doc) => {
        // do stuff with the data
        // console.log(docSnapshot.data().Name);
        complaintNumber=docSnapshot.data().Value
    //    console.log(parseInt(complaintNumber));   


    });
    }
});

var uploader  = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

fileButton.addEventListener('change',function(e){

    var file = e.target.files[0];

    var temp = parseInt(complaintNumber)+1;

    var storageRef= firebase.storage().ref('complaint/'+temp.toString());

    var task =  storageRef.put(file);

    task.on('state_changed',

        function progress (snapshot){

            var percentage = (snapshot.bytesTransferred /snapshot.totalBytes)*100;
            uploader.value=percentage;
            document.querySelector('#status').innerHTML=percentage + "%";

        },

        function error(err){

        },

        function complete(){

            document.getElementById("submitDiv").hidden=false;

        }   
    );
});






function submit(){

                    var complaint = parseInt(complaintNumber) + 1;

                    var temp= complaint.toString();

                

                var checkbox = document.getElementById("checkBoxSubmit");
                if(checkbox.checked){

                    
                    console.log(complaintNumber);
                                
                    db.collection("complaintList").doc(temp).set({

                        Name:firstName.value,
                                               
                        Address:address.value +","+address2.value+","+city.value+","+state.value+","+zip.value,
                        Description:description.value,

                        ReportName:rname.value,
                        ReportEmail:remail.value,
                        ReportNumber:rnumber.value



                        
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                        


                        db.collection("complaintNumber").doc('sequence').set({

                            Value:temp,                       
    
    
    
                            
                        })
                        alert("User Registered Successfully");
                        document.location.reload()

                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });







                }
                else{
                alert("Please tick the check-box.");
                }

}