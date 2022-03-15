import Careers from './careers'
import { getNavDataOne } from '../lib/api'

export default function Navdata({navfileone}) {
    return (
        <>
           {/* // Nav File Data */}
        {navfileone.map((nav: { slug: any; coverImage: any; title: any; subtitle: any; body: any; heading: any; }) => {
            return (
                <div key={nav.slug}>
                <Careers
                    image={nav.coverImage}
                    title={nav.title}
                    heading={nav.heading}
                    subtitle={nav.subtitle}
                    body={nav.body}
                />
                </div>)
        })}
        </>
    )
}

export async function getStaticProps() {
    const navfileone = await getNavDataOne()
  
    return {
      props: {
       navfileone,
      }
    }
  }