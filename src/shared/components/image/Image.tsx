import { memo, useState, type FC } from 'react';

interface Props {
  src: string
  alt?: string
  className?: string
  height: number
}

const Image:FC<Props> = ({src, alt="", className="", height}) => {
  const [loading, setLoading] = useState(true)
  return (
    <div>
        <img src={src} className={className} onLoad={() => setLoading(false)} alt={alt} />
        {
          loading && <div style={{height: height+"px"}} className='w-full bg-gray-300 animate-pulse'></div>
        }
    </div>
  );
};

export default memo(Image);