const lista = document.querySelector('#listado')

fetch('data.json')
.then((res) => res.json()
    .then((data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.partidoId}</h4>
                <p>${producto.equipoLocal}</p>
                <p>${producto.equipoVisitante}</p>
                <p>${producto.golesLocal}</p>
                <p>${producto.golesVisitante}</p>
                <hr/>

            `

            lista.append(li)
        })
    })
    );