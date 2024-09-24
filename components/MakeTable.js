
export default {

    template: `


        <table :class="{
            'table': true
        }">
                  <tbody>
                    <tr>
                        <td v-for="tblcol in tblcols">
                            {{ tblcol.header }}
                        </td>
                    </tr>
                    <template v-for="book in books">
                    <tr v-if="accType.type == book.status">
                        <td> {{ book.title }} </td>
                        <td> {{ book.author }} </td>
                        <td> {{ book.gender }} </td>
                        <td> {{ book.country }} </td>
                        <td> {{ book.genre }} </td>
                        <td> {{ book.pages }} </td>
                        <td> {{ book.pubYear }} </td>
                        <td> {{ book.format }} </td>
                        <td> {{ book.dateStart }} </td>
                        <td> {{ book.dateEnd }} </td>
                        <td> {{ book.rating }} </td>
                        <td> {{ book.status }} </td>
                        <td><input type="checkbox" v-model="book.collection"></td>
                    </tr>
                    </template>
                  </tbody>
        </table>

    `,

    props: {
        accTypes: Array,
        tblcols: Array,
        books: Array,
        type: {
            type: String,
            default: 'tbr'
        }
    }

}