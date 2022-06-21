const submit= () => {
    let item = document.getElementById('item-form').value;
    let price = "$" + document.getElementById('price-form').value;
  
    if(item == "" || price == "") {
        alert("Item or Price is missing");
    } else {
      let list = document.createElement("tr");
  
      let itemValue = document.createTextNode(item);
      let itemData = document.createElement('td')
      itemData.appendChild(itemValue)
      list.appendChild(itemData);
  
      let priceValue = document.createTextNode(price);
      let priceData = document.createElement('td')
      priceData.appendChild(priceValue)
      list.appendChild(priceData);
  
      let deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("Delete"));
      deleteButton.className = 'action-btn';                  
      let deleteData =  document.createElement('td'); 
      deleteData.appendChild(deleteButton);  
      list.appendChild(deleteData)               

      deleteButton.addEventListener("click", () => list.parentNode.removeChild(list));
      console.log("Clicked delete button");
  
      let grouplist = document.getElementById("list-item").appendChild(list);
      console.log(grouplist);
      document.getElementById('item-form').value = "";
      document.getElementById('price-form').value = "" 
      
    }
  }