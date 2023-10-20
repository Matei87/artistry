import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICollections, collections } from '../contstants';

const Collections: FC = (): JSX.Element => {
  return (
    <div className='collections'>
      {collections.map(({ id, title, description, image }: ICollections) => (
        <div className='row' key={id}>
          {id % 2 ? (
            <>
              <img src={image} alt={title} loading='lazy' />
              <div className='card'>
                <div className='inner'>
                  <h2>{title}</h2>
                  <hr />
                  <p>{description}</p>
                  <Link to={`/collection/${title}`}>See more</Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='card even'>
                <div className='inner'>
                  <h2>{title}</h2>
                  <hr />
                  <p>{description}</p>
                  <Link to={`/collection/${title}`}>See more</Link>
                </div>
              </div>
              <img src={image} alt={title} loading='lazy' />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collections;
