import { Link } from "react-router-dom"

import hero1 from "../assets/hero1.webp"
import hero2 from "../assets/hero2.webp"
import hero3 from "../assets/hero3.webp"
import hero4 from "../assets/hero4.webp"

const carouselImages = [
    hero1, hero2, hero3, hero4
]

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg-grid-cols-2 gap-24 items-center">
        <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight">We’re changing the way people shop.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8">sample Lorem ipsum text</p>
            <div className="mt-10">
                <Link to="/products" className="btn btn-primary">Shop Now</Link>
            </div>
            <div className="hidden lg:carousel carousel-center p-4 h-[28rem] space-x-4 rounded-box bg-neutral">
                {carouselImages.map((image, index) => {
                    return (
                        <div className="carousel-item" key={index}>
                            <img src={image} alt={`hero ${index + 1}`} className="rounded-box h-full w-80 object-cover"/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Hero