function ajax() {

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){

    if (this.readyState == 4 && this.status == 200) {

        var response = JSON.parse(this.responseText);
        // console.log(response); 
        var datas= response.info;
        console.log(datas);
        var outputtotal="<h2>"+"Grocery To Buy"+"</h2>"+"<table>"+"<tr>"+"<th>"+"Slno"+"</th>"+"<th>"+"Name"+"</th>"+
                        "<th>"+"Quantity"+"</th>"+"<th>"+"Unit"+"</th>"+"<th>"+"Department"+"</th>"+"<th>"+"Notes"+"</th>"+"</tr>";
        for(var i=0;i<datas.length;i++){
            outputtotal += "<tr><td>"+datas[i].slno+"</td>";
            outputtotal += "<td>"+datas[i].name+"</td>";
            outputtotal += "<td>"+datas[i].quantity+"</td>";
            outputtotal += "<td>"+datas[i].unit+"</td>";
            outputtotal += "<td>"+datas[i].department+"</td>";
            outputtotal += "<td>"+datas[i].notes+"</td></tr>";
        }
        outputtotal+="</table>";
        document.getElementById("demo").innerHTML=outputtotal;
    }

    
}
xhttp.open("GET","info.json",true);
xhttp.send();

    
}