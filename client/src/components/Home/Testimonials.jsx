import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      testimonial:
        "HireHub helped me find the perfect job that matches my skills and interests. The process was smooth and efficient!",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxMTI3MHwwfDF8c2VhcmNofDF8fG1hbGV8ZW58MHx8fHwxNjQzODQxMTM1&ixlib=rb-1.2.1&q=80&w=150&h=150",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      testimonial:
        "I was able to connect with top companies and land my dream job through HireHub. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxMTI3MHwwfDF8c2VhcmNofDh8fGZlbWFsZXxlbnwwfHx8fDE2NDM4NDEyMTI&ixlib=rb-1.2.1&q=80&w=150&h=150",
    },
    {
      id: 3,
      name: "Sam Wilson",
      role: "UX Designer",
      testimonial:
        "The platform is user-friendly and offers a wide range of job opportunities. HireHub is the best job-seeking platform out there!",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxMTI3MHwwfDF8c2VhcmNofDF8fG1hbGV8ZW58MHx8fHwxNjQzODQxMjQy&ixlib=rb-1.2.1&q=80&w=150&h=150",
    },
    {
      id: 4,
      name: "Alice Johnson",
      role: "Data Scientist",
      testimonial:
        "Thanks to HireHub, I found my ideal job quickly and easily. The platform is fantastic!",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxMTI3MHwwfDF8c2VhcmNofDh8fGZlbWFsZXxlbnwwfHx8fDE2NDM4NDEyMTI&ixlib=rb-1.2.1&q=80&w=150&h=150",
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "DevOps Engineer",
      testimonial:
        "HireHub's user-friendly interface and extensive job listings made my job search a breeze. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxMTI3MHwwfDF8c2VhcmNofDF8fG1hbGV8ZW58MHx8fHwxNjQzODQxMjQy&ixlib=rb-1.2.1&q=80&w=150&h=150",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [cardColor, setCardColor] = useState("#ffffff"); // Initial card color

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setCardColor(getRandomColor()); // Change card color
    }, 3000); // change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to generate a random color
  const getRandomColor = () => {
    const colors = ["#f1f3f6", "#e3f2fd", "#f0f4c3", "#ffe0b2"]; // Add more colors as needed
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="testimonials" style={{ background: cardColor }}>
      <div className="container">
        <h3>What Your Friends Say About HireHub</h3>
        <div className="banner">
          {testimonials.map((testimonial, index) => (
            <div
              className={`card ${index === currentTestimonial ? "visible" : "hidden"}`}
              key={testimonial.id}
              style={{ display: index === currentTestimonial ? "flex" : "none" }}
            >
              <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="avatar" />
              <div className="content">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial">{testimonial.testimonial}</p>
                <p className="name">{testimonial.name}</p>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
