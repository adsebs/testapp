import MakeTable from "./MakeTable.js";


export default {

  components: {
    MakeTable
  },

    template: `
    
      <div class="accordion-item" v-for="accType in accTypes">
        <h2 class="accordion-header" :id="accType.htmlId">
          <button :class="accType.class" type="button" data-bs-toggle="collapse" :data-bs-target="accType.dataTarget" aria-expanded="true" :aria-controls="accType.ariaCont">
            <span class="acc-heading">{{ accType.heading }}</span>
          </button>
        </h2>
        <div :id="accType.ariaCont" class="accordion-collapse collapse show" :aria-labelledby="accType.ariaCont">
          <div class="accordion-body">
            <div>
              <make-table  type="accTypes.type" :tblcols :books></make-table>
            </div>
          </div>
        </div>
      </div>
    
    `,

    props: {
      tblcols: Array,
      books: Array,
      accTypes: Array
    },

    data() {
      return {
          
      }
  }

}
  