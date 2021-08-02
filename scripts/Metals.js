import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

 
const metals = getMetals()
export const Metals = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if (metal.id === orderBuilder.metalId) {
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}" checked /> ${metal.metal}
        </li>`
    } else {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }
    }

    html += "</ul>"
    return html
}



