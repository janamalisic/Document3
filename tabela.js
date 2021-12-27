$(document).ready(function(){
    $.get("https://jsonplaceholder.typicode.com/todos/", function(data){
        var i;
        var boja;
        var dugme;
        for(i=0;i<data.length;i++){
            if(data[i].completed == true){
                boja = 'color:green';
                dugme= '<button type="button" class="btn btn-success btn-block">Completed</button>';
            }
            else{
                boja = 'color:red';
                dugme= '<button type="button" class="btn btn-danger btn-block">Not Completed</button>';
            }
            $("#tabela").append(`
            <tr style="${boja}" >
            <td><b>${data[i].userId}</b></td>
            <td>${data[i].id}</td>
            <td style="text-align: left;">${data[i].title}</td>
            <td>${dugme}</td>
          </tr>
            
            `)
        }
    })
})