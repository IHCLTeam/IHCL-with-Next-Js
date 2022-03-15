import imageloader from "../pages/imageLoader";
import Image from "next/image";
import { Key } from "react";

interface blogData {
    slug: Key | null | undefined;
    ihcl : string;
    imagee : string;
    text : string;
}

interface blogThree {
    data : blogData[];
}

export function BlogThree ({data} : blogThree) {
    return (
        <div className="IHCL" style={{ display: "flex" }}>
        {data.map((blog) => {
          return (
            <div key={blog.slug} style={{ width: "37%" }}>
              <Image className="images"
                src={blog.imagee}
                loader={imageloader}
                height={900}
                width={1000}
                alt={blog.imagee}
              />
              <div className="text">{blog.text}</div>
            </div>
          )
        })
        }
      </div>
    )
}