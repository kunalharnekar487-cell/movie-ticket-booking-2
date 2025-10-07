# MovieXpress - Modern Cinema Booking Platform

A comprehensive movie ticket booking website with a modern, responsive design and full-featured frontend experience.

## 🎬 Features

### Core Functionality
- **Movie Browsing**: Interactive movie grid with detailed information
- **Seat Selection**: Visual seat selection with real-time availability
- **Booking Management**: Complete booking workflow with confirmation
- **User Dashboard**: Personal booking history and profile management
- **Admin Panel**: Movie management and system administration
- **Theme Toggle**: Dark/Light mode support
- **Responsive Design**: Mobile-first approach with full responsiveness

### User Experience
- **Modern UI**: Clean, cinema-themed design with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Search Functionality**: Real-time movie search and filtering
- **Notifications**: Toast notifications for user feedback
- **Form Validation**: Client-side validation with user-friendly messages
- **Local Storage**: Persistent data storage for bookings and preferences

## 🏗️ Project Structure

```
MoviexFlims/
├── index.html          # Main landing page with hero section and featured movies
├── about.html          # About page with company information
├── contact.html        # Contact form with company details
├── login.html          # Authentication page (login/signup)
├── user.html           # User dashboard for booking management
├── admin.html          # Admin panel for system management
├── home.html           # Alternative home page
├── now showing.html    # Complete movie listings
├── seat-selection.html # Seat selection interface
├── styles.css          # Comprehensive CSS with modern styling
├── main.js             # Enhanced JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#ef4444` - Main brand color
- **Dark Background**: `#0f172a` - Primary dark theme
- **Dark Cards**: `#1e293b` - Card backgrounds
- **Success Green**: `#10b981` - Success states
- **Warning Orange**: `#f59e0b` - Warning states
- **Accent Gold**: `#fbbf24` - Highlights and accents

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive sizing** with fluid typography

### Components
- **Buttons**: Multiple variants (primary, secondary, success, warning)
- **Forms**: Styled inputs with focus states and validation
- **Cards**: Movie cards, dashboard cards, and information cards
- **Modals**: Overlay modals for detailed interactions
- **Navigation**: Responsive header with mobile menu

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Python, Node.js, or any HTTP server)

### Installation
1. Clone or download the project files
2. Navigate to the project directory
3. Start a local web server:
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8080
   ```
4. Open your browser and navigate to `http://localhost:8080`

## 📱 Pages Overview

### 1. Home Page (`index.html`)
- Hero section with call-to-action
- Featured movies grid with search functionality
- Responsive navigation with theme toggle
- Footer with company information

### 2. About Page (`about.html`)
- Company mission and values
- Feature highlights with icons
- Benefits list with checkmarks
- Call-to-action to start booking

### 3. Contact Page (`contact.html`)
- Contact form with validation
- Company contact information
- Social media links
- Responsive two-column layout

### 4. Login/Signup (`login.html`)
- Toggle between login and signup modes
- Form validation and user feedback
- OTP functionality for registration
- Demo credentials support

### 5. User Dashboard (`user.html`)
- Personal booking management
- Profile information display
- Add/cancel booking functionality
- Statistics dashboard

### 6. Admin Panel (`admin.html`)
- Movie management (add/edit/delete)
- System statistics overview
- Data export functionality
- Recent activity tracking

### 7. Now Showing (`now showing.html`)
- Complete movie listings
- Movie detail modals
- Showtime selection
- Direct booking integration

### 8. Seat Selection (`seat-selection.html`)
- Interactive seat map
- Real-time seat availability
- Multiple seat selection
- Booking confirmation

## 🛠️ Technical Implementation

### CSS Architecture
- **CSS Custom Properties**: For consistent theming
- **Flexbox & Grid**: Modern layout techniques
- **Media Queries**: Responsive breakpoints
- **Animations**: Smooth transitions and hover effects
- **Component-based**: Reusable CSS classes

### JavaScript Features
- **Modular Design**: Object-oriented approach with MovieXpress namespace
- **Local Storage**: Persistent data management
- **Event Handling**: Comprehensive event listeners
- **Form Validation**: Client-side validation with feedback
- **Theme Management**: Dark/light mode toggle
- **Responsive Utilities**: Dynamic layout adjustments

### Data Management
- **Movie Database**: Comprehensive movie information
- **Booking System**: Complete booking workflow
- **User Management**: User authentication and profiles
- **Admin Functions**: System administration tools

## 🎯 Key Features Implemented

### Enhanced User Interface
- ✅ Modern, cinema-themed design
- ✅ Responsive layout for all devices
- ✅ Dark/light theme toggle
- ✅ Smooth animations and transitions
- ✅ Interactive hover effects

### Booking System
- ✅ Movie browsing and search
- ✅ Detailed movie information
- ✅ Showtime selection
- ✅ Interactive seat selection
- ✅ Booking confirmation and management

### User Management
- ✅ Login/signup functionality
- ✅ User dashboard with booking history
- ✅ Profile management
- ✅ Persistent user sessions

### Admin Features
- ✅ Movie management system
- ✅ Booking overview and statistics
- ✅ Data export capabilities
- ✅ System administration tools

### Technical Enhancements
- ✅ Comprehensive CSS framework
- ✅ Enhanced JavaScript functionality
- ✅ Local storage integration
- ✅ Form validation and feedback
- ✅ Responsive design patterns

## 🔧 Customization

### Adding New Movies
Use the admin panel to add new movies with:
- Title, genre, and duration
- Pricing and showtimes
- Movie poster images
- Detailed descriptions

### Modifying Themes
Edit CSS custom properties in `styles.css`:
```css
:root {
  --primary-red: #ef4444;
  --dark-bg: #0f172a;
  /* Add your custom colors */
}
```

### Extending Functionality
The modular JavaScript architecture allows easy extension:
```javascript
// Add new methods to MovieXpress object
MovieXpress.newFeature = function() {
  // Your custom functionality
};
```

## 📊 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## 📄 License
This project is open source and available under the MIT License.

## 🎉 Acknowledgments
- Google Fonts for typography
- Unsplash for movie poster images
- Modern CSS techniques and best practices
- Responsive design principles

---

**MovieXpress** - Experience cinema like never before! 🎬✨
