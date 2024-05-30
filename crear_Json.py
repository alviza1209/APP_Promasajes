import json

datos = {} # Diccionario
datos["productos"] = [] # Lista
datos["productos"].append({
    "id": 1,
    "imagen_path": "/promasaje_FullDay.jpg",
    "precio": "$ 22.000",
    "descripcion": "Un tratamiento completo, para mimar tu cuerpo y tu belleza",
    "titulo": "Spa Full Day"
})
datos["productos"].append({
    "id": 2,
    "imagen_path": "/promasajes_PackABreak.jpg",
    "precio": "$ 17.500",
    "descripcion": "Un Break para darte caricias a todo tu cuerpo",
    "titulo": "Masajes y Facial"
})
datos["productos"].append({
    "id": 3,
    "imagen_path": "/promasajes_Antiage01.jpg",
    "precio": "$ 15.000",
    "descripcion": "Porque puedes ganarle la carrera al tiempo",
    "titulo": "Facial Anti Edad"
})
datos["productos"].append({
    "id": 4,
    "imagen_path": "/promasajes_PackRenovacion.jpg",
    "precio": "$ 18.000",
    "descripcion": "Renueva la energia de tu cuerpo y la lozania de tu rostro",
    "titulo": "Renovacion"
})
datos["productos"].append({
    "id": 5,
    "imagen_path": "/promasaje_Dermaplaning.jpg",
    "precio": "$ 16.500",
    "descripcion": "Limpia las impurezas de tu cara y luciras radiante",
    "titulo": "Dermaplaning"
})
datos["productos"].append({
    "id": 6,
    "imagen_path": "/promasaje_Relajante.jpg",
    "precio": "$ 18.800",
    "descripcion": "Elimina las consecuencias del estres en tu rostro, y luce perfecta",
    "titulo": "Facial Relajante"
})
datos["productos"].append({
    "id": 7,
    "imagen_path": "/promasaje_Parejas.jpg",
    "precio": "$ 30.000",
    "descripcion": "Escapate a una aventura con tu pareja",
    "titulo": "Pack Parejas"
})
datos["productos"].append({
    "id": 8,
    "imagen_path": "/promasajes_CuatroManos.jpg",
    "precio": "$ 26.000",
    "descripcion": "Descubre las bondades de un masaje a cuatro manos",
    "titulo": "Cuatro Manos"
})

with open('datos.json', 'w') as file:
    json.dump(datos, file, indent=4)