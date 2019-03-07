var e2 = document.getElementById("inputGroupSelect01");
var orphanage = e2.options[e2.selectedIndex].value;
tem();
getValue();
function tem(){


var e = document.getElementById("inputGroupSelect01");
var strUser = e.options[e.selectedIndex].value;
    orphanage=strUser;
}

function tableUser(){


// var orphanage ;
var e = document.getElementById("inputGroupSelect01");
var strUser = e.options[e.selectedIndex].value;

    orphanage=strUser;

    var tableHeaderRowCount = 0;
var table = document.getElementById('childList');
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}

    getValue();  



}









const childrenList = document.querySelector('#childList');
function renderChilds(doc){

    let tr =document.createElement('tr');

    let id =document.createElement('td');
    let name =document.createElement('td');
    let classs=document.createElement('td');
    let age =document.createElement('td');
    let entryDate =document.createElement('td');
    
    let report = document.createElement('td');

    let verifyTableView =document.createElement('td');

    let temp = document.createElement('Button');
    let temp2 = document.createElement('i');

    let verification = document.createElement('div');
        
    // temp.setAttribute('class',".btn-icon-split");
    temp.className="btn btn-primary btn-icon-split";
    temp2.className="fas fa-arrow-right";
    temp.textContent="Click Here";

    verifyTableView.appendChild(verification);
    report.appendChild(temp2);
    report.appendChild(temp);






    tr.setAttribute('Child-id',doc.data().ID);
    name.textContent = doc.data().Name;
    name.style.color = "#000";
    classs.textContent = doc.data().Education;
    age.textContent = doc.data().Age;
    id.textContent = doc.data().ID;
    entryDate.textContent=doc.data().EntryDate;
  
    
 
    if(doc.data().WeeklyStatusChecked =="true"){
    verification.textContent ="Verified" ;
    verification.style.color = "#098200";
    }else{
        verification.textContent ="Not Verified" ;
        verification.style.color ="#ff0000";
    }
    
    // report.textContent = "Click me";


    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(classs);
    tr.appendChild(age);   
    tr.appendChild(entryDate);
    tr.appendChild(verifyTableView);
    tr.appendChild(report);


    childrenList.appendChild(tr);

    report.addEventListener('click',(e)=>{

        e.stopPropagation();
        let idnum = e.target.parentElement.parentElement.getAttribute('Child-id');

        // alert(db.collection('iitjammu').doc(idnum));
        // alert(idnum);

        var queryString = "?id=" + idnum + "&auth=" + orphanage;
        window.location.href = "report.html" + queryString;




    })


    
}

function getValue(){

                // Reading the data
                db.collection(orphanage).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // console.log(doc.data());
                        // console.log(doc.id);

                        renderChilds(doc);

                        // Call the dataTables jQuery plugin
                        $(document).ready(function() {
                        $('#dataTable').DataTable();
                        });


                    });
                });

}

// // Writing the data
// form.addEventListener('submit',(e)=>{

//     e.preventDefault();
//     db.collection("iitjammu").doc(form.id.value).set({
//         Name: form.name.value,
//         Location:form.city.value,
//         Number:form.number.value,
//         ID :form.id.value   
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });

//     form.name.value="";
//     form.city.value="";
//     form.Number.value="";
//     form.id.value="";

// })



function reset(){



    // alert("hello");

    



     db.collection(orphanage).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {

                        // alert(doc.id);     
                        // alert(orphanage);              

                       resetALL(orphanage,doc.id);                      
                      


                    });
                });
    
}



function resetALL(nclp2,id){

    db.collection(nclp2).doc(id).update({

        WeeklyStatusChecked:"false"
       
      })
      .then(function(docRef) {
        console.log("Document written with ID: Done");
    })
    .catch(function(error) {
        console.error("Error adding document: Error", error);
    });
}