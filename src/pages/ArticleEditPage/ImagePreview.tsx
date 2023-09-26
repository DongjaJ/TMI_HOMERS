import { AiOutlineCloseCircle } from 'react-icons/ai';

const ImagePreview = ({
  image,
  onRemove,
}: {
  image: string | File | null | undefined;
  onRemove?: () => void;
}) => {
  const showImage = image !== null && image !== undefined && image !== '';

  return (
    showImage && (
      <div className="relative inline-block pb-2">
        <img
          className="w-[5rem] rounded-lg cursor-pointer drop-shadow-md"
          src={image instanceof File ? URL.createObjectURL(image) : image}
          alt="thumbnail"
          onClick={onRemove}
        />
        <AiOutlineCloseCircle
          size="1rem"
          className="absolute cursor-pointer text-lazy-gray top-1 right-1"
        />
      </div>
    )
  );
};

export default ImagePreview;
