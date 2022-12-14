# projeto20-repoprovas
Api disponivel no endereço (https://repo-provas20-api.herokuapp.com)

# Rotas de autenticação:

## Rota <span style="color:yellow"> **POST** </span>/signup

Essa é uma rota não autenticada. Sua função é criar uma nova conta.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "email": "email_da_conta", //string
  "password": "senha_da_conta", //string_min_length(10)
  "passwordConfirmation": "confirmacao_da_senha"//string_min_length(10)
}
```

## Rota <span style="color:yellow"> **POST** </span>/signin

Essa é uma rota não autenticada. Sua função é fazer o login em uma conta já criada.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "email": "email_da_conta", //string
  "password": "senha_da_conta" //string_min_length(10)
}
```

A resposta da requisição virá no seguinte formato:

```json
{
  "token": "token_de_acesso" //string
}
```
## Rota <span style="color:yellow"> **POST** </span>/tests

Essa é uma rota autenticada. Sua função é fazer o cadastro de uma nova prova.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "name": "nome_da_prova", //string
  "pdfUrl": "url_do_pdf_da_prova", //string
  "category": "nome_da_categoria", //string
  "discipline": "nome_da_disciplina", //string
  "teacher": "nome_do_professor" //string
}
```
## Rota <span style="color:green"> **GET** </span>/disciplines/tests

Essa é uma rota autenticada. Sua função é retornar todos os cadastros de prova por disciplina.

O Body do retorno tem o seguinte formato:

```json
[
  {
    "id": "id_do_modulo", //string
    "number": "numero_modulo", //number
    "disciplines": [
      {
        "id": "id_da_disciplina", //number
        "name": "nome_da_disciplina", //string
        "categories": [
          {
            "id": "id_da_categoria", //number
            "category": "nome_da_categoria", //string
            "tests": [
              {
                "id": "id_da_avaliacao", //number
                "name": "nome_da_avaliacao", //string
                "pdfUrl": "url_do_pdf_da_avaliacao", //string
              }//object
            ]//array
          }//object
        ]//array
      }//object
    ]//array
  }//object
]//array
```

## Rota <span style="color:green"> **GET** </span>/teachers/tests

Essa é uma rota autenticada. Sua função é retornar todos os cadastros de prova por professores.

O Body do retorno tem o seguinte formato:

```json
[
  {
    "id": "id_do_professor",//number
    "nome": "nome_do_professor", //string
    "tests": [
      {
        "id": "id_da_avaliacao",//number
        "name": "nome_da_avaliacao",//string
        "pdfUrl": "url_do_pdf_da_avaliacao"//number
      }//object
    ]//array
  }//object
]//array
```