import React, { useState } from 'react';

const ImageUploader = () => {
  const [state, setState] = useState('');

  const handleImageChange = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  let { imagePreviewUrl } = state;
  let imagePreview = null;
  const alt = './img/no_image.png';

  if (imagePreviewUrl) {
    imagePreview = <img src={imagePreviewUrl} alt={alt} />;
  } else {
    imagePreview = <div className="previewText">Please select an Image for Preview</div>;
  }

  return (
    <div className="previewComponent">
      <form>
        <input className="fileInput" type="file" onChange={(event) => handleImageChange(event)} />
        <button className="submitButton" type="submit">
          Upload Image
        </button>
      </form>
      <div className="imgPreview">{imagePreview}</div>
    </div>
  );
};

export default ImageUploader;
