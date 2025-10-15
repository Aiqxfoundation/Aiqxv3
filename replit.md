# AIQX Foundation - Professional Mining Platform

## Overview
Professional token presale and mining platform for AIQX Foundation. Built with a sophisticated mining system featuring automatic continuous operation, tier-based rewards, and a professional interface combining elements from nodepay.ai and coredao.org.

## Project Architecture

### Three-Section Structure
1. **3D Splash Screen**: Futuristic animated intro with robot holding AIQX token (6 seconds)
2. **Landing Page**: Full-screen introductory page with "Enter App" button
3. **App Interface**: Complete application with bottom navigation bar (mobile app style)

### Technology Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS with vibrant gradients
- **Animations**: CSS 3D transforms and Framer Motion
- **3D Graphics**: CSS-based 3D animations (WebGL fallback)
- **Blockchain**: ethers.js (Ethereum/MetaMask)
- **Router**: React Router v6

## Mining System (Professional Continuous Mining)

### Core Features
- **One-Time Start**: START MINING button appears only once for new users
- **Continuous Operation**: Mining automatically restarts after claiming
- **Upgrade Integration**: Timer extends when users upgrade tiers
- **Persistent State**: Mining continues across sessions

### Mining Flow
1. **New Users**: See START MINING button once
2. **After First Start**: Button disappears forever
3. **Claiming**: Automatically restarts mining after claim
4. **Upgrading**: Extends timer and continues mining

### Tier System
- **Free Tier (Default)**
  - Mining Rate: 0.01 AIQX/hour
  - Timer: 3 hours
  - Theme: Golden
  
- **Bronze Tier (100 AIQX)**
  - Mining Rate: 0.02 AIQX/hour
  - Timer: 12 hours
  - Theme: Green (#00FF7F)
  
- **Silver Tier (250 AIQX)**
  - Mining Rate: 0.05 AIQX/hour  
  - Timer: 6 hours
  - Theme: Purple (#9333EA)
  
- **Gold Tier (500 AIQX)**
  - Mining Rate: 0.10 AIQX/hour
  - Timer: 1 hour
  - Theme: Orange (#FF7A1A)

## Design System

### Theme
- **Background**: Dark (#101010)
- **Gradients**: Vibrant purple-to-blue, cyan-to-green glowing effects
- **Visual Motifs**: Abstract network graphics, connecting nodes, geometric patterns
- **Animations**: Smooth 3D animations, particle effects, holographic UI elements

### Colors
- Primary Background: #101010
- Purple Gradient: #8a2be2
- Blue Gradient: #00bfff  
- Cyan Gradient: #00ffff
- Green Gradient: #00ff7f
- Text Primary: #ffffff
- Text Secondary: #b0b0b0

## Application Structure

### 3D Splash Screen (Auto-plays on load)
- **Duration**: 6 seconds
- **Features**:
  - Animated humanoid robot with glowing eyes
  - Rotating AIQX token in robot's hand with holographic effects
  - Particle field background with floating particles
  - Grid lines for depth perception
  - Light beams sweeping across screen
  - Progress bar showing initialization
- **Animation Sequence**:
  - Robot breathing animation
  - Token presentation and rotation
  - Holographic rings appearing
  - Eye glow pulsing
  - Automatic transition to landing page

### Landing Page (/)
- Full-screen single-view layout
- Large glowing headline: "The Future of AI on the Blockchain"
- Animated abstract background with network graphics
- Single "Enter App" button with glow effect
- No navigation visible

### App Interface (/app/*)

**Top Bar:**
- AIQX logo (left)
- Connect Wallet button (right)
- Displays truncated wallet address when connected

**Bottom Navigation Bar (Mobile App Style):**
- Home/Dashboard
- Presale
- Migrate
- Tokenomics
- About

## Core Pages

### 1. Dashboard (/app)
Central hub displaying:
- Professional mining interface with orbital rings animation
- AIQX balance card with star logo
- Mining Overview showing current rate
- Mining Progress section with:
  - Real-time countdown timer
  - Progress bar with tier-based colors
  - CLAIM button (activated at 100%)
  - Accumulation display
- Four transaction buttons (Send, Receive, Swap, Transfer)
- Social media links (Twitter, Telegram, Discord)

### 2. Presale Page (/app/presale)
Token presale interface:
- Countdown timer (Days, Hours, Minutes)
- Progress bar: 225,000 / 500,000 AIQX (45%)
- ETH input field
- Real-time AIQX calculation (1 ETH = 10,000 AIQX)
- "Buy AIQX" button
- Feature badges (Instant delivery, Secure transaction, Best rate, Vesting schedule)
- Sale statistics (Token Price: $0.10, Total Supply: 1M, Sale Progress: 45%, Total Raised: $22.5K)

### 3. Migration Page (/app/migrate)
Three-step token migration process:
- **Step 1**: Connect Wallets (Solana + Ethereum)
- **Step 2**: Verify Balance (shows old token balance with 10:1 conversion)
- **Step 3**: Initiate Migration (execute migration transaction)

Displays:
- Old Contract (Solana): AiqxkvBcvugexLRRxFXBYxT5ekcrSb9noosq3VqBTRFD (Deprecated)
- New Contract (Ethereum): 0x742d35Cc6634C0532925a3b8440011bA34C60C79 (Active)
- Conversion Rate: 10:1 (10 Old AIQX = 1 New AIQX)

### 4. Tokenomics Page (/app/tokenomics)
Token distribution visualization:
- **Total Supply**: 1,000,000 AIQX

Distribution:
- 50% Presale (500,000 AIQX) - Initial capital and community building
- 20% Liquidity & Listings (200,000 AIQX) - DEX/CEX exchange liquidity
- 15% Ecosystem & Development (150,000 AIQX) - Development funding and grants
- 10% Holder Conversion (100,000 AIQX) - SPL to ERC20 migration at 10:1 ratio
- 5% Team & Founders (50,000 AIQX) - Team rewards with vesting

Displayed as:
- Interactive pie chart with glowing segment colors
- Detailed breakdown cards for each allocation

### 5. About Page (/app/about)
Foundation information:
- Vision: Revolutionizing decentralized AI infrastructure
- Mission: Building trustworthy blockchain-powered AI ecosystem
- Core values and principles
- Call-to-action buttons

## Technical Details

### Professional Mining Implementation
- **Persistent Mining State**: Uses localStorage to track if user has ever mined
- **Automatic Restart**: Mining continues after claiming rewards
- **Upgrade Integration**: Seamlessly extends timer when tier changes
- **Theme-Based Colors**: Progress bar, percentage, and claim button match tier colors
- **Test Mode**: Hidden test button for instant 100% completion (development only)

### Wallet Integration
**Ethereum (Fully Functional):**
- MetaMask connection via ethers.js v6
- Real wallet address display
- Transaction preparation
- Account change detection

**Solana (UI Ready):**
- Connection flow UI built
- Balance verification interface designed
- Note: Requires @solana/wallet-adapter packages for full implementation

### Smart Contracts (To Be Deployed)
1. **AIQX ERC20 Token Contract**: 1M total supply on Ethereum
2. **Presale Contract**: Manages ETH contributions and AIQX distribution
3. **Migration Contract**: Handles SPL-to-ERC20 conversion verification

### Migration Logic
- Off-chain verification recommended
- Backend server verifies Solana transactions
- Authorizes ERC20 token claims on Ethereum
- User pays only Ethereum gas fees

## Development Setup
- **Port**: 5000
- **Host**: 0.0.0.0 (Replit compatible)
- **Build**: Vite with React
- **Hot Reload**: Enabled

## File Structure
```
src/
├── pages/
│   ├── SplashScreenFallback.tsx  # 3D CSS-based splash screen
│   ├── SplashScreenFallback.css  # Splash screen styles
│   ├── SplashScreen3D.tsx        # WebGL version (fallback)
│   ├── LandingPage.tsx           # Intro page with "Enter App"
│   ├── AppInterface.tsx          # App container with bottom nav
│   ├── Dashboard.tsx             # Main dashboard
│   ├── PresalePage.tsx           # Token presale
│   ├── MigratePage.tsx           # Migration portal
│   ├── TokenomicsPage.tsx        # Token distribution
│   └── AboutPage.tsx             # Foundation info
├── components/
│   ├── AppInterface.tsx          # Main mining interface
│   ├── BottomNavigation.tsx      # Mobile-style bottom nav
│   ├── TopBar.tsx                # Logo and wallet connect
│   └── UpgradeModal.tsx          # Tier upgrade interface
├── contexts/
│   └── UpgradeContext.tsx        # Upgrade state management
├── App.tsx                       # Main routing with splash
└── App.css                       # Styles and gradients
```

## Recent Updates
- 2025-10-14: Implemented Professional Continuous Mining System
  - START MINING button now only appears once for new users
  - Mining automatically restarts after claiming rewards
  - Upgrading tiers extends timer and continues mining seamlessly
  - Mining state persists across sessions using localStorage
  - Removed redundant green CLAIM button for cleaner interface

- 2025-10-14: Applied Theme-Based Colors to Mining Progress
  - Progress bar uses tier-specific gradient colors
  - Percentage text matches tier theme color
  - CLAIM button activates with tier color at 100%
  - Test button added for development (instant 100% completion)

- 2025-10-14: Fixed Timer Display
  - Timer now properly counts down from initial value
  - Synchronized with progress bar fill rate
  - Shows HH:MM:SS format with real-time updates

- 2025-10-14: Removed "Mining In Progress" yellow tab
  - Eliminated intermediate yellow button during active mining
  - Cleaner interface transitions directly from START MINING to CLAIM
  - Mining animation and progress bar still display during active mining

- 2025-10-14: Fixed Balance Card Text Visibility
  - Increased card height to 160px and padding to 24px 24px 28px
  - Added proper flexbox layout with 12px gap
  - Set line-height: 1.2 to prevent baseline text clipping

## Security Considerations
- Smart contracts require professional security audits before deployment
- User funds controlled by contracts must be thoroughly tested
- Migration process involves two blockchains - clear UX critical
- Wallet integration must follow best practices

## Next Steps for Full Deployment
1. Deploy smart contracts (ERC20, Presale, Migration) on Ethereum
2. Set up backend server for Solana transaction verification
3. Integrate Solana wallet adapters (requires environment with Python/node-gyp)
4. Conduct security audits
5. Test migration flow end-to-end with real transactions
6. Deploy to production hosting with full dependencies