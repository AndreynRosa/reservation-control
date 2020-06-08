# Reservation-control

O projeto consiste em uma parte, vaolta ao servidor. O back-end que se encontra na pasta reserv.
<h1>API JAVA</h1>

<h3> Tecnologias</h3>
Este projeto consite em um Api desenvolvida com Java 8, na IDE do Eclipse. (mas poderá facilmente rodar com outro ou diretamente no maven). </br >
Foi desenvolvido parcialmente em TDD, assim o projeto possui so casos de sucesso para o crud das duas entidas. 

<ul>
  <li>SpringBoot </li> 
   <li>SpringFramework </li>
   <li>Hibernate </li>
   <li>Postgresql </li>
   <li>Junit </li>
 </uL>
</br>
<h3>Configuração do banco de dados </h3>
Caso queira trocar o bacno de dados</br>
Vá ate a pasta <b> reservation-control\reserv\src\main\resources </b>
no documento <b>application.properties </b>

````
#DATAS SOURCE

spring.datasource.url=jdbc:postgresql://localhost:5432/myDb
spring.datasource.username=${dbUser:postgres}
spring.datasource.password=${dbPass:root}
spring.datasource.driver-class-name=org.postgresql.Driver
````
</br>

No bloco de data source pode trocar a confuração, lembre-se se trocar o driver é preciso importar no poms.xml</br>
Crie um banco de dados chamado myDb e  rode build do projeto. Ele se encarregará de criar as tabelas no seu banco.
</br>

<h3> Rodar o projeto, o Run </h3>
Você pode importar toda a pasta resve para a IDE de sua preferencia. </br>
Caso queira rodar os testes, terá uma carga de dados interessante para visualizar o sistema.</br>
Os testes se encontram na pasta <b> \reservation-control\reserv\src\test\java\com\java\reserv </b>
Para executalos depois de biuld 
Execute como um pojeto Spring ou se previr via Maven via Maven </br>
Lembrando que o prejeto feio feito com Eclipse.
Rode como um projeto spring 
</br>
</br>
por default o porjeto roda na porta <b>9080</b>


As rotas estão documetadas no postMan no link
<a> https://web.postman.co/collections/5272687-ddf56e15-3008-419e-9934-b0f038273245?version=latest&workspace=2d8a07d4-3257-4511-8d75-b5496d06bb4d<a/>



<h1>REACT APP</h1>
<h3> Sobre</h3>
O sistema criado considera que o usuário já está autenticado, e é um administrador do sistema, pois tem acesso a todas as funcionalidades.

Se pensando em apenas um usuário morador de um condomínio ele teria acesso apenas a fazer reservas. Funcionalidade que pode ser acessada pelos Cards dispostos na pagina de entrada do usuário logado.


<h3>Tecnologias </h3>
Foi desenvolvido utilizando react, por tanto precisára do Node.js na sua maquina;
<ul>
  <li>styled-components</li>
  <li>matirial</li>
  <li>prettier </li> 
   <li>eslint </li>
   <li>hooks </li>
 </uL>
 </br>
 <h3> Build do projeto</h3>
 a partir da raiz do projeto abra a pasta App.</br>
 rode o script:</br>
 ### `npm install` 
 ou
 ### `yarn` 
 Assim você ira instalar os node_modules.</br>
 ### `npm start` </br>
 ou
  ### `yarn start`
 O projeto irá rodar e abrir no navegador;
 No <a>http://localhost:3000/</a>

 
