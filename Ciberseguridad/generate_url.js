const plantumlEncoder = require('plantuml-encoder');
const diagram = `
@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

' Definición del estilo
LAYOUT_WITH_LEGEND()
LAYOUT_TOP_DOWN()

' Personas
Person(customer, "Customer", "A customer of the bank with personal bank accounts")

' Sistema de Internet Banking
System_Boundary(boundary0, "Internet Banking System") {
  Container(webapp, "Web Application", "Java, Spring MVC", "Delivers static content and the Internet banking SPA")
  Container(spa, "Single Page Application", "JavaScript, Angular", "Provides all the internet banking functionality")
  Container(mobileApp, "Mobile App", "C#, Xamarin", "Provides limited banking functionality")
  ContainerDb(database, "Database", "SQL Database", "Stores user information, auth credentials, etc.")
  Container(api, "API Application", "Java, Docker", "Provides internet banking functionality via API")
  
  ' Relaciones
  customer -> webapp : Uses
  webapp -> spa : Delivers
  spa -> api : Uses [JSON/HTTPS]
  api -> database : Reads from and writes to [JDBC]
  mobileApp -> api : Uses [JSON/HTTPS]
}

' Sistemas externos
System_Ext(emailSystem, "E-Mail System", "Microsoft Exchange", "Sends e-mails")
System_Ext(mainframe, "Mainframe Banking System", "Stores core banking information")

' Relaciones con sistemas externos
api -> emailSystem : Sends e-mails [SMTP]
api -> mainframe : Uses [XML/HTTPS]

@enduml
`;

const encoded = plantumlEncoder.encode(diagram);
console.log(`http://www.plantuml.com/plantuml/png/${encoded}`);
