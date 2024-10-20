# Sistema de reescritura de Markov para transformar rutas de negocios
def markov_transform(input_string, rules):
    # Mientras haya reglas que aplicar, seguimos reescribiendo la cadena
    while True:
        for pattern, replacement in rules:
            # Si la cadena contiene el patrón, aplicamos la regla y la reescribimos
            if pattern in input_string:
                input_string = input_string.replace(pattern, replacement, 1)
                print(f"Transformación aplicada: {input_string}")
                break
        else:
            # Si no se aplicó ninguna transformación, salimos del bucle
            break
    return input_string

# Reglas de transformación: pares (patrón, reemplazo)
rules = [
    ("Innovación en Negocios", "Estrategias de Negocios"),
    ("Estrategias de Negocios", "Fundamentos de Negocios"),
    ("Fundamentos de Negocios", "Métricas: El lenguaje de los negocios"),
    ("Métricas: El lenguaje de los negocios", "Innovación en Negocios")
]

# Cadena inicial
input_string = "Innovación en Negocios"

# Ejecutar transformación de Markov
print(f"Cadena inicial: {input_string}")
final_string = markov_transform(input_string, rules)
print(f"Cadena final: {final_string}")
