document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para um servidor

        // Acessa os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const terms = document.getElementById('terms').checked;

        // Exibe os valores no console (ou pode enviá-los para um servidor)
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Senha:', password);
        console.log('Aceitou os termos:', terms);

        // Aqui você pode adicionar a lógica para enviar os dados para um servidor usando AJAX/fetch
    });
});
