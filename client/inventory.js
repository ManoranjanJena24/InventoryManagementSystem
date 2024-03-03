var url="http://localhost:3000"

function handleFormSubmit(event){
    event.preventDefault()
    const item={
        item_name:event.target.item_name.value,
        description:event.target.description.value,
        price:document.getElementById('price').value,
        quantity:document.getElementById('quantity').value,
    }
    event.target.reset();
    postItem(item)
  
}
// http://localhost:3000
function getItems(){
    axios.get(url)
    .then((response)=>{
        console.log('Fetched items')
        renderItems(response.data)
    })
    .catch(err=>console.log(err))
}

// http://localhost:3000/update-item
function updateItem(item,id){
    axios.post(`${url}/update-item/${id}`,item).then(()=>{
        getItems()
    }).catch(err=>{
        console.log(err)
    })
}

// http://localhost:3000/add-item
function postItem(item){
    console.log(item)
    axios.post(`${url}/add-item`,item).then(()=>{
        getItems()
    }).catch(err=>console.log(err))
}

//chatgpt
function renderItems(items) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = ''; // Clear previous content
    
    items.forEach(item => {
        const id = item.id;
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const itemName = document.createElement('p');
        itemName.textContent = `Item Name: ${item.item_name}`;
        itemContainer.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = `Description: ${item.description}`;
        itemContainer.appendChild(itemDescription);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: ${item.price}`;
        itemContainer.appendChild(itemPrice);

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        itemContainer.appendChild(itemQuantity);

        const buyOneButton = document.createElement('button');
        buyOneButton.textContent = 'Buy One';
        buyOneButton.addEventListener('click', () => {
            item.quantity -= 1;
            updateItem(item,id);
        });
        itemContainer.appendChild(buyOneButton);

        const buyTwoButton = document.createElement('button');
        buyTwoButton.textContent = 'Buy Two';
        buyTwoButton.addEventListener('click', () => {
            item.quantity -= 2;
            updateItem(item,id);
        });
        itemContainer.appendChild(buyTwoButton);

        const buyThreeButton = document.createElement('button');
        buyThreeButton.textContent = 'Buy Three';
        buyThreeButton.addEventListener('click', () => {
            item.quantity -= 3;
            updateItem(item,id);
        });
        itemContainer.appendChild(buyThreeButton);

        mainContent.appendChild(itemContainer);
    });
}


document.addEventListener('DOMContentLoaded', getItems);