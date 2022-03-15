import imageloader from "../pages/imageLoader";
import Image from "next/image";
import { Grid } from "@mui/material";

interface dataTypess {
    image: string;
}

interface arrayDataTypess {
    data: dataTypess[];
}
export function Banner({ data }: arrayDataTypess) {

    return (
        <Grid>
        
            <Image
                src={data[0].image}
                loader={imageloader}
                height={530}
                width={2000}
                alt={data[0].image}
            />
        </Grid>

    )
}
