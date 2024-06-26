document.getElementById('recycling-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log('Formulário enviado:', data);

    alert('Formulário enviado com sucesso!');
});
