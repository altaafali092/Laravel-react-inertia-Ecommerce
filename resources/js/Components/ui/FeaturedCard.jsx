import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "lucide-react";
import { Button } from "./button";


const FeaturedCard = ({ product }) => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.onSale && <Badge className="ml-2" variant="destructive">Sale</Badge>}
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="primary" className="w-full bg-indigo-900 text-white hover:bg-emerald-800 ease-in-out">Add to Cart</Button>
            </CardFooter>
        </Card>
    );
};

export default FeaturedCard;
