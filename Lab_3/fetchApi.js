const searchInput = document.querySelector('[data-search]');
const sortAscButton = document.getElementById('sortAsc');
const sortDescButton = document.getElementById('sortDesc');
const resetButton = document.getElementById('resetOrder');

let productsSearch = [];
let originalOrder = [];

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    productsSearch.forEach((product) => {
        const isVisible = product.title.toLowerCase().includes(value) || product.description.toLowerCase().includes(value);
        product.element.classList.toggle('hide', !isVisible);
    });
});

fetchData();

async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        const products = data.products.slice(0, 30);
        const productTable = document.getElementById('productTable');

        originalOrder = [...products];

        productsSearch = products.map(product => {
            const row = document.createElement('tr');

            const imageCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = product.thumbnail;
            imageCell.appendChild(img);
            row.appendChild(imageCell);

            const titleCell = document.createElement('td');
            titleCell.textContent = product.title;
            row.appendChild(titleCell);

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = product.description;
            row.appendChild(descriptionCell);

            productTable.appendChild(row);

            return { thumbnail: product.thumbnail, title: product.title, description: product.description, element: row };
        });
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

sortAscButton.addEventListener('click', () => {
    sortTable('asc');
});

sortDescButton.addEventListener('click', () => {
    sortTable('desc');
});

resetButton.addEventListener('click', () => {
    resetTable();
});

function sortTable(order) {
    const productTable = document.getElementById('productTable');
    productsSearch.sort((a, b) => {
        if (order === 'asc') {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });

    productTable.innerHTML = '';
    productsSearch.forEach(product => productTable.appendChild(product.element));
}

function resetTable() {
    const productTable = document.getElementById('productTable');
    productTable.innerHTML = '';
    productsSearch = originalOrder.map(product => {
        const row = document.createElement('tr');

        const imageCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = product.thumbnail;
        imageCell.appendChild(img);
        row.appendChild(imageCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = product.title;
        row.appendChild(titleCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = product.description;
        row.appendChild(descriptionCell);

        productTable.appendChild(row);

        return { thumbnail: product.thumbnail, title: product.title, description: product.description, element: row };
    });
}
