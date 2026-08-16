import ProductComments from "../components/product/Comments/ProductComments"
import Description from "../components/product/Description/Description"
import HeroDetails from "../components/product/HeroDetails/HeroDetails"
import RelatedProducts from "../components/product/RelatedProducts/RelatedProducts"
import Sidebar from "../components/product/Sidebar/Sidebar"


const Product = () => {
  return (
    <main
      id="product-content"
      className="w-[95%] mx-auto grid grid-cols-8 gap-5  my-10"
    >
      <section className="col-span-6 space-y-10  *:p-5 *:border *:border-neutral-200  *:rounded-xl">
        <HeroDetails product={{}} />
        <Description />
        <RelatedProducts />
        <ProductComments />
      </section>
      <Sidebar />
    </main>
  )
}

export default Product