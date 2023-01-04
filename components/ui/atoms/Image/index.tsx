import NextImage from 'next/image';
import 'twin.macro';

export interface ImageProps {
  src?: string;
  alt?: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <div tw="aspect-[4/3] relative bg-slate-800">
      {src && (
        <NextImage
          src={src}
          alt={alt ?? ''}
          priority={false}
          fill
          tw="object-cover"
        />
      )}
    </div>
  );
};

export default Image;
