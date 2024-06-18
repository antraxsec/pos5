<template>
  <div class="orders-list">
    <h1>Lista de Pedidos</h1>
     <div slot="table-actions" class="mt-2 mb-3">
  <b-form-group :label="$t('warehouse')">
    <v-select
      @input="filterProductsByWarehouse"  v-model="warehouse_id"
      :reduce="label => label.value"
      :placeholder="$t('Choose_Warehouse')"
      :options="warehouses.map(warehouses => ({label: warehouses.name, value: warehouses.id}))"
    />
  </b-form-group>
</div>
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
          <td><img :src="'/images/products/' + order.image"  height="30"
              width="30" alt="product image"/></td>
          <td>{{ order.name }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.price }}</td>
          <td>{{ order.code }}</td>
          <td>
                <i class="i-Filter-2"></i>     
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
      orders: [],
      warehouses:[]
    };
  },
  methods: {
    Get_Products() {
      // Aquí va el código para obtener los productos de la API
      axios.get( "products?page=" +
            "1" +
            "&code=" +
            ""+
            "&name=" +
            "" +
            "&category_id=" +
            ""+
            "&brand_id=" +
            "" +
            "&SortField=" +
            "id" +
            "&SortType=" +
            "desc" +
            "&search=" +
            ""+
            "&limit=" +
        "50"
      ).then(response => {
        console.log(response)
        // prodeuctos
        this.orders = response.data.products;
         this.warehouses = response.data.warehouses;
        // this.orders = response.data.products.map(product => ({
        //   id: product.id,
        //   name: product.name,
        //   quantity: product.quantity,
        //   price: product.price,
        //   image: product.image,
        //   code: product.code
        // }));
        //Sucursal

      }).catch(error => {
        console.error('Error fetching products:', error);
      });
    },
    filterProductsByWarehouse(warehouseId) {
      console.log(warehouseId)
      console.log(this.orders)
      // this.orders = this.orders.filter((product) => {
      //   // Assuming 'warehouse' property exists in each product object
      //   // and contains an array of warehouse objects
      //   return product.warehouse.some(warehouse => warehouse.warehouse_id === warehouseId);
      // });
  },
    editOrder(id) {
      this.$router.push(`/app/orders/edit/${id}`);
    },
    deleteOrder(id) {
      console.log('Eliminar pedido', id);
    }
  },
  
  created() {
    this.Get_Products();
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
