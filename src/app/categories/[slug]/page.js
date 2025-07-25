import { allBlogs } from "@/.contentlayer/generated"
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree"
import Categories from "@/src/components/Blog/Categories"
import GitHubSlugger, { slug } from "github-slugger"

const slugger = new GitHubSlugger()

export async function generateStaticParams() {
    const categories = [];
    const path = [{ slug: "all" }]



    allBlogs.map(blog => {
        if (blog.publishedAt) {
            blog.tags.map(tag => {
                let slugified = slugger.slug(tag)
                if (!categories.includes(slugified)) {
                    categories.push(slugified)
                    path.push({ slug: slugified })
                }
            })
        }
    })

    return path
}

export async function generateMetadata({ params }) {
    return {
        title: `${params.slug.replaceAll("-", "")} Blogs`,
        description: `Learn more about ${params.slug === "all" ? "development" : params.slug.replaceAll("-", "")} through our collection of expert blogs and tutorials`,
    }
}

const CategoryPage = ({ params }) => {

    const allCategories = ["all"]
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some(tag => {
            const slugified = slug(tag);
            if (!allCategories.includes(slugified)) {
                allCategories.push(slugified)
            }
            if (params.slug === "all") {
                return true
            }
            return slugified === params.slug
        })
    })

    return (
        <article className="mt-12 flex flex-col text-dark dark:text-light">
            <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
                <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
                <span className="mt-2 inline-block">Discover more categories and expand your knowledge!</span>
            </div>
            <Categories categories={allCategories} currentSlug={params.slug} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
                {
                    blogs.map((blog, index) => <article className="col-span-1 relative">
                        <BlogLayoutThree key={index} blog={blog} />
                    </article>)
                }
            </div>
        </article>
    )
}

export default CategoryPage