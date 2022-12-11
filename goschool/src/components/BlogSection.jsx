import BlogCard from './BlogCard'
import Heading from './Heading'
import { blog } from '../Data/dummydata'

const BlogSection = () => {
  return (
    <div className="flex  justify-center  text-center w-full px-6 sm:px-16 lg:px-48 py-14" >
      <div>
        <Heading
        subtitle={"Blog"}
        title={'Learn More'}
        />
        <div className=' flex flex-col sm:flex-row justify-center pt-10 flex-wrap '>
          {
            blog.map((data => (
            <BlogCard
            key={data.id}
            blogImg={data.cover}
            heading={data.title}
            content={data.desc}/>
            )))
          }
          
        </div>
      </div>
    </div>
  )
}

export default BlogSection