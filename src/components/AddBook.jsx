const AddBook = () => {
    // array state to keep genre list 
    // different states to keep other input variables
  return (
    <>
      <h2>Fill Book Details to Add</h2>
      <form action="">
        <input type="text" id="title" name="Title" placeholder="Book Title" />
        <input type="text" id="author" name="Author" placeholder="Author" />
        <div className="genre-list">
            {/* iterate each genre from list and populate here */}
          <input type="text" id="genre" name="Genre" placeholder="Genre" />
        </div>
        <textarea name="Excerpt" id="excerpt" cols="30" rows="10"></textarea>
        <textarea name="Content" id="content" cols="30" rows="10"></textarea>
      </form>
    </>
  );
};
