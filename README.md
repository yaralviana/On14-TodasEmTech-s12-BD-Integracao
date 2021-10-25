# -On14-TodasEmTech-s12-BD-Integracao

 ### Apresentação e um recadinho da prof <br><br>
 - Bebam água meninas
 - Sinta-se a vontade para fazer perguntas, pode perguntar pelo chat também ou perguntar as monitoras
 - Qualquer pergunta é válida.
 - Pode deixar a camera aberta para a prof não se sentir sozinha

<img src="https://pa1.narvii.com/6542/b759ad59ea88956c1416453d58c22b86cbbbffa9_hq.gif"
     alt="Chopper Feliz" width="500"
/>


<br>
<br>
<br>
<br>
<br>
<br>

## Introdução ao Banco de Dados

Um banco de dados é uma ferramenta para salvar dados, surgiu  aproximadamente a partir da década de 70, e foi criado para armazenar e organizar informações. Um banco é muito importante para um back-end, pois é ele que permite que os dados sejam persistido e acessados de forma eficiente e segura.

### Motivos utilizar um Banco de Dados

 - Salvar dados da aplicação
 - Deixa a aplicação escalavel
 - Desempenho
 - Segurança
 - Confiabilidade

<br>

## Banco de Dados Relacional vs Não Relacional

<br>

| SQL | NOSQL | 
| ----------- | ----------- |
Os bancos de dados SQL, também conhecidos como bancos de dados relacionais, foram projetados para armazenar dados que possuem um esquema estruturado, surgiu devido a necessidade de um sistema mais barato e eficiente para armazenar dados.|  Surgiu como alternativa aos bancos relacionais, o MongoDB uns do mais conhecido, foi lançado aproximadamente em 2009. 
| Bancos de dados relacionais são  compostos por tabelas que possuem relacionamento entre si, essas tabelas possui colunas(columns) e linhas(rows), que são  a forma que os dados são  organizados | Banco de dados não relacionais são  compostos por dados não estruturados, no MongoDB  por exemplo, possuímos Collections que são coleção  de documentos e os  documentos são armazenados são os documentos em formato JSON, possuindo uma chave e valor. |
| O cenário para o uso do SQL e quando necessitamos  de dados precisamente estruturados | Um cenario para uso do NOSQL quando precisamos que a aplicacao tenha um bom desepenho e escale horizontalmente |

![imagem](https://ichi.pro/assets/images/max/724/0*rlLOjmeLlGQyzETu.png)

<br>
<br>
<br>
<br>
<br>

## Introdução ao MongoDB
<br>
MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.


### Documentos

A estrutura do documento é muito similar a um objeto javascript, possuindo chave-valor.
<img src="./assets/document.jpg" alt="document" width="100%">
<br>

### Collections

<br>

A Collection basicamente é a coleção de documentos, em outras palavras, é bem similar a um array quando paramos para analisar, embora não seja um array.
<br>
<img src="./assets/collection.jpg" alt="collection" width="100%">

<br>

### Databases
A database é a base raiz das collections
<img src="./assets/database.jpg" alt="database" width="100%">


<br/>

Quando pensamos no crud, essa seria relação entre o banco de dados e a nossa API

| OPERAÇÃO | MONGODB | DESCRIÇÃO
| --- | --- | --- |
| **C**REATE | insertOne() | cria um documento |
| **R**EAD | find() | ler um documento |
| **U**PDATE | updateOne() | atualiza um documento |
| **D**ELETE | deleteOne() | deleta um documento |

<br>
<br>
<br>
<br>
<br>
<br>

## Mongo Atlas
// aula do banco online


<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Mongo COMPASS

// deixar link de sugestao parao  studio 3t

<br>
<br>
<br>
<br>
<br>
<br>

# Introdução ao  Moogose e ORM
 Um ORM é uma biblioteca de programação que facilita o uso de bancos de dados, nesse caso utilizaremos o mongoose que é uma ORM do mongoDB.


<br>
<br>

### URI

uri é uma parte da URL, ou seja, um pedaço da url, na nossa aplicação ela vem de uma variavel de ambiente

```
const MONGO_URI = "mongodb://localhost:27017/reprogramaMusic"
```

### Criando a função de conexão

```
const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log('Banco de dados conectado')
    } catch (error) {
        console.error(error)
    }
}

```

### Exportando a função de conexão



```
module.exports = { connect }
```


## Schema

Schema ou model é a estrutura do nosso Documento, ou seja, o nosso modelo de dados.


### Criando o Schema

```JSON
name {
    type: String, Number, Array...
    required: true, false
    default: '', // valor padrao
}

```

```JSON
const Schema = new mongoose.Schema({
    artista: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    },
 })

```
### exportando nosso Schema ou seja nossa model e criando a collection

```
module.exports =  mongoose.model('music', Schema)
```	

## Alguns metodos do mongoose

Vamos conhecer o basico do mongoose

###  obter toda a collection find()
Ao utilizar esse metodo retornamos todos as musicas da collection

```	
const music = await Music.find()
```

### Filtro com o mongoose
Caso queira filtrar algum dado da collection, basta passar um objeto como parametro para o metodo find

```	
const music = await Music.find({
    artista: req.query.artista,
    titulo: req.query.titulo,
    album: req.query.album,
    ano: req.query.ano,
})

```	

###  obter somente uma musica(document) da collection por ID

```
const music = await Music.findById(req.params.id)	
```

### salvar um documento na collection

```
const music =  Music.create({
    artista: req.body.artista,
    titulo: req.body.titulo,
    album: req.body.album,
    ano: req.body.ano,
})

await music.save()

```


### deletar um documento da collection

```	
const music = await music.delete()
```	

Resumo dos métodos vistos até aqui.

| OPERAÇÃO | MONGODB | MONGOOSE
| --- | --- | --- |
| **C**REATE | insertOne() | save()  |
| **R**EAD | find() | find() |
| **U**PDATE | updateOne() | save() |
| **D**ELETE | deleteOne() | delete() |

<br>
<br>
<br>
<br>
<br>
<br>



### Dotenv

Variaveis de ambiente permite que a desenvolvedora tenha maior controle e segurança sobre a aplicação, permite por exemplo salvar uma senha do banco de dados.  Para essa nosssa API,  utilizaremos o dontenv-safe, que adiciona uma camada adicional de segurança para o desenvolvedor.


Para instalar o dotenv-safe, basta utilizar o comando:

```
npm install dotenv-safe

```

Para habilitar as variaves de ambiente.


```
require('dotenv-safe').config()


// para utiliza-la
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
```

### Para decrarar as variaves basta criar um arquivo `.env` e um arquivo  `.env.example.`

No arquivo .env salvamos as variaveis de ambiente.

```	
PORT=3000
MONGODB_URI=mongodb://localhost:27017/reprogramaMusic
```
No arquivo `.env.example` salvamos somente a variavel vazia para que o proximo desenvolvedor que baixar o projeto, saber que precisa definir essas variaveis.

```	
MONGODB_URI
PORT
```
<br>
<br>
<br>
<br>
<br>

## Hora de criar nossa API e integrada-la ao nosso banco de dados

### Arquitetura da nossa API

```
ReprogramaMusic             
├─ src                       
│  ├─ controllers            
│  │  └─ musicController.js  
│  ├─ database               
│  │  └─ mongoConfig.js      
│  ├─ models                 
│  │  └─ musicSchema.js      
│  ├─ routes                 
│  │  └─ musicRouter.js      
│  └─ app.js                 
├─ package-lock.json         
├─ package.json  
├─ .gitignore   
├─ README.md        
└─ server.js          

```      


### Dependências que serão utilizadas
| Dependencia | Descrição |
| ----------- | ----------- |
| Express | Framework para construção de micro-serviços com Node |
| Cors | Expoe nossa api a outros dominios |
| Mongoose | Uma lib ORM que facilita a criação de modelos de dados para o MongoDB. |
| dotenv-safe | Garante que todas as variáveis ​​de ambiente necessárias sejam definidas após a leitura |
| nodemon | Recarrega nossa API, cada vez que fazemos uma alteração no código  |


### ROTAS
 - [GET] /musicas 
 - [POST] /musicas/create
 - [PUT] /musicas/:id
 - [DELETE] /musicas/:id
 - [GET] /musicas/:id


<br>
<br>
<br>
<br>
<br>
<br>


### Videos de apoio

<br>
<br>
<br>
<br>
<br>
<br>

### Referências


<br>
<br>
<br>
<br>
<br>
<br>
<br>

# Trabalho entegrável

vamos fazer um API dos cantores das musicas?

O entregável obrigatório consiste em um getAll, getById e um Post. Caso queira e se sinta confortável pode fazer um CRUD completo.




### Sugestão de Rotas
[GET]  "artistas/all"   - retorna todos os autores de <br>
[GET] "artistas/{id}" - retorna um unico autor por id <br>
[POST] "artistas/create" - cria um novo autor <br>


### Sugestão de Schema

```
    {
        artista : string,
        likes: number,
        deslikes: number,
        musicas: array, // ["musica1", "musica2", ...]

    }
```


# Obrigada!

<img src="https://media.entertainmentearth.com/assets/images/5423d93ac5c6424aa42924b48b6eababxl.jpg" width="400" alt="luffy">

Qualquer dúvida pode entrar em contato <br>
[Instagram](https://www.instagram.com/isjanebea/) <br>
[Linkedin](https://www.linkedin.com/in/beatriz-ramerindo/)<br>
[Telegran](https://t.me/littlejanne)
