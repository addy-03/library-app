import { useState } from "react";
import Header from "../components/Header";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    excerpt: "",
    content: "",
    genres: [],
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("AddBook Data", formData);

    //need to change the image url to unique id
    const storageRef = ref(storage, "images/" + formData.title);

    const uploadTask = uploadBytesResumable(storageRef, formData.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log("Image upload Error", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const docRef = addDoc(collection(db, "books"), {
            ...formData,
            image: downloadURL,
          });
          console.log("Added Doc", docRef);
        });
      }
    );
  };

  return (
    <>
      <Header />
      <div className="add-book">
        <h2>Fill Book Details</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            id="title"
            name="Title"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData((state) => {
                return { ...state, title: e.target.value };
              })
            }
            required
          />
          <input
            type="text"
            id="author"
            name="Author"
            placeholder="Author"
            value={formData.author}
            onChange={(e) =>
              setFormData((state) => {
                return { ...state, author: e.target.value };
              })
            }
            required
          />
          <textarea
            name="Excerpt"
            id="excerpt"
            placeholder="Excerpt"
            cols="30"
            rows="10"
            value={formData.excerpt}
            onChange={(e) =>
              setFormData((state) => {
                return { ...state, excerpt: e.target.value };
              })
            }
            required
          ></textarea>
          <textarea
            name="Content"
            id="content"
            placeholder="Content"
            cols="30"
            rows="10"
            value={formData.content}
            onChange={(e) =>
              setFormData((state) => {
                return { ...state, content: e.target.value };
              })
            }
            required
          ></textarea>
          <div className="genre-list">
            {formData.genres.map((genre, i) => {
              return <span key={i}>{genre}</span>;
            })}
          </div>
          <input
            type="text"
            id="genres"
            name="Genres"
            placeholder="Genres ( separate using , )"
            onChange={(e) =>
              setFormData((state) => {
                return {
                  ...state,
                  genres: e.target.value
                    .split(",")
                    .map((element) => element.trim()),
                };
              })
            }
            required
          />
          <label htmlFor="image" style={{ display: "none" }}></label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) =>
              setFormData((state) => {
                return { ...state, image: e.target.files[0] };
              })
            }
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
