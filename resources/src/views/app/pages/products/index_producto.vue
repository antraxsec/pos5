<template>
  <div class="orders-list">
    <h1>Lista de Pedidos</h1>
    <table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>codigo </th>
          <th>Acción </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.total }}</td>
          <td>{{ order.total }}</td>
          <td>
            <button @click="editOrder(order.id)">Editar</button>
            <button @click="deleteOrder(order.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Datos simulados, reemplazar con datos reales de tu API
      orders: [
        { id: 1, customer: 'Ana Ruiz', date: '2022-06-14', total: '150.00' },
        { id: 2, customer: 'Carlos Pérez', date: '2022-06-15', total: '200.00' },
        // Añadir más pedidos aquí
      ]
    }
    },

    
    methods: {
        
    editOrder(id) {
      // Lógica para editar un pedido
      this.$router.push(`/app/orders/edit/${id}`);
    },
    deleteOrder(id) {
      // Lógica para eliminar un pedido
      // Podría involucrar llamar a una API y luego actualizar la lista de pedidos
      console.log('Eliminar pedido', id);
    }
    }
}
</script>

<style scoped>
.orders-list {
  padding: 20px;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
