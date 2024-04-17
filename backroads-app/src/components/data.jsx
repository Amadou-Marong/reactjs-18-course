import tour1 from '../assets/images/tour-1.jpeg'
import tour2 from '../assets/images/tour-2.jpeg'
import tour3 from '../assets/images/tour-3.jpeg'
import tour4 from '../assets/images/tour-4.jpeg'

export const pageLinks = [
    { id: 1, text: "home", url: "#home" },
    { id: 2, text: "about", url: "#about" },
    { id: 3, text: "services", url: "#services" },
    { id: 4, text: "tours", url: "#tours" }
]

export const socialLinks = [
    { id: 1, url: "https://www.twitter.com", icon: "fab fa-facebook" },
    { id: 2, url: "https://www.twitter.com", icon: "fab fa-twitter" },
    { id: 3, url: "https://www.twitter.com", icon: "fab fa-squarespace" }
]

export const services = [
    {id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia"},
    {id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."}
]

export const tours = [
    {   
        id: 1, 
        image: tour1, 
        date: "august 26th, 2020", 
        title: "Tibet Adventure", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 
        country:"china", 
        days: 6, 
        price: 2100
    },
    {   
        id: 2, 
        image: tour2, 
        date: "october 10th, 2020", 
        title: "best of java", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", 
        country:"indonesia", 
        days: 11, 
        price: 1400
    },
    {   
        id: 3, 
        image: tour3, 
        date: "september 15th, 2020", 
        title: "explore hong kong",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",  
        country:"hong kong", 
        days: 8, 
        price: 5000
    },
    {   
        id: 4, 
        image: tour4, 
        date: "december 5th, 2019", 
        title: "kenya highlights",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",  
        country:"kenya", 
        days: 20, 
        price: 3300
    }
    
]