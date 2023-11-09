let ciudades = [];

do {
  const ciudad = prompt("Ingresa el nombre de una ciudad");
  if (ciudad !== null && ciudad !== '') {
    ciudades.push(ciudad);
  } else {
    alert("Ingrese una ciudad correctamente");
  }
} while (confirm("¿Queres seguir agregando ciudades?"));

if (ciudades.length > 0) {
    console.log(ciudades[0])
  if (ciudades.length < 2) {
    document.write(
      `<h4>El arreglo de ciudades tiene ${ciudades.length} elemento</h4>`
    );
  } else {
    document.write(
      `<h4>El arreglo de ciudades tiene ${ciudades.length} elementos</h4>`
    );
  }

  //Condicionales para mostrar el elemento de cada posicion.
  document.write("<ul>");
  document.write(`<li>Elemento 1er posición: ${ciudades[0]}</li>`);

  if (ciudades.length > 2) {
    document.write(`<li>Elemento 3er posición: ${ciudades[2]}</li>`);
  } else {
    document.write(`<li>No cuenta con un elemento en la tercer posición</li>`);
  }

    document.write(
      `<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`
    );

  ciudades.push("Paris");

  //Agregando la ultima posicion
  document.write(
    `<br><li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`
  );

  //Bucle para mostrar lista completa
  document.write(`
    <h2>Arreglo de ciudades</h2>
    <ul>
  `)
    for(let i = 0; i < ciudades.length; i++){
        document.write(`<li>Elemento: ${ciudades[i]}</li>`)
    }
  document.write('</ul>')

} else {
  document.write("No se agregó ninguna ciudad");
}


