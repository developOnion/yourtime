# Product Requirements Document (PRD): Your Time

## Product Vision & Objective

To build a high-end, visually captivating portfolio and lead-generation website for a premium venue owner/agency. The platform will showcase available venues and event services through a lens of intentionality and romantic minimalism, ultimately driving interested clients to submit a booking inquiry.

## Target Audience

Primary: Couples planning their weddings who value aesthetic, premium spaces, and seamless service.
Secondary: Corporate event planners, holiday party organizers, and social gathering hosts looking for high-quality venues.

## Design & UX Strategy

Theme: Romantic minimalism, intentionality, uncluttered layouts.
Visual Focus: Large, high-resolution, high-quality photography to sell the spatial experience. Ample whitespace, elegant typography, and subtle interactions.
Performance: Images must load instantly without pixelation to maintain the luxury feel.
Responsiveness: Must be fully responsive, prioritizing a flawless mobile experience.

## Technical Architecture & Stack

Framework: React
Build Tool: Vite
Styling: Tailwind CSS
Data Management (MVP): Static JSON/JavaScript objects stored directly within the React application repository.
Image Delivery & Optimization: Cloudinary (to serve compressed, auto-formatted, high-quality images via CDN).
Form Handling/Email: Frontend-only integration via a service like EmailJS or Formspree to route contact form submissions directly to the agency's inbox.

## Page Requirements & User Stories

Landing Page (Overview)
User Story: As a visitor, I want to see a captivating overview of the agency's aesthetic and top offerings immediately so that I know I am in the right place.
Requirements:
Hero section with high-quality Cloudinary-optimized background imagery.
Brief mission statement or value proposition.
Featured venues snippet (carousel or grid pulling from static data).
Clear Call to Action (CTA) navigating to the "Venues" or "Contact Us" page.
Venues Page (Directory & Details)
User Story: As a planner, I want to browse all available venues and click into specific ones to see if they meet my event's logistical needs.
Requirements:
List View: Grid layout mapping over the static venue data, displaying a primary cover photo, venue name, and a short tagline.
Detail View: Dedicated page/modal for each venue containing:
Image gallery (lightbox or slider fed by Cloudinary URLs).
Location details.
Maximum guest capacity.
Starting pricing or pricing tiers.
Direct CTA: "Inquire About This Venue" (links to Contact page).
Services Page
User Story: As a visitor, I want to understand what services the agency provides beyond just the physical space to see if they can handle my entire event.
Requirements:
Clear sections detailing: Venue Rental, Entertainment, Food & Drink.
High-quality supporting imagery for each service.
About Us Page
User Story: As a potential client, I want to read about the agency's history and see past successful events to build trust in their expertise.
Requirements:
Agency origin story and philosophy.
Portfolio section showcasing past hosted events with photography.
Contact Us Page (The Booking Engine)
User Story: As a high-intent user, I want to submit my event details easily so the agency can follow up with a quote or availability check.
Requirements:
Clean, minimalist form layout.
Required Fields: First Name, Last Name, Email, Phone Number, Type of Event (Dropdown), Event Date (Date picker), Venue/Event Place (Dropdown populated dynamically from the static venue data list), Open Description textarea.
Integration with EmailJS/Formspree to capture the payload and email the agency.
Success state/message upon successful submission ("Thank you, we will be in touch within 24 hours") and form reset.
