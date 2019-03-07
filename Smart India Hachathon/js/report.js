var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
  document.write(queries[i] + "<br>");
}
var userID = queries[0].substring(3,14);                                //User ID
var orphange = queries[1].substring(5,13);

// console.log(auth);



const usersRef = db.collection(orphange).doc(userID);

usersRef.get()
.then((docSnapshot) => {
    if (docSnapshot.exists) {
    usersRef.onSnapshot((doc) => {
        // do stuff with the data
        console.log(docSnapshot.data().Name);
        document.getElementById("name").innerHTML=docSnapshot.data().Name;
        document.getElementById("id").innerHTML=docSnapshot.data().ID;
        document.getElementById("class").innerHTML=docSnapshot.data().Education;
        document.getElementById("age").innerHTML=docSnapshot.data().Age;
        document.getElementById("dob").innerHTML=docSnapshot.data().DOB;
        document.getElementById("entryDate").innerHTML=docSnapshot.data().EntryDate ;
        

       


    });
    }
});



var storageRef = firebase.storage().ref();

storageRef.child(orphange+'/'+userID).getDownloadURL().then(function(url) {
    var test = url;
    console.log(test);
    document.querySelector('#image').src = test;
  }).catch(function(error) {
  
  });



