import Image from "next/image";
import { Key } from "react";
import imageloader from "../pages/imageLoader";


interface authorsData {
    slug: Key | null | undefined;
    ja: string;
    text: string;
    imgj: string;
    title: string;
    text2: string;
}

interface authors {
    data: authorsData[];
}

export function Authors({ data }: authors) {
    return (
        <div className="authors">
            {data.map((blog) => {
                return (
                    <div key={blog.slug} style={{ width: "30%" }} >
                        <div className="kid">
                            <div className="aimg" >{blog.text}</div>
                            <Image src={blog.imgj}
                                loader={imageloader}
                                height={100}
                                width={60}
                                alt={blog.title}
                            />
                            <div className="aimg">{blog.title}</div>
                            <div className="aimg">{blog.text2}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}