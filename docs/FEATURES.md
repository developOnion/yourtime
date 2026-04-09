# Your Time - Project Features

"Your Time" is a premium venue portfolio and lead-generation platform built with React 19 and Tailwind CSS 4. The following features have been implemented to provide a high-end, seamless experience for event planners and couples.

## 1. Immersive Visual Experience
*   **Romantic Minimalism Aesthetic**: A clean, intentional design using ample whitespace and elegant typography (Playfair Display for serifs, Inter for sans-serif).
*   **High-Quality Imagery**: Integration with Cloudinary and high-resolution photography to showcase spatial experiences.
*   **Fully Responsive**: A mobile-first approach ensuring a flawless experience across all devices, from smartphones to large desktops.

## 2. Interactive Venue Directory
*   **Curated Collection**: A grid-based directory of exclusive venues (managed via static data in `src/data/venues.js`).
*   **Dynamic Layouts**: Staggered grid presentation on larger screens to maintain a high-fashion, editorial feel.
*   **Venue Cards**: Consistent presentation of venue highlights, including name, location, and primary imagery.

## 3. Comprehensive Venue Details
*   **Dedicated Detail Pages**: Individual pages for each venue providing deep-dives into their unique features.
*   **Technical Specifications**: Sidebar showcasing critical data such as maximum capacity, square footage, and starting prices.
*   **Image Galleries**: High-resolution galleries allowing visitors to visualize their events in the space.
*   **Contextual CTAs**: Direct "Inquire" buttons that pre-fill the contact form with the specific venue's details.

## 4. Lead Generation & Booking Engine
*   **Advanced Inquiry Form**: A multi-field form capturing essential event data:
    *   Event Type (Wedding, Corporate, Social, Production)
    *   Target Date (with future-date validation)
    *   Venue Selection (including pre-selection from detail pages)
    *   Open Description for stylistic vision
*   **Formspree Integration**: Backend-less form handling for direct email delivery to the agency.
*   **Success Interaction**: Custom success modal providing immediate confirmation and expectation setting for follow-up.

## 5. Service & Portfolio Showcasing
*   **Service Breakdown**: Dedicated sections for Venue Rental, Entertainment, and Food & Drink services.
*   **About Us**: A narrative-driven page sharing the agency's history and philosophy.
*   **Event Gallery**: A visual portfolio of past successful events to build social proof and trust.

## 6. Performance & UX Enhancements
*   **Scroll-Triggered Animations**: A custom `Reveal` component provides smooth entrance animations as users scroll through the content.
*   **Lazy Loading**: A specialized `LazyImage` component ensures fast initial page loads by prioritizing above-the-fold content.
*   **Intelligent Navigation**: Automatic scroll-to-top behavior on all route changes via the `Layout` wrapper.
*   **Modern Routing**: Client-side navigation powered by React Router 7 for instant page transitions.

## 7. Technical Infrastructure
*   **Tailwind CSS 4**: Utilizing the latest CSS-first configuration for a streamlined and performant styling system.
*   **React 19**: Leveraging the latest React features for efficient component rendering and state management.
*   **Centralized Data**: All content (venues, FAQs, services) is managed in a decoupled `src/data/` directory for easy updates without modifying component logic.
