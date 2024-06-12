<template>
  <div>
    <h1>Nueva Página</h1>
    <p>Contenido de la nueva página aquí.</p>
  </div>
</template>

<script>
import axios from 'axios';
import NProgress from 'nprogress';
import { mapActions, mapGetters } from "vuex";
export default {
    metaInfo: {
      title: "TEST"
    },
    data() {
      return {
        client_store: null,  // Almacena los datos de la respuesta hola
      };
    },
    methods: {
      Get_Products(page) {
        console.log("Método Get_Products llamado con página:", page);
        // Start the progress bar.
        NProgress.start();
        NProgress.set(0.1);
        this.setToStrings();
        axios
          .get(
            "products?page=" +
            page +
            "&code=" +
            this.Filter_code +
            "&name=" +
            this.Filter_name +
            "&category_id=" +
            this.Filter_category +
            "&brand_id=" +
            this.Filter_brand +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit
          )
          .then(response => {
            console.log('LLEGO::', response);
            
            this.products = response.data.products;
            this.warehouses = response.data.warehouses;
            this.categories = response.data.categories;
            this.brands = response.data.brands;
            this.totalRows = response.data.totalRows;

            // this.capturarProductos(response.data.products);

            // Complete the animation of theprogress bar.
            NProgress.done();
            this.isLoading = false;
          })
          .catch(error => {
            console.log('Error:', error);
            NProgress.done();
            setTimeout(() => {
              this.isLoading = false;
            }, 500);
          });
      },
    },
    mounted() {
      this.Get_Products(1);
    }
  }
</script>

<style scoped>
/* Estilos específicos de la nueva página */
</style>