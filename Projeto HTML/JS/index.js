const eye = document.getElementById('eye')
const eyeSlash = document.getElementById('eye-slash')
const fieldPassword = document.getElementById('field-password')

const btn = document.querySelector("#btn_login")

btn.addEventListener("click", function(e){   
   
    const name = document.querySelector('#name')
    const value1 = name.value;

    const pass = document.querySelector('#field-password')
    const value2 = pass.value;

    if(value1 === 'marceloferreiralopez@gmail.com' && value2 === '1234'){        
        alert('Login executado com sucesso!')
    }else{
        alert('ID ou PASSWORD incorretos!')
        e.preventDefault();
    }

})

function showPassWord(){

    if(eye.style.display === 'none'){
        eye.style.display = 'block'
        eyeSlash.style.display = 'none'
        fieldPassword.type = 'password'      
    }else{
        eye.style.display = 'none'
        eyeSlash.style.display = 'block'
        fieldPassword.type = 'text'
    }
}


