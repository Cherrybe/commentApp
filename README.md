# commentApp

## Overview

The **commentApp** project is a web-based application designed to 

## Directory Structure

The project is organized into several key directories:

```plaintext
+---public
|       vite.svg
|
+---src
|   |   App.tsx
|   |   index.css
|   |   main.tsx
|   |   vite-env.d.ts
|   |
|   +---assets
|   |   +---icons
|   |   |   |   BoltVector.png
|   |   |   |   Boost.png
|   |   |   |   Canada.png
|   |   |   |   CaretRight.png
|   |   |   |   Deffense.png
|   |   |   |   down.png
|   |   |   |   flight.png
|   |   |   |   globe.png
|   |   |   |   Japan.png
|   |   |   |   Mexico.png
|   |   |   |   reward.png
|   |   |   |   Scotland.png
|   |   |   |   Spain.png
|   |   |   |   Swip.png
|   |   |   |   ThunderBolt.png
|   |   |   |   twitter.png
|   |   |   |   youtube.png
|   |   |   |
|   |   |   \---svgs
|   |   |           ArrowDown.tsx
|   |   |           Check.tsx
|   |   |           Close.tsx
|   |   |           Elements.tsx
|   |   |           Gun.tsx
|   |   |           HomeSvg.tsx
|   |   |           MissionSvg.tsx
|   |   |           PatternGroup.tsx
|   |   |           Progress.tsx
|   |   |           TroopSvg.tsx
|   |   |
|   |   \---images
|   |           Alien.webp
|   |           aliens-banner.webp
|   |           bg.webp
|   |           BiteAlien.webp
|   |           biteAlienOverlayBottom.webp
|   |           Coins.webp
|   |           confirmBg.webp
|   |           down.webp
|   |           EnergyBoost.webp
|   |           index.ts
|   |           millitary.webp
|   |           mission.webp
|   |           Octagon.webp
|   |           OctagonLevel.png
|   |           plane.webp
|   |           proceedBg.webp
|   |           SelectCountryBackground.webp
|   |           skipBg.webp
|   |           Spear.webp
|   |           SpearWithBg.webp
|   |           spike.webp
|   |           ufo.webp
|   |           ufoback.webp
|   |           UfoVector.webp
|   |
|   +---components
|   |   +---game
|   |   |       GameHomeScreen.tsx
|   |   |       Reward.tsx
|   |   |       RewardRecieved.tsx
|   |   |
|   |   +---onboading
|   |   |       LucidiaAlliance.tsx
|   |   |       LucidiaWelcome.tsx
|   |   |       SelectCountry.tsx
|   |   |       WelcomeScreen.tsx
|   |   |
|   |   \---shared
|   |           AlienCard.tsx
|   |           AppAlert.tsx
|   |           AppButton.tsx
|   |           BackgroundPattern.tsx
|   |           BiteAlien.tsx
|   |           ButtonWithBackground.tsx
|   |           CustomSelect.tsx
|   |           IconBox.tsx
|   |           IconButton.tsx
|   |           LevelUp.tsx
|   |           SkipTutorialCard.tsx
|   |           UfoOverlay.tsx
|   |
|   +---routes
|   |       Router.tsx
|   |       
|   +---store
|   |   |   index.ts
|   |   |
|   |   \---slice
|   |           userSlice.ts
|   |
|   +---utils
|   |   +---helpers
|   |   |       helper.ts
|   |   |
|   |   +---interfaces
|   |   |       interface.ts
|   |   |
|   |   \---styles
|   |           customStyle.css
|   |
|   \---views
|       +---gameScreen
|       |   +---Defense
|       |   |       DefenseScreen.tsx
|       |   |
|       |   +---GameHomeScreen
|       |   |       GameHome.tsx
|       |   |
|       |   +---Missions
|       |   |       MissionsScreen.tsx
|       |   |
|       |   \---Troops
|       |           TroopsScreen.tsx
|       |
|       \---onboarding
|               OnboardingScreen.tsx
|               TutorialScreen.tsx
|
```
## `package.json` Overview
- Project Name: comment-app
- Version: 0.1.0

## Scripts
- `start`: Runs the development server using Vite.
- `build`: Compiles TypeScript and builds the project for production.
- `lint`: Runs ESLint to analyze and fix code issues.
- `test`: Run test cases.

## Dependencies
- React & ReactDOM: Core libraries for building the user interface.
- @emotion/react & @emotion/styled: For CSS-in-JS styling solutions.
- @mui/material: Material-UI components for building responsive interfaces.
- @mui/icons-material: Material-UI icons.
- Redux & Redux Toolkit: For state management.
- React Router DOM: For handling client-side routing.
- Redux-persist: For handling persist.
- Jest: For testing.
- Axios: For fetching data.

## DevDependencies
- ESLint: Linter to maintain code quality.

## Installation and Setup
To install and set up the project, follow these steps:
1. Clone the repository:
   ```
   git clone https://github.com/Cherrybe/commentApp.git
   cd commentApp
   ```
2. Install dependencies:
   ```
    npm install
   ```
3. Create a .env and add:
   ```
    REACT_APP_DUMMY_DATA_BASE_URL=https://dummyjson.com/comments
   ```
4. Run the development server:
   ```
    npm strat
   ```
5. Run test:
   ```
    npm test
   ```
6. Build the project:
   ```
    npm run build
   ```

## Project Architecture
The TelegramBot project follows a modular architecture where each feature is encapsulated within its own directory. This approach promotes maintainability and scalability, allowing for easy updates and feature additions.
- **Components**: Reusable UI components.
- **Store**: Centralized state management using Redux.
- **Routes**: Handles navigation across different views.
- **Utils**: Utility functions, type definitions, and styles.

## How it works
![BotFlowchart](https://github.com/user-attachments/assets/4882d6a0-e6f5-46e3-a859-31d08ea5a748)
