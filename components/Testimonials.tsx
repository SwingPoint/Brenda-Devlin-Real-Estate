interface Testimonial {
  text: string;
  author: string;
  title: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  limit?: number;
}

export function Testimonials({ testimonials, limit }: TestimonialsProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="testimonials-grid">
      {displayTestimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <div className="testimonial-rating">
            {'★'.repeat(testimonial.rating)}
          </div>
          <p className="testimonial-text">{testimonial.text}</p>
          <div className="testimonial-author">
            <div>
              <div className="testimonial-author-name">{testimonial.author}</div>
              <div className="testimonial-author-title">{testimonial.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

