document.getElementById('contatoForm').addEventListener('submit', async function (evt) {
    evt.preventDefault();
    
    const form = evt.target;

    try {
        const response = await fetch('https://formsubmit.co/ajax/armandoeduardo306@gmail.com',
            {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                subject: form.assunto.value,
                message: form.message.value,
                _captcha: 'false'
            })
    });
    const data = await response.json();

    if(data.success){
        alert('Agradeço sua Mensagem. Retornarei em breve!');
        form.reset();
    }else{
        throw new Error('Falha ao enviar mensagem');
    }
    } catch (error) {
        console.log("error");
    }
});