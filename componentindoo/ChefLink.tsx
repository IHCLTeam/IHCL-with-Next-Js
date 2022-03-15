import { Button } from "@mui/material";
import Image from "next/image";
import { Key } from "react";
import imageloader from "../pages/imageLoader";

interface chefData {
    slug: Key | null | undefined;
    name: string | undefined;
    cap : string;
    imgchef : string;
    title : string;
    text : string;
    button : string;
}

interface chef{
    data : chefData[];
}

export function ChefLink ({data} : chef) {
    return (
   <div className="father">
          <div>
            {data.map((blog) => {
              return (
                <div key={blog.slug} style={{ width: "30%" }}>
                  <div className="ch">
                    <Image
                      src={blog.imgchef}
                      loader={imageloader}
                      height={500}
                      width={600}
                      alt={blog.name}
                    />
                    <br></br>
                    <div className="cheftitle">{blog.title}</div>
                    <div className="text">{blog.text}</div>
                    <br></br>
                    <Button className="btn1">{blog.button}</Button>
                  </div>
                </div>
              )
            })
            }
          </div>

        </div>
    )
}