var input = document.querySelector('input')
var sub = document.querySelector('#sub')
var button = document.querySelector('button')
var dialog = document.querySelector('dialog')

button.onclick = function(){
    var ip_addr = input.value
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/iplookup?address=' + ip_addr,
    headers: { 'X-Api-Key': 'OKpDkM/y+cf1zcL5GahWlA==BTYQuWs53VJaZ0lt'},
    contentType: 'application/json',
    success: function(result) {
        if (result['is_valid'] == true){
        dialog.show()
        document.querySelectorAll('.in')[0].innerHTML = result['country']
        document.querySelectorAll('.in')[1].innerHTML = result['region']
        document.querySelectorAll('.in')[2].innerHTML = result['city']
        document.querySelectorAll('.in')[3].innerHTML = result['zip']
        document.querySelectorAll('.in')[4].innerHTML = result['isp']
        console.log(result);
        }
        if (result['is_valid'] == false){
            sub.innerHTML = "Desculpe Meu Nobre Esse Ip e Invalido"
            sub.style.color = 'red'
            sub.style.fontSize = '20px'
        }
    },
    error: function ajaxError(jqXHR) {
        sub.innerHTML = "Verifique os campos e tente novamente"
        sub.style.color = 'red'
        sub.style.fontSize = '20px'
        console.error('Error: ', jqXHR.responseText);
       
    }
});
    
}