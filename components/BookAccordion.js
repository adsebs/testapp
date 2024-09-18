import Accordion from "./Accordion.js";

export default {
    components: { 
        Accordion
    },

    template: `
        <accordion :accTypes="accTypes" :accId="bookAccordion"></accordion>
    `,

    data() {
        return {
            accTypes: [
              {htmlId: "readingHead", heading: "Reading", class: "accordion-button bg-warning", dataTarget: "#collapseReading", ariaCont: "collapseReading"},
              {htmlId: "tbrHead", heading: "TBR", class: "accordion-button bg-danger", dataTarget: "#collapseTbr", ariaCont: "collapseTbr"},
              {htmlId: "readHead", heading: "Read", class: "accordion-button bg-success", dataTarget: "#collapseRead", ariaCont: "collapseRead"},
              {htmlId: "collectHead", heading: "Collection", class: "accordion-button bg-primary", dataTarget: "#collapseCollect", ariaCont: "collapseCollect"}
            ]
        }
      }
}