

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementById('inName').value;
    let email = document.getElementById('inEmail').value;
    let telefone = document.getElementById('inTel').value;
    let celular = document.getElementById('inCel').value;
    let select = document.getElementById('inSelect');
    let party = document.getElementById('inTypeParty');
    let people = document.getElementById('inPeolpe').value;
    let data = document.getElementById('inData').value;
    let contact1 = document.getElementById('inContact-1').checked;
    let contact2 = document.getElementById('inContact-2').checked;
    let mensagem = document.getElementById('inMensage').value;
    
    document.getElementById('name').innerHTML = name;
    document.getElementById('email').innerHTML = email;
    document.getElementById('tel').innerHTML = telefone;
    document.getElementById('phone').innerHTML = celular;
    document.getElementById('buffet').innerHTML = select.value;
    document.getElementById('locage').innerHTML = party.value;
    document.getElementById('numberOfPeaple').innerHTML = people;
    document.getElementById('date').innerHTML = data;
    document.getElementById('outContact').innerHTML = contact1 ? 'E-mail' : 'Telefone';
    document.getElementById('mensagem').innerHTML = mensagem;


    document.getElementById('modal').style.display = 'flex';
       
    console.log(contact1)
    console.log(contact2)
})

document.getElementById('close').addEventListener('click', function(event){
    
    document.getElementById('modal').style.display = 'none';
   
})

