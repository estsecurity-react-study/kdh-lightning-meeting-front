import 'twin.macro';

import Divider from '../../atoms/Divider';
import Image from '../../atoms/Image';

export interface CardProps {
  href: string;
  imgSrc?: string;
  title: string;
  category: string;
  creator: string;
  like: boolean;
}

const Card = ({ href, imgSrc, title, category, creator, like }: CardProps) => {
  return (
    <div tabIndex={0} tw="relative">
      <a href={href} draggable={false} tw="no-underline">
        {/* 이미지 영역 */}
        <Image src={imgSrc} alt="" />

        {/* 텍스트 영역 */}
        <div tw="mt-3">
          <span tw="text-base line-clamp-2">{title}</span>
          <div tw="flex items-stretch text-xs text-gray-400 mt-1">
            <span>{category}</span>
            <Divider type="vertical" />
            <span>{creator}</span>
          </div>
        </div>
      </a>

      <button type="button" tw="absolute top-4 right-4 w-6 h-6">
        {like ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            tw="stroke-[1.5] fill-red-500"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tw="stroke-[1.5]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Card;
