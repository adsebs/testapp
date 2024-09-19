
export default {

    template: `
        <table :class="{
            'table table-striped': true,
            'blue-text': type == 'reading',
            'red-text': type == 'tbr',
            'green-text': type == 'read',
            'yellow-text': type == 'collection'
        }">
                  <tbody>
                    <tr>
                        <td v-for="tblCol in tblCols">
                            {{ tblCol.header }}
                        </td>
                    </tr>
                    <tr v-for="book in books">
                        <td> {{ book.title }} </td>
                        <td> {{ book.author }} </td>
                        <td> {{ book.gender }} </td>
                        <td> {{ book.genre }} </td>
                        <td> {{ book.country }} </td>
                        <td> {{ book.pages }} </td>
                        <td> {{ book.pubYear }} </td>
                        <td> {{ book.format }} </td>
                        <td> {{ book.dateStart }} </td>
                        <td> {{ book.dateEnd }} </td>
                        <td> {{ book.rating }} </td>
                        <td><input type="checkbox" v-model="book.reading"></td>
                        <td><input type="checkbox" v-model="book.tbr"></td>
                        <td><input type="checkbox" v-model="book.read"></td>
                        <td><input type="checkbox" v-model="book.collection"></td>
                    </tr>
                  </tbody>
        </table>
    `,

    props: {
        tblCols: Array,
        books: Array,
        type: {
            type: String,
            default: 'tbr'
        }
    }

}