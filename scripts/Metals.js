import { getMetals, setMetal, setState } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            setState(event.target.value)
            window.alert(event.target.value)
        }
    }
)

const metals = getMetals()
const id = setState()
export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if (metal.id === 2) {
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}" checked="checked" /> ${metal.metal}
        </li>`
    } else {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }
    }
    debugger
    html += "</ul>"
    return html
}



