import React, { useState } from "react";

const AddProjectForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleVideoUrlChange = (e) => setVideoUrl(e.target.value);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            title,
            description,
            videoUrl,
            image: imagePreview,
        };
        onAdd(newProject);
        setTitle("");
        setDescription("");
        setVideoUrl("");
        setImage(null);
        setImagePreview("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titel"
                value={title}
                onChange={handleTitleChange}
                className="edit-input"
                required
            />
            <textarea
                placeholder="Beschrijving"
                value={description}
                onChange={handleDescriptionChange}
                className="edit-input"
                required
            />
            <input
                type="text"
                placeholder="YouTube Video URL"
                value={videoUrl}
                onChange={handleVideoUrlChange}
                className="edit-input"
            />
            <input
                type="file"
                onChange={handleImageChange}
                className="image-input"
            />
            {imagePreview && (
                <div>
                    <h3>Afbeelding Preview:</h3>
                    <img src={imagePreview} alt="Afbeelding Preview" className="project-image" />
                </div>
            )}
            <button type="submit" className="save-button">
                Voeg Project Toe
            </button>
        </form>
    );
};

export default AddProjectForm;