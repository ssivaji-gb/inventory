 let inventory = [];

    function addOrUpdateProduct() {
      const id = Number(document.getElementById("id").value);
      const name = document.getElementById("name").value.trim();
      const quantity = Number(document.getElementById("quantity").value);
      const price = Number(document.getElementById("price").value);

      if (!id || !name || isNaN(quantity) || isNaN(price)) {
        alert("Please enter valid details");
        return;
      }

      const index = inventory.findIndex(p => p.id === id);

      if (index === -1) {
        inventory.push({ id, name, quantity, price });
      } else {
        inventory[index] = { id, name, quantity, price };
      }

      clearInputs();
      displayInventory(inventory);
    }

    function deleteProduct(id) {
      inventory = inventory.filter(p => p.id !== id);
      displayInventory(inventory);
    }

    function displayInventory(data) {
      const body = document.getElementById("inventoryBody");
      body.innerHTML = "";

      data.forEach(p => {
        body.innerHTML += `
          <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.quantity}</td>
            <td>₹${p.price}</td>
            <td><button class="danger" onclick="deleteProduct(${p.id})">Delete</button></td>
          </tr>`;
      });
    }

    function searchProduct() {
      const value = document.getElementById("search").value.toLowerCase();
      const filtered = inventory.filter(p => p.name.toLowerCase().includes(value));
      displayInventory(filtered);
    }

    function calculateTotal() {
      const total = inventory.reduce((sum, p) => sum + p.quantity * p.price, 0);
      document.getElementById("total").innerText = `Total Inventory Value: ₹${total}`;
    }

    function clearInputs() {
      document.getElementById("id").value = "";
      document.getElementById("name").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("price").value = "";
    }