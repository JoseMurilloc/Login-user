# Tela de login

## Itens necessarios(Funcionalidades):

- Cadastrar user
- Fazer o login
- Fazer o logout

## Sobre minha aplicação

Uma aplicação simples que controlar um login que enquanto você não sair sempre estará logado, procuro passar o que estou aprendendo com node durante meu aprendizado quero passar em formato do vídeo e texto.


## Dependências do projeto

```
{
    "dependencies": {
        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "express-session": "^1.16.2",
        "mysql": "^2.17.1"
    },
    "devDependencies": {
        "nodemon": "^1.19.2"
    }
}
```


## O que são as sessões?

Sessões básicamente e o que permite que a sua aplicação reconheça ser o usuário já esteve logado/usando anteriomente, isso é feito pois a aplicação poderá armazenar um estado para o usuário.

## POLL

**process** é disponibilizado pelo Node.js para escutar **eventos** <br> 
Toda vez que a aplicação for finalizada, fecharemos o pool com todas as suas conexões
<br>

## Connection Middleware

Arquivo onde responsavel por pegar o poll busca a conexão e adicinar a **requisição (req)** podendo assim chama a conexão do banco de dados diretamento do **req** de cada rota, bom aplicando o middleware.

<h2>

```
req.connection.query('SELECT * FROM user', (err, user) => {
        if(err) return next(err)
        return res.json(user)
})
```
</h2>
<blockquote>
    req.connection.query<br>
    Isso mesmo agora podemos acessa nossa conexão com banco de dados somente com o req de cada rota (como foi já dito)
</blockquote>

## O padrão de projeto DAO
O primeiro objetivo do DAO (Data Access Object) e evitar que precisremos reescrever o SQL toda vez que precisamos lista novamente.
<br>
## Resolve
Retorna um objeto Promise que foi resolvido com um dado valor. 