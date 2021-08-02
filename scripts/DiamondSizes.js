import { getSizes, setSize, getOrderBuilder } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

const sizes = getSizes()
export const DiamondSizes = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = sizes.map(
        (size) => {
            if (size.id === orderBuilder.sizeId) {
                return `<li>
                <input type="radio" name="size" value="${size.id}" checked /> ${size.size} 
                </li>`
            } else {
            return `<li>
                <input type="radio" name="size" value="${size.id}" /> ${size.size} 
                </li>`
            }
        }
    )
    // Join all of the strings in the array into a single string
    html += listItemsArray.join(" ")

    html += "</ul>"
    return html
}
