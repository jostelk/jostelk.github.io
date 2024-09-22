const urlParams = new URLSearchParams(window.location.search);
const propiedadId = urlParams.get('id');

const propiedades = [
    {
        id: 1,
        nombre: "Apartamento en Cordón",
        descripcion: "Apartamento en el corazón de Montevideo",
        precio: "$100,000",
        ubicacion: "Cordón, Montevideo"
    },
    {
        id: 2,
        nombre: "Penthouse en Edificio Henko Park",
        descripcion: "Penthouse a estrenar en el corazón de Cordón",
        precio: "$45,000",
        ubicacion: "Cordón, Montevideo",
        caracteristicas: [
            "90 M2",
            "Apartamento al frente",
            "Muy luminoso y ventilado",
            "Terraza con parrillero en la unidad",
            "2 dormitorios",
            "1 baño completo",
            "Cocina integrada con placares",
            "Anafe y horno empotrado",
            "Campana extractora",
            "Aire acondicionado en dormitorio y living comedor",
            "Living comedor con amplios ventanales que dan acceso hacia terraza con parrillero",
            "Conexión para lavarropas",
            "Garage para un auto incluido en el precio"
        ],
        gastosComunes: "$4,500",
        garantias: ["Aseguradoras", "Anda", "Contaduria"]
    },
    {
        id: 3,
        nombre: "Casa 8 de octubre",
        descripcion: "Casa familiar en un barrio tranquilo",
        precio: "$150,000",
        ubicacion: "8 de octubre, Montevideo"
    }
];

const propiedad = propiedades.find((propiedad) => propiedad.id === parseInt(propiedadId));

if (propiedad) {
    document.getElementById('property-name').textContent = propiedad.nombre;
    document.getElementById('property-description').textContent = propiedad.descripcion;
    document.getElementById('property-price').textContent = propiedad.precio;
    document.getElementById('property-location').textContent = propiedad.ubicacion;
} else {
    console.error('No se encontró la propiedad con el ID', propiedadId);
}