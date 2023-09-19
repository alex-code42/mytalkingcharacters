import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';

export default function ImageUpload({ handleImageUpload }) {
  const handleSuccess = (resultEvent) => {
    // Check if resultEvent contains valid image information
    if (resultEvent && resultEvent.info && resultEvent.info.public_id && resultEvent.info.secure_url) {
      // Extract information about the uploaded image from the resultEvent.
      const { info, file } = resultEvent;

      // Access the details of the uploaded image.
      const publicId = info.public_id;
      const imageUrl = info.secure_url;

      // Log or display the image details as needed.
      console.log('Public ID:', publicId);
      console.log('Image URL:', imageUrl);

      // Call the handleImageUpload function with valid image information
      handleImageUpload(resultEvent);
      console.log(">>>>>>>> HandleImageUpload triggered");
    } else {
      // Handle the case where no valid image information is available (empty array).
      console.error('No valid image information available.');
    }
  };

  return (
    <div className="container mx-auto content-center flex justify-center">
      <CldUploadWidget
        uploadPreset="wwdyyd0p"
        sources={['local', 'url', 'camera', 'image_search']}
        resourceType="image"
        maxFiles={1}
        onSuccess={handleSuccess} // Pass your modified callback function here.
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            console.log(">>>>>>>> HandleImageUpload triggered twice<<<<<");

            open();
          }
          return (
            <button className="bg-transparent content-center mt-8 hover:bg-blue-500 text-slate-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
