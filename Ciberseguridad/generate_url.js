const plantumlEncoder = require('plantuml-encoder');

const diagram = `
@startuml
' Configuración de estilo para mejorar la estética
skinparam rectangle {
  BackgroundColor #B3C7E6
  BorderColor black
  FontColor black
  RoundCorner 15
  FontSize 12
}
skinparam class {
  BackgroundColor #B3C7E6
  BorderColor black
  FontColor black
  RoundCorner 15
  FontSize 12
}
skinparam shadowing false
skinparam linetype ortho

' Categoría principal
class "Malware Category" as malwareCategory {
}

' Subcategorías de malware con cantidad de muestras
class "Adware\\n17,575" as adware
class "Backdoor\\n3,393" as backdoor
class "Banking\\n3,658" as banking
class "Ransomware\\n3,456" as ransomware
class "Riskware\\n5,138" as riskware
class "SMSMalware\\n11,426" as smsmalware
class "Spyware\\n3,435" as spyware

' Relaciones entre categoría principal y subcategorías
malwareCategory --> adware : Contiene
malwareCategory --> backdoor : Contiene
malwareCategory --> banking : Contiene
malwareCategory --> ransomware : Contiene
malwareCategory --> riskware : Contiene
malwareCategory --> smsmalware : Contiene
malwareCategory --> spyware : Contiene

@enduml
`;

const encoded = plantumlEncoder.encode(diagram);
console.log(`http://www.plantuml.com/plantuml/png/${encoded}`);
