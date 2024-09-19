import Accordion from "./Accordion.js";

export default {
    components: { 
        Accordion
    },

    template: `
        <accordion :accTypes="accTypes" :accId="accId" >
        </accordion>
    `,

    props: {
        Status: Array
    },

    data() {
        return {
            accTypes: [
              {htmlId: "readingHead", status: "reading", heading: "Reading", class: "accordion-button bg-warning", dataTarget: "#collapseReading", ariaCont: "collapseReading"},
              {htmlId: "tbrHead", status: "tbr", heading: "TBR", class: "accordion-button bg-danger", dataTarget: "#collapseTbr", ariaCont: "collapseTbr"},
              {htmlId: "readHead", status: "read", heading: "Read", class: "accordion-button bg-success", dataTarget: "#collapseRead", ariaCont: "collapseRead"},
              {htmlId: "collectHead", status: "collection", heading: "Collection", class: "accordion-button bg-primary", dataTarget: "#collapseCollect", ariaCont: "collapseCollect"}
            ],
            accId: "bookAccordion"
        }
      }
}