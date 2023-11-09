let arraySumas = []

for (let i = 0; i < 50; i++){
    
    const dado1  = Math.ceil(Math.random() * 6);
    const dado2  = Math.ceil(Math.random() * 6);
    const suma = dado1 + dado2;
    arraySumas.push(suma)
}

document.write(
    `<table>
        <thead>
            <tr>
                <th>Suma 🎲🎲</th>
                <th>Apariciones</th>
            </tr>
        </thead>
        <tbody>
    `
)

for (let i = 2; i < 13; i++){
    let contador = 0
    for (let j = 0; j < arraySumas.length; j++){
        if (arraySumas[j] === i){
            contador++
        }
    }
    document.write(
            `<tr>
                <td>${i}</td>
                <td>${contador} </td>
            </tr>`
    )
}

document.write(`
        </tbody>
    </table>
`)
