// getValue();



const childrenList = document.querySelector('#complaintList ');
function renderChilds(doc){

    let tr =document.createElement('tr');

    let complaintNumber =document.createElement('td');
    let nameChild =document.createElement('td');
   
    let nameReport = document.createElement('td');
    let numberReport =document.createElement('td');
    let emailReport =document.createElement('td');  
    let status = document.createElement('td');
    
    let report = document.createElement('td');

    

    let temp = document.createElement('Button');
    let temp2 = document.createElement('i');

  
        
    // temp.setAttribute('class',".btn-icon-split");
    temp.className="btn btn-primary btn-icon-split";
    temp2.className="fas fa-arrow-right";
    temp.textContent="Click Here";

    report.appendChild(temp2);
    report.appendChild(temp);






    tr.setAttribute('Child-id',doc.id);
    complaintNumber.textContent = doc.id;
    nameChild.textContent = doc.data().Name;
    nameChild.style.color = "#000";

    nameReport.textContent = doc.data().ReportName;
    emailReport.textContent = doc.data().ReportEmail;
    numberReport.textContent = doc.data().ReportNumber;
    
    if( doc.data().Status == "new"){

    status.textContent = doc.data().Status;
    status.style.color = "	#ffff00";
    }
    


  
    
 
    // if(doc.data().WeeklyStatusChecked =="true"){
    // verification.textContent ="Verified" ;
    // verification.style.color = "#098200";
    // }else{
    //     verification.textContent ="Not Verified" ;
    //     verification.style.color ="#ff0000";
    // }
    
    // report.textContent = "Click me";


    tr.appendChild(complaintNumber);
    tr.appendChild(nameChild);
    tr.appendChild(nameReport);
    tr.appendChild(emailReport);   
    tr.appendChild(numberReport);   
    tr.appendChild(status);  
    
    tr.appendChild(report);


    childrenList.appendChild(tr);

    report.addEventListener('click',(e)=>{

        e.stopPropagation();
        let idnum = e.target.parentElement.parentElement.getAttribute('Child-id');

        // alert(db.collection('iitjammu').doc(idnum));
        // alert(idnum);

        var queryString = "?id=" + idnum;
        // window.location.href = "report.html" + queryString;

        alert(queryString);




    })


    
}






    // Reading the data
    db.collection("complaintList").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            // console.log(doc.id);

            renderChilds(doc);

            // Call the dataTables jQuery plugin
            $(document).ready(function() {
                $('#example').DataTable();
            } );
            


        });
    });




    function complaintSelect(){




    }