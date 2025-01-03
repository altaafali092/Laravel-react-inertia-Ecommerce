
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BanknoteIcon, FacebookIcon, InstagramIcon, MountainIcon, TruckIcon, TwitterIcon, Wallet2Icon } from "lucide-react"
import { Link } from "@inertiajs/react"


export default function Footer() {
    return (
        <footer className="bg-background border-t shadow-md">
            <div className="container px-4 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-2xl flex gap-2 font-semibold text-indigo-700"><MountainIcon className="text-green-700" /> AMC Wear</h3>
                        <p className="text-sm text-muted-foreground">
                            We're dedicated to providing the best shopping experience for our customers.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Kids
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Mens
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Womens
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    Register
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    +977-9824xxxxx
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground">
                                    info@amcwear.com
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
                <Separator className="my-8" />
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 justify-items-center items-center text-center">
                    <div className="flex gap-2 font-bold text-lg text-indigo-500 items-center">
                        <TruckIcon />
                        <h3>Free Delivery</h3>
                    </div>
                    <div className="flex gap-2 font-bold text-lg text-indigo-500 items-center">
                        <BanknoteIcon />
                        <h3>Money Back Guarantee</h3>
                    </div>
                    <div className="flex gap-2 font-bold text-lg text-indigo-500 items-center">
                        <Wallet2Icon />
                        <h3>Secure Payment</h3>
                    </div>
                </div>


                <Separator className="my-8" />
                <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Your E-commerce Store. All rights reserved.
                    </p>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            Terms of Service
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}

