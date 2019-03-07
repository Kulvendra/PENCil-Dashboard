
// var user = firebase.auth().currentUser;
// var  email;
// if (user != null) {  
//   email = user.email;
 


// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
//   alert("user signed in");
// } else {
//     alert("user not signed in");
//     // No user is signed in.
// }


        

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
        document.getElementById("username").innerHTML = snapshot.child("name").val();
        position = snapshot.child("position").val();
        NLCP = snapshot.child("nlcpname").val();              
        });  //you should have your user here!
      
    } else {
        console.log('No user is signed in.');
    }
});
    
























// var queryString = decodeURIComponent(window.location.search);
// queryString = queryString.substring(1);
// var queries = queryString.split("&");
// for (var i = 0; i < queries.length; i++)
// {
//   document.write(queries[i] + "<br>");
// }
// var userID = queries[0].substring(3,14);                                //User ID
// var auth = queries[1].substring(5,6);

// var loginType;                                                          //login Type 


// console.log(document.cookie);


// if(auth=='1'){
//     loginType="orphLoginIDs";
// }else if(auth=='2'){
//     loginType="authLoginIDs";
// }



// const usersRef = db.collection(loginType).doc(userID);

// usersRef.get()
// .then((docSnapshot) => {
//     if (docSnapshot.exists) {
//     usersRef.onSnapshot((doc) => {
//         // do stuff with the data
//         // console.log(docSnapshot.data().Name);
//         document.getElementById("username").innerHTML=docSnapshot.data().Name;

       


//     });
//     }
// });


// // var LoginUserData = document.cookie;
// // alert(LoginUserData);



