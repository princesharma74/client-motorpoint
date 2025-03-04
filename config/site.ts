export const fleetCategories = [
    {
      id: "mercedes",
      name: "Mercedes-Benz Sprinters",
      subtitle: "Built for Power, Efficiency, and Versatility.",
      vans: [
        {
          id: 1,
          name: "Sprinter Hybrid",
          year: "2010–2017",
          image: "/Mercedes\ Sprinter/Hybrid.png?height=400&width=600",
          description: "Highlight 25% fuel savings.",
          specs: {
            cargoSpace: "14 cubic meters",
            fuelType: "Hybrid",
            year: "2010–2017",
          },
        },
        {
          id: 2,
          name: "Sprinter LWB",
          year: "2010–2015",
          image: "/Mercedes\ Sprinter/LWB.png?height=400&width=600",
          description: "Ideal for large deliveries – 800kg payload.",
          specs: {
            cargoSpace: "17 cubic meters",
            fuelType: "Diesel",
            year: "2010–2015",
          },
        },
        {
          id: 3,
          name: "Sprinter Petrol",
          year: "2018–2019",
          image: "/Mercedes\ Sprinter/Petrol.png?height=400&width=600",
          description: "Best for short urban trips.",
          specs: {
            cargoSpace: "12 cubic meters",
            fuelType: "Petrol",
            year: "2018–2019",
          },
        },
      ],
    },
    {
      id: "budget",
      name: "Budget-Friendly Vans",
      subtitle: "Affordable, Reliable, and Ready for Work.",
      vans: [
        {
          id: 4,
          name: "Hyundai iLoad",
          year: "2018–2020",
          image: "/Budget-Friendly\ Vans/Hyundai\ iLoad.png?height=400&width=600",
          description: "Perfect for small businesses and local deliveries.",
          specs: {
            cargoSpace: "6 cubic meters",
            fuelType: "Diesel",
            year: "2018–2020",
          },
        },
        {
          id: 5,
          name: "LDV V80 Hybrid",
          year: "2021",
          image: "/Budget-Friendly\ Vans/LDV\ V80\ Hybrid.png?height=400&width=600",
          description: "Our Newest Addition with 5-Star Safety Rating.",
          specs: {
            cargoSpace: "10 cubic meters",
            fuelType: "Hybrid",
            year: "2021",
          },
        },
      ],
    },
    {
      id: "petrol",
      name: "Petrol-Powered Options",
      subtitle: "Power Meets Convenience.",
      vans: [
        {
          id: 6,
          name: "Ford Transit",
          year: "2017–2019",
          image: "/Petrol-Powered\ Options/Ford\ Transit.png?height=400&width=600",
          description: "Spacious cabin + 1,000kg payload.",
          specs: {
            cargoSpace: "15 cubic meters",
            fuelType: "Petrol",
            year: "2017–2019",
          },
        },
        {
          id: 7,
          name: "Toyota HiAce",
          year: "2019–2021",
          image: "/Petrol-Powered\ Options/Toyota\ HiAce.png?height=400&width=600",
          description: "Passenger-ready – seats up to 9 comfortably.",
          specs: {
            cargoSpace: "6 cubic meters",
            fuelType: "Petrol",
            year: "2019–2021",
          },
        },
      ],
    },
  ]

export  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


export const navItems = [
  { title: "Home", href: "/" },
  { title: "Our Fleet", href: "#fleet" },
  { title: "Contact", href: "#contact" },
  { title: "About", href: "#about" },
]

export const heroItems = {
    title: "Rent a Van Today",
    options: ['Flexible', 'Affordable', 'Ready to Go!'],
    subheadline: "We offer a wide range of vans to suit your needs. Whether you're moving house, transporting goods, or need a vehicle for your business, we've got you covered.",
}

export const contactInfo = {
  phoneNumber: '0393146522',
  address: '8 Nexus Street, Ravenhall 3023 Melbourne, Victoria',
  emailId: 'admin@motorpoint.net.au'
}
