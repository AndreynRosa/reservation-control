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

´´´´
#DATAS SOURCE

spring.datasource.url=jdbc:postgresql://localhost:5432/myDb
spring.datasource.username=${dbUser:postgres}
spring.datasource.password=${dbPass:root}
spring.datasource.driver-class-name=org.postgresql.Driver
´´´´
</br>

No data source pode trocar a confuração, lembre-se se trocar o driver é preciso importar no poms.xml
