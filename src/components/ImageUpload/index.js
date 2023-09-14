import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';


export default function ImageUplad({handleImageUpload}){
    // function handleImageUpload(resultEvent) {
    //     // Extract information about the uploaded image from the resultEvent.
    //     const { info, file } = resultEvent;
      
    //     // Access the details of the uploaded image.
    //     const publicId = info.public_id;
    //     const imageUrl = info.secure_url;
      
    //     // Log or display the image details as needed.
    //     console.log('Public ID:', publicId);
    //     console.log('Image URL:', imageUrl);
     
        
    //     // You can also update your UI with the image information if needed.
    //     // For example, display the image thumbnail or link.
    //   }

    return(
        <div>
            <CldImage
                width="300"
                height="300"
                src="a3sivpzuz0tfju44fnre"
                sizes="100vw"
                alt="Description of my image"
              />

              
            <CldUploadWidget
            uploadPreset="wwdyyd0p"
            sources={['local', 'url', 'camera', 'image_search']}
            resourceType="image"
            maxFiles={1}
            onSuccess={handleImageUpload} // Pass your callback function here.
                >
            {({ open }) => {
                function handleOnClick(e) {
                e.preventDefault();
                open();
                }
                return (
                <button className="button" onClick={handleOnClick}>
                    Upload an Image
                </button>
                );
            }}
            </CldUploadWidget>
        </div>
        
    )
}