const API = "http://localhost:1337/api";
const row = document.querySelector(".row");
const header_button = document.querySelector(".header_button");
const header_model_close = document.querySelector(".header_modal_close");
const header_modal_close_2 = document.querySelector(".header_modal_close_2");
const options_content_edit = document.querySelector(".options_content_edit");

async function GetProducts() {

    try {
        const data = await fetch(`${API}/products`).then((res) => res.json()).then((data) => data.data);
        // console.log(data);

        row.innerHTML = "";
        // console.log(data);


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
                    <div>
                        <h3>${product.Price.toLocaleString('en-US')}</h3>
                        <h4>UZS</h4>
                    </div>

                    <div class="options">
                        <button class="options_icon" onclick="OpenOptions(${id})">
                            <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z" fill="#687182"/>
                                <path d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z" fill="#687182"/>
                                <path d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z" fill="#687182"/>
                            </svg>
                        </button>

                        <div class="options_content">
                            <button class="options_content_edit" onclick="Edit('${product.documentId}')">
                                Edit
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0981 3.10827C10.6795 3.52693 10.4702 3.73626 10.2506 3.77677C10.0309 3.81728 9.88682 3.67315 9.59856 3.3849L8.61511 2.40144C8.32686 2.11319 8.18273 1.96906 8.22324 1.74946C8.26375 1.52985 8.47308 1.32052 8.89174 0.901864L9.11838 0.675215C9.53704 0.25656 9.74637 0.0472318 9.96598 0.00672082C10.1856 -0.0337902 10.3297 0.110336 10.618 0.398589L11.6014 1.38204C11.8897 1.6703 12.0338 1.81442 11.9933 2.03403C11.9528 2.25364 11.7434 2.46297 11.3248 2.88162L11.0981 3.10827Z" fill="#4B85FA"/>
                                        <path d="M0.954058 11.9107C0.454198 12.0029 0.204269 12.049 0.077628 11.9224C-0.0490128 11.7957 -0.00290857 11.5458 0.0893002 11.0459L0.311753 9.84003C0.35173 9.62332 0.371719 9.51497 0.43005 9.41009C0.488381 9.30521 0.579134 9.21446 0.76064 9.03295L6.31438 3.47921C6.73303 3.06056 6.94236 2.85123 7.16197 2.81072C7.38158 2.77021 7.5257 2.91433 7.81396 3.20259L8.79741 4.18604C9.08566 4.4743 9.22979 4.61842 9.18928 4.83803C9.14877 5.05764 8.93944 5.26697 8.52078 5.68562L2.96705 11.2394C2.78554 11.4209 2.69479 11.5116 2.58991 11.5699C2.48503 11.6283 2.37668 11.6483 2.15997 11.6882L0.954058 11.9107Z" fill="#4B85FA"/>
                                    </svg>
                                </span>
                            </button>

                            <button class="options_content_del" onclick="Delete('${product.documentId}')">
                                Delete
                                <span>
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.75V3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H1.51389L1.89504 11.6109C1.95392 12.6708 2.8305 13.5 3.89196 13.5H8.10802C9.16948 13.5 10.0461 12.6708 10.1049 11.6109L10.4861 4.75H11.25C11.6642 4.75 12 4.41421 12 4C12 3.58579 11.6642 3.25 11.25 3.25H9.25V2.75C9.25 1.50736 8.24264 0.5 7 0.5H5C3.75736 0.5 2.75 1.50736 2.75 2.75ZM5 2C4.58579 2 4.25 2.33579 4.25 2.75V3.25H7.75V2.75C7.75 2.33579 7.41421 2 7 2H5ZM5.25 6.75C5.25 6.33579 4.91421 6 4.5 6C4.08579 6 3.75 6.33579 3.75 6.75V11.25C3.75 11.6642 4.08579 12 4.5 12C4.91421 12 5.25 11.6642 5.25 11.25V6.75ZM8.25 6.75C8.25 6.33579 7.91421 6 7.5 6C7.08579 6 6.75 6.33579 6.75 6.75V11.25C6.75 11.6642 7.08579 12 7.5 12C7.91421 12 8.25 11.6642 8.25 11.25V6.75Z" fill="#DC4067"/>
                                    </svg>
                                </span>
                            </button>

                        </div>
                    </div>

                </td>

                

            </tr>`
        })

    } catch (error) {
        console.log(error);
    }
}

GetProducts();

// Edit tugmasi bosilganda edit modalni ishga tushiradigan f-ya
function OpenEditModal() {
    document.querySelector(".modal_box_edit").classList.add("active_modal");
    document
        .querySelector(".content_modal_box_edit")
        .classList.add("active_content_modal");
}

// Edit tugmasi bosilganda edit modal ochiladi va qiymatlari APIdan olib kelinadi
function Edit(id) {
    ProductIdValue = id;
    console.log(ProductIdValue);
    fetch(`${API}/products/${id}`).then((res) => res.json()).then((res) => {
        OpenEditModal();

        const data = res.data;
        productData = {
            productName: data.productName || "",
            productID: data.productID || "",
            Description: data.Description?.[0]?.children?.[0]?.text || "",
            productStatus: data.productStatus ?? true,
            purePrice: data.purePrice || 0,
            higherPrice: data.higherPrice || 0,
            Price: data.Price || 0,
        };

        document.querySelector(".form_modal_edit #productName").value = productData.productName;
        document.querySelector(".form_modal_edit #productCode").value = productData.productID;
        document.querySelector(".form_modal_edit #description").value = productData.Description;
        document.querySelector(".form_modal_edit #productStatus").value = productData.productStatus;
        document.querySelector(".form_modal_edit #PurePrice").value = productData.purePrice;
        document.querySelector(".form_modal_edit #higherPrice").value = productData.higherPrice;
        document.querySelector(".form_modal_edit #Price").value = productData.Price;
    }).catch((error) => {
        console.log(error);
    })
}

// inputlarni yangilash (foydalanuvchi o'zgartirganda)
function handleInputChange(event) {
    const { name, value } = event.target;
    productData[name] = value; // yangi qiymatni global o'zgaruvchiga yozamiz
}

// edit modalni yopadi X tugmasi bosilganda
document.querySelector(".header_modal_close_edit").addEventListener("click", function () {
    document.querySelector(".modal_box_edit").classList.remove("active_modal");
    document
        .querySelector(".content_modal_box_edit")
        .classList.remove("active_content_modal");
});

// edit modalni yopadi yopish tugmasini bosganda
document.querySelector(".header_modal_close_2_edit").addEventListener("click", function () {
    document.querySelector(".modal_box_edit").classList.remove("active_modal");
    document
        .querySelector(".content_modal_box_edit")
        .classList.remove("active_content_modal");
});

//edit modalni ichidagi o'zgartirish tugmasi bosilganda ma'lumotlarni APIda va ekranda o'zgartiradi
function EditProduct(event) {
    event.preventDefault();

    // console.log("Yuborilayotgan data:", productData);

    fetch(`${API}/products/${ProductIdValue}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                ...productData,
                Description: [
                    {
                        type: "paragraph",
                        children: [{ type: "text", text: productData.Description }],
                    },
                ],
            },
        }),
    })

        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".modal_box_edit").classList.remove("active_modal");
            document
                .querySelector(".content_modal_box_edit")
                .classList.remove("active_content_modal");
            GetProducts();
        })
        .catch((error) => console.error("Xatolik:", error));
}

// delete knopkasi bosilganda aynan o'sha mahsulot ekrandan va APIdan o'chiriladi
function Delete(id) {
    // console.log(id);
    fetch(`${API}/products/${id}`, {
        method: "Delete"
    }).then(() => {
        GetProducts();
    }).catch((error) => {
        console.log(error);
    })
}

//ekranni boshqa tomoniga bosilganda options dropdown yopiladi
document.addEventListener("click", function (event) {
    document.querySelectorAll(".options_content").forEach((menu) => {
        if (!menu.contains(event.target) && !event.target.classList.contains("options_icon")) {
            menu.classList.remove("active");
        }
    });
});

// 3 ta nuqta bosilganda options dropdown ochiladi
function OpenOptions(id) {

    // barcha menularni yopish
    document.querySelectorAll(".options_content").forEach((menu) => {
        menu.classList.remove("active");
    });

    // faqat tanlangtan menu ochish
    let menu = document.querySelectorAll("tr")[id + 1].children[6].children[1].children[1];
    menu.classList.toggle("active");
}

// qo'shish modalini yopadi
function closeModal() {
    document.querySelector(".modal_box").classList.remove("active_modal");
    document
        .querySelector(".content_modal_box")
        .classList.remove("active_content_modal");
}

// mahsulot qo'shish knopkasi bosilganda qo'shish modalini ochadi
header_button.addEventListener("click", function () {

    document.querySelector(".form_modal").reset();

    document.querySelector(".modal_box").classList.add("active_modal");
    document
        .querySelector(".content_modal_box")
        .classList.add("active_content_modal");
})

// qo'shish modali ichidagi X tugmasi bosilganda qo'shish modalini yopadi
header_model_close.addEventListener("click", function () {
    closeModal();
})

// qo'shish modali ichidagi yopish tugmasi bosilganda qo'shish modalini yopadi
header_modal_close_2.addEventListener("click", function () {
    closeModal();
})

// qo'shish modali ichidagi qo'shish tugmasi bosilganda ma'lumotlarni strapiga qo'shadi va ekranni yangilab ma'lumotlarni ekranga ko'rsatadi
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
                Description: [
                    {
                        "type": "paragraph",
                        "children": [
                            {
                                "type": "text",
                                "text": Description,
                            },
                        ],
                    },
                ],
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

// search funksiyasi inputga kiritilgan mahsulot nomini Apidan qidirib ekranga mosini chiqaradi
function Search(event) {
    const value = event.target.value.trim(); // faqat bo'sh joylarni olib tashlash
    if (!value) {
        console.log("NO search value provided");
        return;
    }
    try {
        fetch(`${API}/products?filters[productName][$containsi]=${value}&populate=*`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data.length > 0) {
                    console.log("Search result:", data);
                    row.innerHTML = "";

                    data.data.map((product, id) => {
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
                                <div>
                                    <h3>${product.Price.toLocaleString('en-US')}</h3>
                                    <h4>UZS</h4>
                                </div>
            
                                <div class="options">
                                    <button class="options_icon" onclick="OpenOptions(${id})">
                                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z" fill="#687182"/>
                                            <path d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z" fill="#687182"/>
                                            <path d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z" fill="#687182"/>
                                        </svg>
                                    </button>
            
                                    <div class="options_content">
                                        <button class="options_content_edit" onclick="Edit('${product.documentId}')">
                                            Edit
                                            <span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.0981 3.10827C10.6795 3.52693 10.4702 3.73626 10.2506 3.77677C10.0309 3.81728 9.88682 3.67315 9.59856 3.3849L8.61511 2.40144C8.32686 2.11319 8.18273 1.96906 8.22324 1.74946C8.26375 1.52985 8.47308 1.32052 8.89174 0.901864L9.11838 0.675215C9.53704 0.25656 9.74637 0.0472318 9.96598 0.00672082C10.1856 -0.0337902 10.3297 0.110336 10.618 0.398589L11.6014 1.38204C11.8897 1.6703 12.0338 1.81442 11.9933 2.03403C11.9528 2.25364 11.7434 2.46297 11.3248 2.88162L11.0981 3.10827Z" fill="#4B85FA"/>
                                                    <path d="M0.954058 11.9107C0.454198 12.0029 0.204269 12.049 0.077628 11.9224C-0.0490128 11.7957 -0.00290857 11.5458 0.0893002 11.0459L0.311753 9.84003C0.35173 9.62332 0.371719 9.51497 0.43005 9.41009C0.488381 9.30521 0.579134 9.21446 0.76064 9.03295L6.31438 3.47921C6.73303 3.06056 6.94236 2.85123 7.16197 2.81072C7.38158 2.77021 7.5257 2.91433 7.81396 3.20259L8.79741 4.18604C9.08566 4.4743 9.22979 4.61842 9.18928 4.83803C9.14877 5.05764 8.93944 5.26697 8.52078 5.68562L2.96705 11.2394C2.78554 11.4209 2.69479 11.5116 2.58991 11.5699C2.48503 11.6283 2.37668 11.6483 2.15997 11.6882L0.954058 11.9107Z" fill="#4B85FA"/>
                                                </svg>
                                            </span>
                                        </button>
            
                                        <button class="options_content_del" onclick="Delete('${product.documentId}')">
                                            Delete
                                            <span>
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.75V3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H1.51389L1.89504 11.6109C1.95392 12.6708 2.8305 13.5 3.89196 13.5H8.10802C9.16948 13.5 10.0461 12.6708 10.1049 11.6109L10.4861 4.75H11.25C11.6642 4.75 12 4.41421 12 4C12 3.58579 11.6642 3.25 11.25 3.25H9.25V2.75C9.25 1.50736 8.24264 0.5 7 0.5H5C3.75736 0.5 2.75 1.50736 2.75 2.75ZM5 2C4.58579 2 4.25 2.33579 4.25 2.75V3.25H7.75V2.75C7.75 2.33579 7.41421 2 7 2H5ZM5.25 6.75C5.25 6.33579 4.91421 6 4.5 6C4.08579 6 3.75 6.33579 3.75 6.75V11.25C3.75 11.6642 4.08579 12 4.5 12C4.91421 12 5.25 11.6642 5.25 11.25V6.75ZM8.25 6.75C8.25 6.33579 7.91421 6 7.5 6C7.08579 6 6.75 6.33579 6.75 6.75V11.25C6.75 11.6642 7.08579 12 7.5 12C7.91421 12 8.25 11.6642 8.25 11.25V6.75Z" fill="#DC4067"/>
                                                </svg>
                                            </span>
                                        </button>
            
                                    </div>
                                </div>
            
                            </td>
            
                            
            
                        </tr>`
                    });
                    console.log(data.data);

                } else {
                    console.log("Search result:", data.data, length);
                    row.innerHTML = "<td colspan='7' class='notFound'>Mahsulot Topilmadi</td>";
                }

            })
            .catch((error) => console.error("Fetch error:", error));
    } catch (error) {
        console.error("Try-catch error:", error);
    }
}

// Filter funksiyasi bosilganda mahsulotlarni alfavit bo'yicha tartiblaydi.
async function Filter() {
    try {
        await fetch(`${API}/products`).then((res) => res.json()).then((data) => {
            const Data = data.data;
            const sortedData = Data.sort((a, b) => a.productName.localeCompare(b.productName));
            row.innerHTML = "";

            sortedData.map((product, id) => {
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
                            <div>
                                <h3>${product.Price.toLocaleString('en-US')}</h3>
                                <h4>UZS</h4>
                            </div>
        
                            <div class="options">
                                <button class="options_icon" onclick="OpenOptions(${id})">
                                    <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2Z" fill="#687182"/>
                                        <path d="M3.5 8C3.5 8.82843 2.82843 9.5 2 9.5C1.17157 9.5 0.5 8.82843 0.5 8C0.5 7.17157 1.17157 6.5 2 6.5C2.82843 6.5 3.5 7.17157 3.5 8Z" fill="#687182"/>
                                        <path d="M3.5 14C3.5 14.8284 2.82843 15.5 2 15.5C1.17157 15.5 0.5 14.8284 0.5 14C0.5 13.1716 1.17157 12.5 2 12.5C2.82843 12.5 3.5 13.1716 3.5 14Z" fill="#687182"/>
                                    </svg>
                                </button>
        
                                <div class="options_content">
                                    <button class="options_content_edit" onclick="Edit('${product.documentId}')">
                                        Edit
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.0981 3.10827C10.6795 3.52693 10.4702 3.73626 10.2506 3.77677C10.0309 3.81728 9.88682 3.67315 9.59856 3.3849L8.61511 2.40144C8.32686 2.11319 8.18273 1.96906 8.22324 1.74946C8.26375 1.52985 8.47308 1.32052 8.89174 0.901864L9.11838 0.675215C9.53704 0.25656 9.74637 0.0472318 9.96598 0.00672082C10.1856 -0.0337902 10.3297 0.110336 10.618 0.398589L11.6014 1.38204C11.8897 1.6703 12.0338 1.81442 11.9933 2.03403C11.9528 2.25364 11.7434 2.46297 11.3248 2.88162L11.0981 3.10827Z" fill="#4B85FA"/>
                                                <path d="M0.954058 11.9107C0.454198 12.0029 0.204269 12.049 0.077628 11.9224C-0.0490128 11.7957 -0.00290857 11.5458 0.0893002 11.0459L0.311753 9.84003C0.35173 9.62332 0.371719 9.51497 0.43005 9.41009C0.488381 9.30521 0.579134 9.21446 0.76064 9.03295L6.31438 3.47921C6.73303 3.06056 6.94236 2.85123 7.16197 2.81072C7.38158 2.77021 7.5257 2.91433 7.81396 3.20259L8.79741 4.18604C9.08566 4.4743 9.22979 4.61842 9.18928 4.83803C9.14877 5.05764 8.93944 5.26697 8.52078 5.68562L2.96705 11.2394C2.78554 11.4209 2.69479 11.5116 2.58991 11.5699C2.48503 11.6283 2.37668 11.6483 2.15997 11.6882L0.954058 11.9107Z" fill="#4B85FA"/>
                                            </svg>
                                        </span>
                                    </button>
        
                                    <button class="options_content_del" onclick="Delete('${product.documentId}')">
                                        Delete
                                        <span>
                                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 2.75V3.25H0.75C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75H1.51389L1.89504 11.6109C1.95392 12.6708 2.8305 13.5 3.89196 13.5H8.10802C9.16948 13.5 10.0461 12.6708 10.1049 11.6109L10.4861 4.75H11.25C11.6642 4.75 12 4.41421 12 4C12 3.58579 11.6642 3.25 11.25 3.25H9.25V2.75C9.25 1.50736 8.24264 0.5 7 0.5H5C3.75736 0.5 2.75 1.50736 2.75 2.75ZM5 2C4.58579 2 4.25 2.33579 4.25 2.75V3.25H7.75V2.75C7.75 2.33579 7.41421 2 7 2H5ZM5.25 6.75C5.25 6.33579 4.91421 6 4.5 6C4.08579 6 3.75 6.33579 3.75 6.75V11.25C3.75 11.6642 4.08579 12 4.5 12C4.91421 12 5.25 11.6642 5.25 11.25V6.75ZM8.25 6.75C8.25 6.33579 7.91421 6 7.5 6C7.08579 6 6.75 6.33579 6.75 6.75V11.25C6.75 11.6642 7.08579 12 7.5 12C7.91421 12 8.25 11.6642 8.25 11.25V6.75Z" fill="#DC4067"/>
                                            </svg>
                                        </span>
                                    </button>
        
                                </div>
                            </div>
        
                        </td>
        
                        
        
                    </tr>`
            });
        });
    } catch (error) {
        console.log(error);
    }
}