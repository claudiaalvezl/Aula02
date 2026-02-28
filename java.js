document.getElementById('btn-comece').addEventListener('click', function() {
    // Redireciona para o WhatsApp (substitua pelo seu número)
    const numero = "5563900000000";
    const mensagem = encodeURIComponent("treinos exclusivos.");
    window.open('https://wa.me/${numero}?text=${mensagem}, _blank');
});