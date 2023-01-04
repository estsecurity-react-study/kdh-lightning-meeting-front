import tw from 'twin.macro';

import Card from '../../molecules/Card';

export interface CardListSectionProps {
  title?: string;
}

const CardListSection = ({ title }: CardListSectionProps) => {
  return (
    <section>
      {title && <h2 tw="text-2xl font-semibold m-0">{title}</h2>}
      <ul
        css={[
          tw`p-0 mt-8 list-none`,
          tw`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`,
          tw`gap-x-4 gap-y-8`,
        ]}
      >
        {[
          {
            href: '#',
            imgSrc:
              'https://cdn.pixabay.com/photo/2022/12/15/20/28/snow-7658489__340.jpg',
            title: 'Nest.js와 Next.js로 함께하는 웹 개발',
            category: '교육',
            creator: '김덕현',
            like: false,
          },
        ].map((item) => {
          return (
            <li tw="p-0 m-0" key={item.href}>
              <Card {...item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CardListSection;
