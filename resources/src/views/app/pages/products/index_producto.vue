<template>
  <div class="container">
    <b-button @click="download_PDF()" size="sm" variant="outline-success ripple m-1">
      <i class="i-File-Copy"></i> PDF
    </b-button>

    <div class="mb-4">
      <label for="sucursalSelector" class="form-label">Seleccione una Sucursal:</label>
      <v-select
        v-model="selectedWarehouse"
        :options="warehouses"
        label="name"
        @input="displayProductsByWarehouse"
        placeholder="Seleccione una Sucursal"
      />
    </div>

    <h1 class="text-center my-4">MAG COMP</h1>
    <div id="products-container">
      <div v-for="category in filteredProducts" :key="category.name" class="product-category">
        <h3 class="mt-4">{{ category.name }}</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Código</th>
                <th scope="col">ver</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in category.products" :key="product.id">
                <td><img :src="'/images/products/' + product.image" alt="product.name" width="30"></td>
                <td>{{ product.name }}</td>
                <td>{{ getQuantityByWarehouse(product, selectedWarehouse) }}</td>
                <td>Bs. {{ product.price }}</td>
                <td>{{ product.code }}</td>
                <td>
                  <i class="bi bi-gear"></i>ver
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  components: { vSelect },
  data() {
    return {
      warehouses: [
        { name: 'Todas', value: 'all' },
        { name: 'Sucursal - La Paz', value: '2' },
        { name: 'Sucursal - Santa Cruz', value: '3' }
      ],
      selectedWarehouse: 'all',
      products: [],
      filteredProducts: []
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('items');
        this.products = response.data.categories;
        console.log(this.products = response.data.categories)
        this.filterProducts();
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    },
    filterProducts() {
      if (this.selectedWarehouse.value === 'all') {
        this.filteredProducts = this.products.filter(category =>
          category.products.some(product =>
            product.warehouses.some(warehouse => warehouse.quantity > 0)
          )
        ).map(category => ({
          ...category,
          products: category.products.filter(product =>
            product.warehouses.some(warehouse => warehouse.quantity > 0)
          )
        }));
      } else {
        this.filteredProducts = this.products.filter(category =>
          category.products.some(product =>
            product.warehouses.some(warehouse => warehouse.id.toString() === this.selectedWarehouse.value && warehouse.quantity > 0)
          )
        ).map(category => ({
          ...category,
          products: category.products.filter(product =>
            product.warehouses.some(warehouse => warehouse.id.toString() === this.selectedWarehouse.value && warehouse.quantity > 0)
          )
        }));
      }
    },
    displayProductsByWarehouse() {
      this.filterProducts();
    },
    getQuantityByWarehouse(product, selectedWarehouse) {
      if (selectedWarehouse.value === 'all') {
        return product.warehouses.reduce((total, warehouse) => total + warehouse.quantity, 0);
      } else {
        const warehouse = product.warehouses.find(warehouse => warehouse.id.toString() === selectedWarehouse.value);
        return warehouse ? warehouse.quantity : 0;
      }
    },
    async updatePrice(productId) {
      const product = this.products.find(product => product.id === productId);
      if (!product) return;

      try {
        const response = await axios.put(`https://dorback.vercel.app/api/items/${productId}/price`, {
          price: product.newPrice
        });
        if (response.status === 200) {
          alert('Precio actualizado correctamente');
          this.fetchProducts();
        } else {
          alert('Error al actualizar el precio');
        }
      } catch (error) {
        console.error('Error al actualizar el precio:', error);
      }
    },
    
download_PDF() {
  const self = this;
  const pdf = new jsPDF("p", "pt", "a4");
  const pageWidth = pdf.internal.pageSize.width;
  const pageHeight = pdf.internal.pageSize.height;

  pdf.setFontSize(18);
  pdf.setTextColor(60);
  pdf.text("MAG COMP", pageWidth / 2, 30, { align: "center" });

  let startY = 60; // Inicio después del título

  self.filteredProducts.forEach((category, index) => {
    if (startY + 20 > pageHeight) { // Asegurar espacio para el título de la categoría
      pdf.addPage();
      startY = 60;
    }

    pdf.setFontSize(14);
    pdf.setTextColor(100);
    pdf.text(category.name.toUpperCase(), 40, startY);
    startY += 20; // Espacio después del título de la categoría

    const columns = [
      { title: "Nro", dataKey: "nro", styles: { cellWidth: 'auto', minCellWidth: 100 } },
      { title: "Nombre", dataKey: "name", styles: { cellWidth: 'auto', minCellWidth: 100 } },
      { title: "Precio", dataKey: "price", styles: { halign: 'right', cellWidth: 40 } },
      { title: "Código", dataKey: "code", styles: { cellWidth: 80 } }
    ];

    const data = category.products.map((product, i) => ({
      nro: i+1,
      name: product.name,
      
      price: `Bs. ${product.price}`,
      code: product.code
    }));

    if (startY + (20 * data.length) > pageHeight) { // Asegurar espacio para los datos
      pdf.addPage();
      startY = 60;
    }

    pdf.autoTable(columns, data, {
      startY: startY,
      theme: 'grid',
      headStyles: { fillColor: [0, 0, 0] },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      styles: { fontSize: 10, overflow: 'linebreak' },
      columnStyles: {
        nro: { cellWidth: 30 },
        name: { cellWidth: 250 },
        price: { cellWidth: 70 },
        code: { cellWidth: 120 }
      },
      didDrawPage: function(data) {
        // Incrementar startY después de dibujar la tabla
        startY = data.cursor.y + 25; // Añade un espacio adicional de 20 puntos
      }
    });
  });

  pdf.save("ListaProductos.pdf");
}



  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.product-category {
  margin-bottom: 2rem;
}
.table th, .table td {
  padding: 8px;
  font-size: 0.8rem;
}
img {
  max-width: 100px;
  height: auto;
}
</style>
