var idTextView = document.getElementById("idView");
var passwordTextView = document.getElementById("passwordView");

var loginButton = document.getElementById("Login");
var oLoginButton= document.getElementById("oLogin");
var aLoginButton = document.getElementById("aLogin");
var gLoginbutton = document.getElementById("gLogin");

var loginType=0;

/*******************************************************signup******************* */

function signup(){

    window.alert("welcome to signed in");

    // var idTextView = document.getElementById("idView");
    // var passwordTextView = document.getElementById("passwordView");

        var nameUser = "Kulvendra Singh";
        var position = "1"
        var nlcpname = "iitbhu";

        var input = idTextView.value;
  
        var email =  input+"@gmail.com";
        var password = passwordTextView.value;

        
       
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

        //   window.location = "home.html";
        alert(email);

        firebase.database().ref(input).set({
            name: nameUser,
            position: position,
            nlcpname : nlcpname
          });


        // window.alert("Signed IN")
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          window.alert("Error : " + errorMessage +" ("+errorCode+")");
          // ...
        });
      
      
}
/*******************************************************signup******************* */




function authorityLogin(){
    loginButton.hidden=false;
    idTextView.hidden=false;
    passwordTextView.hidden=false;

    aLoginButton.hidden=true;
    oLoginButton.hidden=true;
    gLoginbutton.hidden=true;

    loginType=2;
}

function orphanageLogin(){
    loginButton.hidden=false;
    idTextView.hidden=false;
    passwordTextView.hidden=false;

    aLoginButton.hidden=true;
    oLoginButton.hidden=true;
    gLoginbutton.hidden=true;

    loginType=1;


}


function guestLogin(){


    window.location.href = "complaint.html";
 


}

//**************************************************************************************************** */

function Login(){

    var email2 = idTextView.value+"@gmail.com";
    var password2 = passwordTextView.value;
    firebase.auth().signInWithEmailAndPassword(email2, password2).then(function () {


    //   window.location = "home.html";
    var user = firebase.auth().currentUser.email;
        
    // var key =;


    // alert(user.split("@")[0].toUpperCase());

    // alert("");

      var starCountRef = firebase.database().ref(user.split("@")[0].toUpperCase()).child("position");
        starCountRef.on('value', function(snapshot) {
        // alert( snapshot.val())
        if(snapshot.val()=="2"){
            window.location = "home2.html";
        }else{
            window.location = "home.html";
        }
        });
    


    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage +"| Code"+errorCode );
      // ...
    });
}



//***************************************************************************************************************************dd




// function Login(){

//         // var email,password;
//         // email = idTextView.value+"@gmail.com";
//         // password=passwordTextView.value;



//     // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     //     // Handle Errors here.
//     //     var errorCode = error.code;
//     //     var errorMessage = error.message;
//     //     // ...
//     //   });



//     if(loginType==1){

//         if(idTextView.value =="" || passwordTextView.value == ""){
//             alert("Please fill the details");
//         }else{

//         // alert("Orphanage User..!!");

//         const usersRef = db.collection('orphLoginIDs').doc(idTextView.value);

//             usersRef.get()
//             .then((docSnapshot) => {
//                 if (docSnapshot.exists) {
//                 usersRef.onSnapshot((doc) => {
//                     // do stuff with the data
//                     // console.log(docSnapshot.data().Password);

//                     if(docSnapshot.data().Password ==passwordTextView.value){
//                         console.log("User Loged In..!!");

//  0                       // var value1="value1";
//                         // var value2="value2";
//                         var queryString = "?id=" + idTextView.value + "&auth=" + loginType;
//                         window.location.href = "home.html" + queryString;

//                         document.cookie = idTextView.value +"&"+loginType;    

//                         idTextView.value="";
//                         passwordTextView.value="";
//                         }else{
//                             console.log("Wrong Password..!!");
//                         }


//                 });
//                 } else {
//                 console.log("User Not Found..!!");
//                 alert("User Not Found..!!")

//                 }
//             });

//         }


//     }
//     else if(loginType==2){

//         if(idTextView.value =="" || passwordTextView.value == ""){
//             alert("Please fill the details");
//         }else{


//         const usersRef = db.collection('authLoginIDs').doc(idTextView.value);

//             usersRef.get()
//             .then((docSnapshot) => {
//                 if (docSnapshot.exists) {
//                 usersRef.onSnapshot((doc) => {
//                     // do stuff with the data
//                     // console.log(docSnapshot.data().Password);

//                     if(docSnapshot.data().Password ==passwordTextView.value){
//                         console.log("User Loged In..!!");
//                         document.cookie = idTextView.value +"&"+loginType; 
                        
//                         var queryString = "?id=" + idTextView.value + "&auth=" + loginType;

//                         window.location.href = "home2.html" + queryString;

                        

//                         idTextView.value="";
//                         passwordTextView.value="";
//                         }else{
//                             console.log("Wrong Password..!!");
//                         }


//                 });
//                 } else {
//                 console.log("User Not Found..!!");
//                 alert("User Not Found..!!");
//                 }
//             });

        
//     }
// }    

// }




$(document).keypress(function(event){
    if(event.keyCode == 13){
     $('#filter').click();
        if(loginType!=0)
         Login();
    }
});




// --------------------------mayank------------------------------------




