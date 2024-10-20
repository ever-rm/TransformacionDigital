const plantumlEncoder = require('plantuml-encoder');
const diagram = `@startuml
Alice -> Bob: Hello
@enduml`;

const encoded = plantumlEncoder.encode(diagram);
console.log(`http://www.plantuml.com/plantuml/png/${encoded}`);
