// var orphanage = "iitjammu";                 //change the value with the orphanage name of user logged in..!!
var orphanage;
var key;
var position ;
var NLCP;
var fbRef = firebase.database().ref().child("Sell_Products");
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user);
        var user = firebase.auth().currentUser.email; 
        key = user.split("@")[0].toUpperCase();
        
        var starCountRef = firebase.database().ref(key);
        starCountRef.on('value', function(snapshot) {
        // alert( snapshot.val())
            // alert(snapshot.val())
        // document.getElementById("username").innerHTML = snapshot.child("name").val();
        position = snapshot.child("position").val();
        NLCP = snapshot.child("nlcpname").val();         
        // alert(NLCP);     
         orphanage = NLCP;
        tableprint();
        });  //you should have your user here!
      
    } else {
        console.log('No user is signed in.');
    }
});
    

// orphanage = "iitbhu";
var uploader  = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

var picName = document.getElementById("ID");

fileButton.addEventListener('change',function(e){

    var file = e.target.files[0];

    var storageRef= firebase.storage().ref(orphanage+'/'+picName.value);

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



//*********************************************************************************************************/
//uploading the pic to the Firebase Storage..!!


// var storage = firebase.storage();
// var pathReference = storage.ref('iitjammu/2016UCS0020');

// var profile = document.getElementById("profilePic");
// // console.log(pathReference);
// profile.setAttribute('src',pathReference);


//***********************************************************************************************************/
//getting the pic from Firebase Storage..!!



// var storageRef = firebase.storage().ref();

// storageRef.child('iitjammu/2016UCS0020').getDownloadURL().then(function(url) {
//     var test = url;
//     console.log(test);
//     document.querySelector('#image').src = test;
//   }).catch(function(error) {
  
//   });




var submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click',function(e){


    var checkbox = document.getElementById("checkBoxSubmit");

    var name = document.getElementById("Name");
    var userID = document.getElementById("ID");
    var education= document.getElementById("Education");
    var  age= document.getElementById("Age");
    var  sex= document.getElementById("Sex");
    var  dob= document.getElementById("DOB");
    var  entryDate= document.getElementById("EntryDate");
    var  address= document.getElementById("inputAddress");
    var  address2= document.getElementById("inputAddress2");
    var  city= document.getElementById("inputCity");
    var  state= document.getElementById("inputState");
    var  zip= document.getElementById("inputZip");

    if(checkbox.checked){

    

                
                    db.collection(orphanage).doc(userID.value).set({

                        Name:name.value,
                        ID:userID.value,
                        Education:education.value,
                        Age:age.value,
                        Sex:sex.options[sex.selectedIndex].value,
                        DOB:dob.value,
                        EntryDate:entryDate.value,
                        Address:address.value +","+address2.value+","+city.value+","+state.value+","+zip.value,
                        WeeklyStatusChecked :"false"

                        
                    })
                    .then(function() {
                        console.log("Document successfully written!");
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
    


    
});


         
function lock(){


    

    var name = document.getElementById("Name");
    var userID = document.getElementById("ID");
    var education= document.getElementById("Education");
    var  age= document.getElementById("Age");
    var  sex= document.getElementById("Sex");
    var  dob= document.getElementById("DOB");
    var  entryDate= document.getElementById("EntryDate");
    var  address= document.getElementById("inputAddress");
    var  address2= document.getElementById("inputAddress2");
    var  city= document.getElementById("inputCity");
    var  state= document.getElementById("inputState");
    var  zip= document.getElementById("inputZip");

    if(name.value!="" &&
            userID.value!=""&&
            education.value!=""&&
            age.value!=""&&
            dob.value!=""&&
            entryDate.value!=""&&
            address.value!=""&&city.value!=""&&state.value!=""&&zip.value!=""){

     document.getElementById("Name").disabled=true;
     document.getElementById("ID").disabled=true;
     document.getElementById("Education").disabled=true;
     document.getElementById("Age").disabled=true;
     document.getElementById("Sex").disabled=true;
     document.getElementById("DOB").disabled=true;
     document.getElementById("EntryDate").disabled=true;
     document.getElementById("inputAddress").disabled=true;
     document.getElementById("inputAddress2").disabled=true;
     document.getElementById("inputCity").disabled=true;
     document.getElementById("inputState").disabled=true;
     document.getElementById("inputZip").disabled=true;

     document.getElementById("photoUploadBox").hidden = false;

}
else{
    alert("Please complete the details.!!");
}
}


$(document).keypress(function(event){
    if(event.keyCode == 13){

        lock();
    }
});