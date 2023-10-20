import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ICollection, collection } from '../contstants';
import { Carousel } from 'antd';

const Collection: FC = (): JSX.Element => {
  const { title } = useParams<string>();

  const selectedItem: ICollection = collection.find(
    (item) => item.title === title
  )!;

  console.log(title, selectedItem);

  return (
    <div className='collection'>
      <div className='container'>
        <h2>{selectedItem.title}</h2>
        <hr />

        {selectedItem.description.map((desc, idx) => (
          <p key={idx}>{desc}</p>
        ))}
      </div>
      <div className='carousel_wrapper'>
        <Carousel
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={2000}
        >
          {selectedItem.paintings.map(({ id, image, title, size }) => (
            <div key={id}>
              <img src={image} alt={title} loading='lazy' />
              <div className='details'>
                {title && <h2>{title}</h2>}
                {size && <p>{size}</p>}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Collection;
