import React from 'react'
import Image from 'next/image'
import imageloader from '../pages/imageLoader'

interface arrayDataType {
  image: string;
  tittle: string;
}

interface arrayType {
  data: arrayDataType[];
}

export function HomeBanner({ data }: arrayType) {
  return (
    <div>
      <h1 className='textamit'>
        Unlocking Tomorrow
      </h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.image}
              loader={imageloader}
              height={600}
              width={1909}
              alt={item.tittle}
            />
          </div>
        )
      })}
    </div>

  )
}
