import ProductCard from "@/Components/ui/ProductCard";

const products = [
    {
        id: 1,
        name: "Classic Sneakers",
        description: "Comfortable and stylish sneakers for everyday wear.",
        price: "49.99",
        image: "https://5.imimg.com/data5/GU/LY/MY-44393694/men-sneaker-shoes.jpg",
        onSale: true,
    },
    {
        id: 2,
        name: "Classic Sneakers",
        description: "Comfortable and stylish sneakers for everyday wear.",
        price: "49.99",
        image: "https://5.imimg.com/data5/GU/LY/MY-44393694/men-sneaker-shoes.jpg",
        onSale: true,
    },
    {
        id: 3,
        name: "Classic Sneakers",
        description: "Comfortable and stylish sneakers for everyday wear.",
        price: "49.99",
        image: "https://5.imimg.com/data5/GU/LY/MY-44393694/men-sneaker-shoes.jpg",
        onSale: true,
    },
    {
        id: 4   ,
        name: "Classic Sneakers",
        description: "Comfortable and stylish sneakers for everyday wear.",
        price: "49.99",
        image: "https://5.imimg.com/data5/GU/LY/MY-44393694/men-sneaker-shoes.jpg",
        onSale: true,
    },
];

export default function NewArrivial() {
    return (
        <div className="p-6">
            <h2 className="font-bold text-xl mb-2 motion-preset-typewriter-[13] motion-duration-5000">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
