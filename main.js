// MovieXpress - Enhanced Frontend JavaScript

// Global Application State
const MovieXpress = {
  currentUser: null,
  currentTheme: 'dark',
  selectedSeats: [],
  currentMovie: null,
  seatRows: 6,
  seatCols: 10,
  posterPlaceholder: 'https://via.placeholder.com/600x900?text=No+Image',
  bookings: JSON.parse(localStorage.getItem('moviexpress_bookings')) || [],
  
  // Movie Database
  movies: [
    {
      id: 1,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      duration: "2h 32m",
      rating: "9.0",
      language: "English, Hindi",
      price: 250,
      image: "https://m.media-amazon.com/images/I/51k0qaA8m2L._AC_SY679_.jpg",
      showtimes: ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"],
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
    {
      id: 2,
      title: "Oppenheimer",
      genre: "Biography, Drama",
      duration: "3h",
      rating: "8.5",
      language: "English",
      price: 300,
      image: "https://m.media-amazon.com/images/I/81t9ZrZUJxL._AC_SL1500_.jpg",
      showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
      description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      genre: "Action, Sci-Fi",
      duration: "3h 1m",
      rating: "8.4",
      language: "English, Hindi, Tamil, Telugu",
      price: 280,
      image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
      showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
      description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions."
    },
    {
      id: 4,
      title: "Jawan",
      genre: "Action, Thriller",
      duration: "2h 49m",
      rating: "7.2",
      language: "Hindi, Tamil, Telugu",
      price: 220,
      image: "https://m.media-amazon.com/images/I/61z6V8ZUgBL._AC_UF1000,1000_QL80_.jpg",
      showtimes: ["1:00 PM", "5:00 PM", "9:00 PM"],
      description: "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in the society."
    },
    {
      id: 5,
      title: "Spider-Man: No Way Home",
      genre: "Action, Adventure, Sci-Fi",
      duration: "2h 28m",
      rating: "8.2",
      language: "English, Hindi",
      price: 260,
      image: "https://m.media-amazon.com/images/I/81H4K1dOXfL._AC_SL1500_.jpg",
      showtimes: ["11:30 AM", "3:30 PM", "7:30 PM"],
      description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear."
    },
    {
      id: 6,
      title: "Dune",
      genre: "Adventure, Drama, Sci-Fi",
      duration: "2h 35m",
      rating: "8.0",
      language: "English",
      price: 290,
      image: "https://m.media-amazon.com/images/I/81vYHZOTWZL._AC_SL1500_.jpg",
      showtimes: ["10:30 AM", "2:30 PM", "6:30 PM"],
      description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
    }
  ],
  
  // Additional Movies (extend to 12 total)
  // Appended after initial definition for clarity
  // These will be merged into the movies array during init
  extraMovies: [
    {
      id: 7,
      title: "Interstellar",
      genre: "Adventure, Drama, Sci-Fi",
      duration: "2h 49m",
      rating: "8.6",
      language: "English, Hindi",
      price: 270,
      image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
      showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      id: 8,
      title: "Inception",
      genre: "Action, Sci-Fi, Thriller",
      duration: "2h 28m",
      rating: "8.8",
      language: "English, Hindi",
      price: 260,
      image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
      showtimes: ["11:15 AM", "3:00 PM", "6:45 PM"],
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
    },
    {
      id: 9,
      title: "KGF: Chapter 2",
      genre: "Action, Drama",
      duration: "2h 48m",
      rating: "8.3",
      language: "Kannada, Hindi, Tamil, Telugu, Malayalam",
      price: 240,
      image: "https://m.media-amazon.com/images/I/91Qf3N0n0vL._AC_SL1500_.jpg",
      showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
      description: "Rocky takes over the Kolar Gold Fields and must retain his supremacy against foes and government."
    },
    {
      id: 10,
      title: "3 Idiots",
      genre: "Comedy, Drama",
      duration: "2h 50m",
      rating: "8.4",
      language: "Hindi",
      price: 200,
      image: "https://m.media-amazon.com/images/I/81zHj3G1J8L._AC_SL1500_.jpg",
      showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
      description: "Two friends are searching for their long lost companion. They revisit their college days."
    },
    {
      id: 11,
      title: "RRR",
      genre: "Action, Drama",
      duration: "3h 7m",
      rating: "8.0",
      language: "Telugu, Hindi, Tamil, Kannada, Malayalam",
      price: 280,
      image: "https://m.media-amazon.com/images/I/81ZrJ4Gk9yL._AC_SL1500_.jpg",
      showtimes: ["1:00 PM", "5:15 PM", "9:30 PM"],
      description: "A fictitious story about two legendary revolutionaries and their journey away from home."
    },
    {
      id: 12,
      title: "Pathaan",
      genre: "Action, Thriller",
      duration: "2h 26m",
      rating: "6.9",
      language: "Hindi, Tamil, Telugu",
      price: 230,
      image: "https://m.media-amazon.com/images/I/71i7zAq1b8L._AC_SL1500_.jpg",
      showtimes: ["9:45 AM", "1:45 PM", "5:45 PM", "9:45 PM"],
      description: "An Indian spy embarks on a high-octane mission to protect his nation."
    }
  ],
  
  // Initialize Application
  init() {
    this.loadTheme();
    // Merge extra movies into movies array if not already present
    if (Array.isArray(this.extraMovies) && this.extraMovies.length) {
      const existingIds = new Set(this.movies.map(m => m.id));
      const toAdd = this.extraMovies.filter(m => !existingIds.has(m.id));
      this.movies = [...this.movies, ...toAdd];
    }
    // Tag industry (Bollywood/Hollywood) based on title
    const bollywoodTitles = new Set([
      'Jawan', 'KGF: Chapter 2', '3 Idiots', 'RRR', 'Pathaan'
    ]);
    this.movies = this.movies.map(m => ({
      ...m,
      industry: bollywoodTitles.has(m.title) ? 'Bollywood' : 'Hollywood'
    }));
    this.setupEventListeners();
    this.loadUserData();
    this.renderContent();
  },
  
  // Theme Management
  loadTheme() {
    const savedTheme = localStorage.getItem('moviexpress_theme') || 'dark';
    this.currentTheme = savedTheme;
    document.body.className = savedTheme;
  },
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.body.className = this.currentTheme;
    localStorage.setItem('moviexpress_theme', this.currentTheme);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.innerHTML = this.currentTheme === 'dark' ? 
        '<span>☀️</span> Light' : '<span>🌙</span> Dark';
    }
  },
  
  // Event Listeners Setup
  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
    
    // Close modals on outside click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.closeModal(e.target.id);
      }
    });
    
    // Form submissions
    this.setupFormHandlers();
  },
  
  // Form Handlers
  setupFormHandlers() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
    }
    
    // Login/Signup form
    const authForm = document.getElementById('auth-form');
    if (authForm) {
      authForm.addEventListener('submit', (e) => this.handleAuthForm(e));
    }

    // Profile form
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
      profileForm.addEventListener('submit', (e) => this.handleProfileForm(e));
    }
  },
  
  // User Data Management
  loadUserData() {
    const userData = localStorage.getItem('moviexpress_user');
    if (userData) {
      this.currentUser = JSON.parse(userData);
      this.updateUserInterface();
    }
  },
  
  saveUserData() {
    if (this.currentUser) {
      localStorage.setItem('moviexpress_user', JSON.stringify(this.currentUser));
    }
  },
  
  updateUserInterface() {
    const userElements = document.querySelectorAll('[data-user-name]');
    userElements.forEach(el => {
      if (this.currentUser) {
        el.textContent = `Welcome, ${this.currentUser.name}`;
      }
    });
  },
  
  // Content Rendering
  renderContent() {
    this.renderMovieGrid();
    this.renderDashboardStats();
    this.renderBookings();
  },
  
  renderMovieGrid() {
    const movieGrid = document.getElementById('movie-grid');
    if (!movieGrid) return;
    
    movieGrid.innerHTML = '';
    this.movies.forEach(movie => {
      const movieCard = this.createMovieCard(movie);
      movieGrid.appendChild(movieCard);
    });
  },
  
  createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card fade-in-up';
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" loading="lazy" onerror="this.onerror=null;this.src='${this.posterPlaceholder}';">
      <div class="movie-card-content">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-meta">${movie.genre} • ${movie.duration}</p>
        <p class="movie-meta">⭐ ${movie.rating} • ${movie.language}</p>
        <p class="movie-meta">₹${movie.price}</p>
        <button class="btn btn-primary" onclick="MovieXpress.showMovieDetails(${movie.id})">
          <span>🎫</span> Book Now
        </button>
      </div>
    `;
    return card;
  },
  
  // Movie Details Modal
  showMovieDetails(movieId) {
    const movie = this.movies.find(m => m.id === movieId);
    if (!movie) return;
    
    this.currentMovie = movie;
    const modal = this.createMovieModal(movie);
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
  },
  
  createMovieModal(movie) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'movie-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="MovieXpress.closeModal('movie-modal')">&times;</button>
        <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
          <img src="${movie.image}" alt="${movie.title}" style="width: 200px; border-radius: 0.5rem;" onerror="this.onerror=null;this.src='${this.posterPlaceholder}';">
          <div style="flex: 1; min-width: 300px;">
            <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem; color: var(--primary-red);">${movie.title}</h2>
            <p style="margin-bottom: 0.5rem;"><strong>Genre:</strong> ${movie.genre}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Duration:</strong> ${movie.duration}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Rating:</strong> ⭐ ${movie.rating}/10</p>
            <p style="margin-bottom: 0.5rem;"><strong>Languages:</strong> ${movie.language}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Price:</strong> ₹${movie.price}</p>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">${movie.description}</p>
            
            <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem;">Select Showtime:</h3>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
              ${movie.showtimes.map(time => `
                <button class="btn btn-secondary showtime-btn" onclick="MovieXpress.selectShowtime('${time}')">
                  ${time}
                </button>
              `).join('')}
            </div>
            
            <button class="btn btn-primary" onclick="MovieXpress.proceedToSeatSelection()" id="proceed-btn" disabled>
              <span>🎫</span> Select Seats
            </button>
          </div>
        </div>
      </div>
    `;
    return modal;
  },
  
  selectShowtime(time) {
    // Remove active class from all showtime buttons
    document.querySelectorAll('.showtime-btn').forEach(btn => {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-secondary');
    });
    
    // Add active class to selected button
    event.target.classList.remove('btn-secondary');
    event.target.classList.add('btn-primary');
    
    // Enable proceed button
    document.getElementById('proceed-btn').disabled = false;
    this.selectedShowtime = time;
  },
  
  proceedToSeatSelection() {
    if (!this.selectedShowtime) {
      this.showNotification('Please select a showtime', 'warning');
      return;
    }
    
    this.closeModal('movie-modal');
    this.showSeatSelection();
  },
  
  // Seat Selection
  showSeatSelection() {
    const modal = this.createSeatSelectionModal();
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
  },
  
  createSeatSelectionModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'seat-modal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width: 800px;">
        <button class="modal-close" onclick="MovieXpress.closeModal('seat-modal')">&times;</button>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-red);">Select Your Seats</h2>
        
        <div style="text-align: center; margin-bottom: 2rem;">
          <h3>${this.currentMovie.title}</h3>
          <p>${this.selectedShowtime} • ₹${this.currentMovie.price} per seat</p>
        </div>
        
        <div style="text-align: center; margin-bottom: 1rem;">
          <div style="background: #333; padding: 0.5rem; border-radius: 0.5rem; margin-bottom: 1rem;">SCREEN</div>
        </div>
        
        <div class="seat-grid" id="seat-grid"></div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
          <div>
            <label class="form-label">Booking Method</label>
            <select id="booking-method" class="form-input" style="width: 100%;">
              <option value="Online">Online</option>
              <option value="Pay at Counter">Pay at Counter</option>
            </select>
          </div>
          <div>
            <label class="form-label">Payment Method</label>
            <select id="payment-method" class="form-input" style="width: 100%;">
              <option value="UPI">UPI</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="NetBanking">NetBanking</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
        </div>
        
        <div style="display: flex; justify-content: center; gap: 2rem; margin: 2rem 0;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div class="seat available"></div>
            <span>Available</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div class="seat selected"></div>
            <span>Selected</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div class="seat occupied"></div>
            <span>Occupied</span>
          </div>
        </div>
        
        <div style="text-align: center;">
          <p id="seat-info" style="margin-bottom: 1rem;">Select your seats</p>
          <button class="btn btn-primary" onclick="MovieXpress.confirmBooking()" id="confirm-booking" disabled>
            <span>💳</span> Confirm Booking
          </button>
        </div>
      </div>
    `;
    
    // Generate seats after modal is created
    setTimeout(() => this.generateSeats(), 100);
    
    return modal;
  },
  
  generateSeats() {
    const seatGrid = document.getElementById('seat-grid');
    if (!seatGrid) return;
    
    seatGrid.innerHTML = '';
    this.selectedSeats = [];
    
    // Generate seats based on configured rows/cols
    for (let row = 0; row < this.seatRows; row++) {
      for (let col = 0; col < this.seatCols; col++) {
        const seatNumber = String.fromCharCode(65 + row) + (col + 1);
        const seat = document.createElement('button');
        seat.className = Math.random() < 0.3 ? 'seat occupied' : 'seat available';
        seat.textContent = seatNumber;
        seat.disabled = seat.classList.contains('occupied');
        
        if (!seat.disabled) {
          seat.addEventListener('click', () => this.toggleSeat(seat, seatNumber));
        }
        
        seatGrid.appendChild(seat);
      }
    }
  },
  
  toggleSeat(seatElement, seatNumber) {
    if (seatElement.classList.contains('selected')) {
      seatElement.classList.remove('selected');
      seatElement.classList.add('available');
      this.selectedSeats = this.selectedSeats.filter(s => s !== seatNumber);
    } else {
      if (this.selectedSeats.length >= 6) {
        this.showNotification('Maximum 6 seats can be selected', 'warning');
        return;
      }
      seatElement.classList.remove('available');
      seatElement.classList.add('selected');
      this.selectedSeats.push(seatNumber);
    }
    
    this.updateSeatInfo();
  },
  
  updateSeatInfo() {
    const seatInfo = document.getElementById('seat-info');
    const confirmBtn = document.getElementById('confirm-booking');
    
    if (this.selectedSeats.length === 0) {
      seatInfo.textContent = 'Select your seats';
      confirmBtn.disabled = true;
    } else {
      const total = this.selectedSeats.length * this.currentMovie.price;
      seatInfo.innerHTML = `
        Selected: ${this.selectedSeats.join(', ')}<br>
        Total: ₹${total} (${this.selectedSeats.length} seats)
      `;
      confirmBtn.disabled = false;
    }
  },
  
  // Booking Confirmation
  confirmBooking() {
    if (this.selectedSeats.length === 0) return;
    
    const booking = {
      id: Date.now(),
      movie: this.currentMovie.title,
      showtime: this.selectedShowtime,
      seats: [...this.selectedSeats],
      total: this.selectedSeats.length * this.currentMovie.price,
      date: new Date().toLocaleDateString(),
      status: 'confirmed',
      bookingMethod: document.getElementById('booking-method')?.value || 'Online',
      paymentMethod: document.getElementById('payment-method')?.value || 'UPI'
    };
    
    // Require QR verification when Online payment is chosen
    if (booking.bookingMethod === 'Online') {
      // Open QR verification modal; finalize only after user confirms
      this.showPaymentQR(booking);
      return;
    }

    // Pay at Counter: finalize immediately
    this.finalizeBooking(booking);
  },

  finalizeBooking(booking) {
    this.bookings.push(booking);
    localStorage.setItem('moviexpress_bookings', JSON.stringify(this.bookings));
    this.closeModal('seat-modal');
    this.showBookingConfirmation(booking);
  },
  
  // Helpers
  parseSeatLabel(label) {
    // e.g., A1 => row 0, col 0
    const rowChar = label[0];
    const colNum = parseInt(label.slice(1), 10);
    return { row: rowChar.charCodeAt(0) - 65, col: colNum - 1 };
  },

  buildTicketDataString(booking) {
    const payload = {
      id: booking.id,
      movie: booking.movie,
      showtime: booking.showtime,
      seats: booking.seats,
      total: booking.total,
      date: booking.date
    };
    return JSON.stringify(payload);
  },

  openPrintReceipt(booking) {
    const receiptHtml = this.getReceiptHTML(booking);
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(receiptHtml);
    w.document.close();
    setTimeout(() => w.print(), 300);
  },

  getReceiptHTML(booking) {
    const rows = [...new Set(booking.seats.map(s => s[0]))].join(', ');
    const qrData = encodeURIComponent(this.buildTicketDataString(booking));
    return `<!DOCTYPE html>
      <html><head><meta charset="utf-8"><title>Ticket #${booking.id}</title>
      <style>
        body{font-family: Arial, sans-serif; padding:20px;}
        .title{font-weight:700;font-size:20px;margin-bottom:8px}
        .line{margin:6px 0}
        .badge{display:inline-block;padding:4px 8px;border:1px solid #e11d48;border-radius:6px;color:#e11d48}
        .box{border:1px solid #ddd;padding:12px;border-radius:8px;margin-top:12px}
      </style></head>
      <body>
        <div class="title">MovieXpress E-Ticket</div>
        <div class="line"><span class="badge">Booking ID: ${booking.id}</span></div>
        <div class="line"><strong>Movie:</strong> ${booking.movie}</div>
        <div class="line"><strong>Showtime:</strong> ${booking.showtime} on ${booking.date}</div>
        <div class="line"><strong>Seats:</strong> ${booking.seats.join(', ')}</div>
        <div class="line"><strong>Rows:</strong> ${rows}</div>
        <div class="line"><strong>Booking:</strong> ${booking.bookingMethod} • <strong>Payment:</strong> ${booking.paymentMethod}</div>
        <div class="line"><strong>Total:</strong> ₹${booking.total}</div>
        <div class="box">
          <div><strong>Scan at Entry</strong></div>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrData}" alt="QR Code"/>
        </div>
      </body></html>`;
  },

  showBookingConfirmation(booking) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
      <div class="modal-content" style="text-align: center;">
        <div style="font-size: 4rem; color: var(--success-green); margin-bottom: 1rem;">✅</div>
        <h2 style="color: var(--success-green); margin-bottom: 2rem;">Booking Confirmed!</h2>
        
        <div style="background: var(--dark-card); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem;">${booking.movie}</h3>
          <p><strong>Showtime:</strong> ${booking.showtime}</p>
          <p><strong>Seats:</strong> ${booking.seats.join(', ')}</p>
          <p><strong>Date:</strong> ${booking.date}</p>
          <p><strong>Booking Method:</strong> ${booking.bookingMethod}</p>
          <p><strong>Payment Method:</strong> ${booking.paymentMethod}</p>
          <p style="font-size: 1.2rem; color: var(--accent-gold);"><strong>Total: ₹${booking.total}</strong></p>
          <div style="margin-top:1rem; text-align:left;">
            <h4 style="margin:0 0 .5rem 0;">Seat Location Map</h4>
            <div style="display:grid; grid-template-columns: repeat(${this.seatCols}, 1fr); gap:4px; background:#111; padding:8px; border-radius:8px;">
              ${Array.from({length: this.seatRows}).map((_, r) =>
                Array.from({length: this.seatCols}).map((_, c) => {
                  const label = String.fromCharCode(65 + r) + (c + 1);
                  const selected = booking.seats.includes(label);
                  return `<div style="
                      text-align:center; font-size:.75rem; padding:.35rem; border-radius:.35rem;
                      ${selected ? 'background: var(--primary-red); color: #fff;' : 'background:#2b2b2b; color:#aaa;'}
                    ">${label}</div>`;
                }).join('')
              ).join('')}
            </div>
            <div style="margin-top:.5rem; color: var(--text-secondary); font-size:.9rem;">Rows are A (front) to ${String.fromCharCode(65 + this.seatRows - 1)} (back)</div>
          </div>
          <div style="display:flex; gap:1rem; align-items:center; justify-content:center; margin-top:1rem;">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(this.buildTicketDataString(booking))}" alt="QR Code" style="background:#fff; padding:6px; border-radius:8px;"/>
            <div style="text-align:left; font-size:.9rem; color: var(--text-secondary); max-width: 260px;">
              Scan this QR at entry or use the Print Ticket button to download your receipt.
            </div>
          </div>
        </div>
        
        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <button class="btn btn-secondary" onclick="this.parentElement.parentElement.remove()">
            <span>🏠</span> Back to Home
          </button>
          <button class="btn btn-primary" onclick="MovieXpress.openPrintReceipt(${booking.id})" id="print-ticket-btn">
            <span>🖨️</span> Print Ticket
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);

    // Bind print button to use the booking object by id safely
    const btn = modal.querySelector('#print-ticket-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const b = this.bookings.find(x => x.id === booking.id);
        if (b) this.openPrintReceipt(b);
      });
    }
  },
  
  // Dashboard Stats
  renderDashboardStats() {
    const statsContainer = document.getElementById('dashboard-stats');
    if (!statsContainer) return;
    
    const totalMovies = this.movies.length;
    const totalBookings = this.bookings.length;
    const totalRevenue = this.bookings.reduce((sum, booking) => sum + booking.total, 0);
    
    statsContainer.innerHTML = `
      <div class="dashboard-card">
        <div class="dashboard-number" style="color: var(--success-green);">${totalMovies}</div>
        <h3>Total Movies</h3>
      </div>
      <div class="dashboard-card">
        <div class="dashboard-number" style="color: var(--warning-orange);">${totalBookings}</div>
        <h3>Total Bookings</h3>
      </div>
      <div class="dashboard-card">
        <div class="dashboard-number" style="color: var(--accent-gold);">₹${totalRevenue}</div>
        <h3>Total Revenue</h3>
      </div>
    `;
  },
  
  // Bookings Management
  renderBookings() {
    const bookingsList = document.getElementById('bookings-list');
    if (!bookingsList) return;
    
    if (this.bookings.length === 0) {
      bookingsList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No bookings found</p>';
      return;
    }
    
    bookingsList.innerHTML = this.bookings.map(booking => `
      <div class="dashboard-card" style="text-align: left;">
        <div style="display: flex; justify-content: between; align-items: start;">
          <div style="flex: 1;">
            <h3 style="color: var(--primary-red); margin-bottom: 0.5rem;">${booking.movie}</h3>
            <p><strong>Showtime:</strong> ${booking.showtime}</p>
            <p><strong>Seats:</strong> ${booking.seats.join(', ')}</p>
            <p><strong>Date:</strong> ${booking.date}</p>
            <p><strong>Booking Method:</strong> ${booking.bookingMethod || 'Online'}</p>
            <p><strong>Payment Method:</strong> ${booking.paymentMethod || 'UPI'}</p>
            <p style="color: var(--accent-gold);"><strong>Total: ₹${booking.total}</strong></p>
          </div>
          <button class="btn btn-secondary" onclick="MovieXpress.cancelBooking(${booking.id})" style="margin-left: 1rem;">
            Cancel
          </button>
        </div>
      </div>
    `).join('');
  },
  
  cancelBooking(bookingId) {
    if (!confirm('Are you sure you want to cancel this booking?')) return;
    
    this.bookings = this.bookings.filter(booking => booking.id !== bookingId);
    localStorage.setItem('moviexpress_bookings', JSON.stringify(this.bookings));
    this.renderBookings();
    this.showNotification('Booking cancelled successfully', 'success');
  },
  
  // Form Handlers
  handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    e.target.reset();
  },
  
  handleAuthForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.username || !data.password) {
      this.showNotification('Please fill in all fields', 'warning');
      return;
    }
    
    // Simulate login/signup
    this.currentUser = {
      name: data.username,
      email: data.email || `${data.username}@example.com`
    };
    
    this.saveUserData();
    this.updateUserInterface();
    this.showNotification(`Welcome, ${this.currentUser.name}!`, 'success');
    
    // Redirect to home page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  },
  
  // Utility Functions
  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  },
  
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 2rem;
      right: 2rem;
      background: var(--${type === 'success' ? 'success-green' : type === 'warning' ? 'warning-orange' : 'primary-red'});
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      z-index: 3000;
      animation: slideIn 0.3s ease-out;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  },
  
  // Search functionality
  searchMovies(query) {
    const industrySelect = document.getElementById('industry-filter');
    const industry = industrySelect ? industrySelect.value : 'All';
    const q = (query || '').toLowerCase();
    const filteredMovies = this.movies.filter(movie => {
      const matchesQuery = movie.title.toLowerCase().includes(q) || movie.genre.toLowerCase().includes(q);
      const matchesIndustry = industry === 'All' || movie.industry === industry;
      return matchesQuery && matchesIndustry;
    });
    
    const movieGrid = document.getElementById('movie-grid');
    if (movieGrid) {
      movieGrid.innerHTML = '';
      filteredMovies.forEach(movie => {
        const movieCard = this.createMovieCard(movie);
        movieGrid.appendChild(movieCard);
      });
    }
  }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  MovieXpress.init();
});

// Legacy function support
function showModal() {
  MovieXpress.showMovieDetails(1);
}

function closeModal() {
  MovieXpress.closeModal('movie-modal');
}

// Export for global access
window.MovieXpress = MovieXpress;
