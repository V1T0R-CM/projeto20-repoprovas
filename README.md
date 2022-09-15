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