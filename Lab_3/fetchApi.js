fetchData();

async function fetchData(){

    try{
        const response = await fetch('https://dummyjson.com/products');

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        const products = data.products.slice(0,30);
        const productTable = document.getElementById('productTable');

        products.forEach(product => {
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

        })
    }
    catch(error){
        console.error('Error fetching data', error);
    }
}
