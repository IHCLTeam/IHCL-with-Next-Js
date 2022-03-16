import { Grid } from "@mui/material";
import imageloader from "../pages/imageLoader";
import Image from "next/image";
import { Key } from "react";


interface dataDat {
    name: string | undefined;
    slug: Key | null | undefined;
    title : string;
    title2 : string;
    img : string;
    text : string;

}

interface taduh {
    data: dataDat[];
}

export function ManagingDirector({data} : taduh) {

    return (
         <Grid>
              {data.map((blog) => {
        return <div className="puneet" key={blog.slug}>
          <div className="equal">
            <h3 className="pun">{blog.title}<br></br>{blog.title2}</h3>
            <div className="punimg">{blog.text}</div>
          </div>
          <div className="equal1">
            <Image
              src={blog.img}
              loader={imageloader}
              height={250}
              width={250}
              alt={blog.name}
            />
          </div>
        </div>
      })
      }
        </Grid>
    )
}