
const loadXml = () => {
    let xhttp;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            showTable(xhttp.responseXML);
        }
    }

    xhttp.open('GET','progress_tracking.xml',true);
    xhttp.send();
}

const showTable = (xmlRes) => {
    if(!xmlRes){return;}
    let table;
    table = "<tr><th>Member Id</th><th>Team Id</th><th>First Name</th><th>Last Name</th><th>Gender</th><th>Mobile Number</th><th>Email</th></tr>";
    const x = xmlRes.getElementsByTagName("Member");
    for(let i=0;i<x.length;i++){
        table += `<tr>
        <td>${xmlRes.getElementsByTagName("MemberId")[i].childNodes[0].nodeValue}</td>
        <td>${xmlRes.getElementsByTagName("TeamId")[i].childNodes[0].nodeValue}</td>
        <td>${xmlRes.getElementsByTagName("FirstName")[i].childNodes[0].nodeValue}</td>
        <td>${xmlRes.getElementsByTagName("LastName")[i].childNodes[0].nodeValue}</td>
        <td>${xmlRes.getElementsByTagName("Gender")[i].childNodes[0].nodeValue}</td>
        <td>${xmlRes.getElementsByTagName("MobileNumber")[i].childNodes[0].nodeValue}</td>
        <td>${xmlRes.getElementsByTagName("Email")[i].childNodes[0].nodeValue}</td>
        </tr>`;
    }
    document.getElementById("member_table").innerHTML = table;
}

loadXml();