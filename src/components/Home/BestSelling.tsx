import ProductCard from "../common/cards/ProductCard"
import SectionTitle from "../common/SectionTitle"


const BestSelling = () => {
  return (
    <section className="container my-12.5">
          <SectionTitle text="Best Sellers" description={null} />
          <div className="mt-10 w-full border rounded-2xl grid grid-cols-5 p-4 border-neutral-300 divide-x divide-neutral-200 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
  )
}

export default BestSelling