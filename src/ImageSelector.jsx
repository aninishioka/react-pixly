import { useState } from "react";
import { getEXIF } from "./utils";

export default function ImageSelector({ selectImage }) {
    const [imagePath, setImagePath] = useState('');


    function handleChange(evt) {
        setImagePath(evt.target.files[0]);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const exif = await getEXIF(imagePath);
        const urlObject = URL.createObjectURL(imagePath);

        selectImage(urlObject, exif);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Select Image:</label>
                <input type="file" id="image" onChange={handleChange} name="image" files={[imagePath]} />


                <button>Select</button>
            </form>
        </div>
    );
}