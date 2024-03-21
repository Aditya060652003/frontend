           import Quality from "./images/quality_food.svg";
           import FastDelivery from "./images/fast_delivery.svg";
           import SuperTaste from "./images/super_taste.svg";
           import dinner1 from "./images/dinner1.jpeg";
           import dinner2 from "./images/dinner2.png";
           import breakfast1 from "./images/breakfast1.png";
           import dinner3 from "./images/dinner3.png";
           import lunch1 from "./images/lunch1.png";
           import dinner4 from "./images/dinner4.png";
           import dinner5 from "./images/dinner5.png";
           import dinner6 from "./images/dinner6.png";
           import team_member_1 from "./images/team_member_1.png";
           import team_member_2 from "./images/team_member_2.png";
           import team_member_3 from "./images/team_member_3.png";
           import team_member_4 from "./images/team_member_4.png";
           
     const data = [
        {"ourQualities" : [
            {
                "id": 1,
                "image": Quality,
                "title": "QUALITY FOOD",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat." 
            },
            {
                "id": 2,
                "image": SuperTaste,
                "title": "SUPER TASTE",
                "description": "Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur." 
            },
            {
                "id": 3,
                "image": FastDelivery,
                "title": "FAST DELIVERY",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat." 
            }
        ],
        "dishes": [
            {
                "id": 1,
                "image": dinner1,
                "title": "ROASTED LAMB RUMP",
                "category": "Dinner"
            },
            {
                "id": 2,
                "image": dinner2,
                "title": "CITRUS CURED SALMON",
                "category": "Dinner"
            },
            {
                "id": 3,
                "image": breakfast1,
                "title": "PAN SEARED SEA BASS",
                "category": "Breakfast"
            },
            {
                "id": 4,
                "image": dinner3,
                "title": "STUFFED STRAWBERRY",
                "category": "Dinner"
            },
            {
                "id": 5,
                "image": lunch1,
                "title": "BEEF BURGER MEAL",
                "category": "Lunch"
            },
            {
                "id": 6,
                "image": dinner4,
                "title": "MUSSELS SOUP",
                "category": "Dinner"
            },
            {
                "id": 7,
                "image": dinner5,
                "title": "ITALIAN SPAGHETTI",
                "category": "Dinner"
            },
            {
                "id": 8,
                "image": dinner6,
                "title": "GRILLED FISH",
                "category": "Dinner"
            }
        ],
        "team": [
            {
                "id": 1,
                "image": team_member_1,
                "name": "JOHNATHAN TYLER",
                "designation": "Founder & Head Chef"
            },
            {
                "id": 2,
                "image": team_member_2,
                "name": "WADE WARREN",
                "designation": "Sous Chef"
            },
            {
                "id": 3,
                "image": team_member_3,
                "name": "JHON DOE",
                "designation": "Fast Food Chef"
            },
            {
                "id": 4,
                "image": team_member_4,
                "name": "ALEX COAL",
                "designation": "Senior Chef"
            }
        ],
        "testimonials": [
            {
                "id": 1,
                "image": "./review1.png",
                "description": "Morbi nulla nec dui lacus, in. Libero in pretium metus massa. Sodales dignissim vitae mauris varius faucibus. Eleifend dui, non laoreet ac luctus facilisis diam. Enim scelerisque vel at id viverra tellus.",
                "rating": 4,
                "userName": "Jane Cooper"
            },
            {
                "id": 2,
                "image": "./review2.png",
                "description": "Tortor vel nunc netus pharetra enim, enim dolor mauris in. Sit nam fringilla in egestas. Libero condimentum quis in vulputate adipiscing venenatis augue. Venenatis faucibus.",
                "rating": 4.5,
                "userName": "Esther Howard"
            },
            {
                "id": 3,
                "image": "./review3.png",
                "description": "Tortor vel nunc netus pharetra enim, enim dolor mauris in. Sit nam fringilla in egestas. Libero condimentum quis in vulputate adipiscing venenatis augue. Venenatis faucibus.",
                "rating": 5,
                "userName": "Guy Hawkins"
            }
        ],
        "who_we_are": [
            {
                "id": 1,
                "number": "14",
                "title": "Restaurants"
            },
            {
                "id": 2,
                "number": "20",
                "title": "Chef In Kitchen"
            },
            {
                "id": 3,
                "number": "08",
                "title": "Years Of Experience"
            },
            {
                "id": 4,
                "number": "200",
                "title": "Food Dishes"
            }
        ],
        "navbarLinks": [
            {
                "id": 1,
                "title": "HOME",
                "link": "heroSection"
            },
            {
                "id": 2,
                "title": "ABOUT US",
                "link": "about"
            },
            {
                "id": 3,
                "title": "SERVICES",
                "link": "qualities"
            },
            {
                "id": 4,
                "title": "TEAM",
                "link": "team"
            },
            {
                "id": 5,
                "title": "RESERVATION",
                "link": "reservation"
            }
        ]
    
    } 
    ]
    

export default data;