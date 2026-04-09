# System Architecture & Data Flow

This document outlines the component hierarchy and data flow for the "Your Time" project.

## Component Diagram (Mermaid)

```mermaid
graph TD
    %% Data Layer
    subgraph DataLayer [Data Layer - src/data/]
        D_Venues[venues.js]
        D_Events[pastEvents.js]
        D_FAQ[faqs.js]
        D_Services[services.js]
    end

    %% App & Shell Layer
    subgraph AppShell [App Shell - src/]
        App[App.jsx - Router]
        Layout[Layout.jsx - Wrapper]
        Nav[Navbar.jsx]
        Foot[Footer.jsx]
    end

    %% Page Layer
    subgraph Pages [Page Components - src/pages/]
        P_Home[Home.jsx]
        P_Venues[Venues.jsx]
        P_Detail[VenueDetail.jsx]
        P_Gallery[Gallery.jsx]
        P_FAQ[FAQ.jsx]
        P_404[NotFound.jsx]
    end

    %% UI Component Layer
    subgraph UIComponents [UI Components - src/components/]
        C_Hero[PageHero.jsx]
        C_Card[cards/VenueCard.jsx]
        C_Sidebar[VenueSpecsSidebar.jsx]
        C_Reveal[effects/Reveal.jsx]
        C_Action[ui/ActionLink.jsx]
    end

    %% Data Flow (Imports)
    D_Venues -.->|Static Import| P_Home
    D_Venues -.->|Static Import| P_Venues
    D_Venues -.->|Static Import| P_Detail
    D_Events -.->|Static Import| P_Gallery
    D_FAQ -.->|Static Import| P_FAQ
    D_Services -.->|Static Import| Pages

    %% Routing & Structure
    App --> Layout
    Layout --> Nav
    Layout --> Foot
    Layout --> Pages

    %% Component Composition (Props)
    P_Home ==>|Props: venue| C_Card
    P_Venues ==>|Props: venue| C_Card
    P_Detail ==>|Props: venue| C_Sidebar
    P_404 ==>|Props: to/label| C_Action
    Pages ==>|Props: config| C_Hero
    Pages ==>|Children| C_Reveal
    C_Card ==>|Props: to/label| C_Action

    %% Styling Note
    classDef data fill:#f9f,stroke:#333,stroke-width:2px;
    classDef page fill:#bbf,stroke:#333,stroke-width:2px;
    classDef ui fill:#dfd,stroke:#333,stroke-width:1px;
    
    class D_Venues,D_Events,D_FAQ,D_Services data;
    class P_Home,P_Venues,P_Detail,P_Gallery,P_FAQ,P_404 page;
    class C_Hero,C_Card,C_Sidebar,C_Reveal,C_Action ui;
```

## Architectural Breakdown

### 1. Data Layer (`src/data/`)
The single source of truth for the application's content. Data is stored as static JavaScript arrays/objects.
- **Responsibility:** Data definitions and exports.
- **Flow:** Imported directly by Page Components.

### 2. App Shell (`src/App.jsx`, `src/components/Layout.jsx`)
Handles routing and the persistent global UI.
- **`App.jsx`:** Maps URLs to Page Components using React Router.
- **`Layout.jsx`:** Manages the `Navbar`, `Footer`, and global behaviors (like scroll-to-top).

### 3. Page Components (`src/pages/`)
"Smart" container components that represent unique views.
- **Responsibility:** Fetching data from the Data Layer, managing local page state, and defining the layout using UI components.
- **Flow:** Passes specific data subsets (e.g., a single `venue` object) down to UI components via props.

### 4. UI Components (`src/components/`)
"Dumb" presentational components that are reusable across the app.
- **Responsibility:** Rendering the visual interface based on received props.
- **Flow:** Receive data via props; agnostic of where the data originated.

## Use Case Diagram

This diagram describes the primary interactions between the users (Actors) and the system.

```mermaid
graph LR
    Visitor((Visitor / Client))
    Agency((Agency Owner))

    subgraph "Your Time Platform"
        UC1(Browse Venue Portfolio)
        UC2(View Venue Details & Specs)
        UC4(Inquire About a Venue)
        UC5(View Event Services)
        UC6(Browse Portfolio/Gallery)
        UC7(Submit Contact Form)
        UC8(Read FAQs)
        UC9(Receive Lead Notifications)
    end

    Visitor --> UC1
    Visitor --> UC2
    Visitor --> UC4
    Visitor --> UC5
    Visitor --> UC6
    Visitor --> UC7
    Visitor --> UC8

    UC4 -.-> UC9
    UC7 -.-> UC9
    UC9 --- Agency
```

### Primary Actors
- **Visitor / Client:** Couples or event planners looking for high-end spaces. Their goal is to discover a venue that fits their aesthetic and logistical needs.
- **Agency Owner:** The recipient of inquiries. Their goal is to receive qualified leads through the platform.

### Key Interactions
- **Discovery:** Users navigate the home and venue pages to explore the "Intentional Spaces" curated by the agency.
- **Validation:** Users check "Venue Details" (capacity, pricing) and "Services" to verify fit.
- **Conversion:** The primary goal is the "Inquiry" or "Contact Form" submission, which bridges the gap between the platform and the human agency services.
