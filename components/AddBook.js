export default {

    template: `
    <div id="addBookForm">
        <form id="addBook">
            <label class="form-label" for="title">Title</label>
            <input name="" class="form-control" type="text">
            <label class="form-label" for="author">Author</label>
            <input name="author" class="form-control" type="text">
            <label class="form-label" for="gender">Gender</label>
            <select class="form-select" name="gender">
                <option v-for="gender in genders" value="gender.name">{{ gender.name }}</option>
            </select>
            <label class="form-label" for="country">Country</label>
            <input name="country" class="form-control" type="text">
            <label class="form-label" for="genre">Genre</label>
            <select class="form-select" name="genre">
                <option v-for="genre in genres" value="genre.name">{{ genre.name }}</option>
            </select>
            <label class="form-label" for="pages">Pages</label>
            <input name="pages" class="form-control" type="text">
            <label class="form-label" for="year">Year Published</label>
            <input name="year" class="form-control" type="text">
            <label class="form-label" for="format">Format</label>
            <select class="form-select" name="format">
                <option v-for="format in formats" value="format.type">{{ format.type }}</option>
            </select>
            <label class="form-label" for="startDate">Date Started</label>
            <input name="startDate" class="form-control" type="date">
            <label class="form-label" for="endDate">Date Finished</label>
            <input name="endDate" class="form-control" type="date">
            <label class="form-label" for="reading">Reading</label>
            <input name="reading" class="form-check-input" type="checkbox">
            <label class="form-label" for="tbr">TBR</label>
            <input name="tbr" class="form-check-input" type="checkbox">
            <label class="form-label" for="read">Read</label>
            <input name="read" class="form-check-input" type="checkbox">
            <label class="form-label" for="collection">Collection</label>
            <input name="collection" class="form-check-input" type="checkbox">
            <br>
            <button class="btn btn-primary" type="submit">Add Book</button>
        </form>
    </div>
    `,


    data() {
        return {
            genres: [
                {name: "Fantasy"},
                {name: "Gothic"},
                {name: "Sci-Fi"},
                {name: "Contemporary"},
                {name: "Crime"},
                {name: "Historical Fiction"},
                {name: "Memoir"}

            ],
            genders: [
                {name: "female"},
                {name: "male"},
                {name: "other"}
            ],
            formats: [
                {type: "paperback"},
                {type: "hardback"},
                {type: "graphic"},
                {type: "e-book"},
                {type: "audiobook"}
            ]
        }
    }
}