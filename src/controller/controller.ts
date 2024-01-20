// If your console is showing [Array] instead of the actual array elements, it's just a console output format issue, 
// not a problem with your data structure. In your application logic, the color field will remain an array.

// When you need to display the data in your application's UI or send it in a response, it will retain its array format. 
// The [Array] notation is typical in many console environments, especially if the array is nested or contains multiple items.
// It's just a way to simplify the display and does not reflect a change in the actual data.

import * as model from '../model/model';

interface Response{
    status: string,
    response: model.Shoe[] 
}

const enum StatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404
}

const enum Messages {
    OK = "Solicitud exitosa",
    BAD_REQUEST = "Verifique los parametros ingresados",
    NOT_FOUND = "No se encontro la informacion solicitada"
}

type ResponseErrMsg = `${number} - ${string}`


function getGetAllShoes(){
    return model.getAll()
} 

function getShoesById(id: number): Response | ResponseErrMsg {

    if (isNaN(id)) return `${StatusCode.BAD_REQUEST} - ${Messages.BAD_REQUEST}`

    const shoe = model.getById(id)

    if(!shoe) return `${StatusCode.NOT_FOUND} - ${Messages.NOT_FOUND}`

    return{
        status: `${StatusCode.OK} - ${Messages.OK}`,
        response: shoe
    }

} 

const getByColor = (color: string): Response | ResponseErrMsg => {

    if (typeof color != 'string') {
        return `${StatusCode.BAD_REQUEST} - ${Messages.BAD_REQUEST}`
    }

    //  LEER LOS COMENTARIOS ARRIBA
    //   
    //    arrayShoe = arrayShoe.map((shoe: model.Shoe) => ({
    //     ...shoe,
    //     color: shoe.color.join(", ") 
    //     }));

    let arrayShoe = model.getByColor(color)

    if (arrayShoe.length === 0) {
        return `${StatusCode.NOT_FOUND} - ${Messages.NOT_FOUND}`
    }

    return {
        status: `${StatusCode.OK} - ${Messages.OK}`,
        response: arrayShoe
    }
}

let result = getByColor("Violet")
console.log("🚀 ~ result:", result)


