import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

const styles = getStyles()
export const JewelryStyles = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(
        (style) => {
            if (style.id === orderBuilder.styleId) {
                return `<li>
                <input type="radio" name="style" value="${style.id}" checked /> ${style.style} 
                </li>`
            } else {
            return `<li>
                <input type="radio" name="style" value="${style.id}" /> ${style.style} 
                </li>`
            }
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</ul>"
    return html
}

