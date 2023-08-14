Instruções para prova front end:

    1. Segue em anexo o arquivo do layout desktop e mobile que é sobre uma loja de bolos que recebe encomendas através de um formulário. Deve ser responsivo o site.
    2. O candidato deverá seguir o layout proposto e fazer o site em HTML, CSS e javascript.
    3. Forma de fazer é livre do candidato, porém alguns requisitos que serão avaliados:

    • fazer a prova usando LESS ou SASS como pré-processadores de CSS. Você também pode usar apenas CSS também, porém será um diferencial usar LESS
    • Javascript deverá ser feito em Jquery ou javascript puro, porém será um diferencial usar Jquery
    • https://jquery.com/
    • https://lesscss.org/
    • https://sass-lang.com/
    • Usar framework bootstrap https://getbootstrap.com/docs/4.0/getting-started/introduction/
    • o formulário deve ser enviado via AJAX de Jquery ou fetch de javascript  usando como teste uma API de teste do site https://jsonplaceholder.typicode.com/


      -    O formulário deve ser validado, tanto campo obrigatórios, validação de um email valido, e data não pode ser anterior que a data de hoje, após o envio do formulário deve aparecer um popup com a frase “Pedido enviado com sucesso”


    Endpoint que deve ser usado para o teste:

https://jsonplaceholder.typicode.com/posts method:POST

No body da requisição enviar os dados do formulário no padrão JSON. Deixaremos livre a montagem do JSON a ser enviado, porém é obrigatório enviar pelo menos o tipo de bolo, o nome do cliente, telefone, email.

Mesmo que incompleto, nos envie sua prova!
