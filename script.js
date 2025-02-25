const API = "http://localhost:1337/api";
const row = document.querySelector(".row");
const header_button = document.querySelector(".header_button");
const header_model_close = document.querySelector(".header_modal_close");
const header_modal_close_2 = document.querySelector(".header_modal_close_2");

async function GetProducts() {

    try {
        const data = await fetch(`${API}/products`).then((res) => res.json()).then((data) => data.data);
        // console.log(data);

        row.innerHTML = "";

        data.map((product, id) => {
            row.innerHTML += `<tr>

            <td>${id + 1}</td>

                <td>
                    <h1>${product.productName}</h1>
                    <h4>${product.productID}</h4>
                </td>

                <td>
                    <p>${product.Description[0].children[0].text}</p>
                </td>

                <td class="status"><span class="${product.productStatus}">${product.productStatus ? "Bor" : "Yo'q"}</span></td>

                <td>
                    <h3>${product.purePrice.toLocaleString('en-US')}</h3>
                    <h4>UZS</h4>
                </td>

                <td>
                    <h3>${product.higherPrice.toLocaleString('en-US')}</h3>
                    <h4>UZS</h4>
                </td>

                <td>
                    <h3>${product.Price.toLocaleString('en-US')}</h3>
                    <h4>UZS</h4>
                </td>

            </tr>`
        })

    } catch (error) {
        console.log(error);
    }
}

GetProducts();

function closeModal() {
    document.querySelector(".modal_box").classList.remove("active_modal");
    document.querySelector(".content_modal_box").classList.remove("active_content_modal");
}

header_button.addEventListener("click", function () {
    document.querySelector(".modal_box").classList.add("active_modal");
    document.querySelector(".content_modal_box").classList.add("active_content_modal");
})
header_model_close.addEventListener("click", function () {
    closeModal();
})
header_modal_close_2.addEventListener("click", function () {
    closeModal();
})


function CreatProduct(event) {
    event.preventDefault();
    const productName = document.querySelector("#productName").value;
    const productID = document.querySelector("#productCode").value;
    const Description = document.querySelector("#description").value;
    const productStatus = document.querySelector("#productStatus").value;
    const purePrice = document.querySelector("#PurePrice").value;
    const higherPrice = document.querySelector("#higherPrice").value;
    const Price = document.querySelector("#Price").value;

    fetch(`${API}/products`, {
        method: "Post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                productName,
                productID,
                Description: [{
                    "type": "paragraph",
                    "children": [{
                        "type": "text",
                        "text": Description
                    }]
                }],
                productStatus,
                purePrice,
                higherPrice,
                Price,
            }
        })
    }).then((res) => {
        console.log(res);
        closeModal();
        GetProducts();
    }).catch((error) => {
        console.log(error);
    })
}