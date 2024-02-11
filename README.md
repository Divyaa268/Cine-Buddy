# Cine Buddy : A Personalized Movie Recommendation Platform📽️🎬🎞️
In an era dominated by digital streaming services, the demand for personalized and immersive content experiences has become more pronounced than ever. CineBuddy emerges as a groundbreaking project, meticulously crafted to address this demand by offering a sophisticatedand highly personalized movie recommendation platform. This innovative web application is designed to act as a virtual cinematic companion, guiding users through a tailored journey of discovery within the vast landscape of movies and shows. It's like having a knowledgeable movie buddy who knows your taste inside out, guiding you to hidden cinematic gems and deepening your understanding of your favorite titles.

# Live App : https://tangerine-cannoli-9438ab.netlify.app/

# Features 🎥 :
CineBuddy is a feature-rich web application that combines advanced technologies to offer users a personalized and immersive movie recommendation experience. The following section details
the key features that make CineBuddy stand out in the world of streaming platforms.

🍿 **Login/Sign Up Page:**

- **Sign In/Sign Up Form:**
CineBuddy ensures a secure and seamless user onboarding process with well-designed sign-in
and sign-up forms. The forms capture essential user details, contributing to personalized
recommendations. Data is also validated for email and password.\

- **Redirect to Browse Page after Authentication:**
Upon successful authentication, users are redirected to the Browse page. This not only enhances
user experience by minimizing navigation steps but also ensures a smooth transition to the main
content discovery interface.

🍿 **Browse (After Authentication):**

- **Header:**
The dynamic header in the Browse section provides users with easy navigation options. It serves
as a central hub for users to explore different sections of the application effortlessly.

- **Primary Movie Container:**
Trailer from YouTube in Background: The primary movie container features engaging trailers
playing in the background, offering users a sneak peek into the essence of featured movies.

- **Title, Description, Play Button:**
Each movie in the primary container is presented with
detailed information, including title and description. Users can initiate playback directly from
this interface.

- **Movie Suggestions:**
CineBuddy employs sophisticated algorithms to provide personalized movie suggestions. These
suggestions are not just random but carefully curated based on the user's viewing history,
preferences, and trending content.

- **Browse Movies:**
The application's core functionality involves offering users a diverse selection of movies and
shows to explore. This feature ensures that users always have a rich library of content to discover
and enjoy.

- **Movie Lists:**
Curated lists of movies catered to individual tastes are presented, enhancing the user's browsing
experience. These lists may include genres, trending titles, or personalized recommendations.
**

🍿 **CineBuddy GPT Search:**

- **Search Bar:**
The GPT-powered search bar on the CineBuddy GPT page allows users to interact with the
application in a natural language format. Users can ask questions or input queries, and the model
responds with relevant movie suggestions. This adds a layer of personalization and interactivity
to the search experience.

- **Movie Recommendations by AI:**
GPT-3.5 generates movie suggestions based on the user's input. This creates a dynamic and
conversational experience, mimicking the interaction with a knowledgeable movie enthusiast.
GPT-3.5 takes user preferences into account and generates movie recommendations tailored to
individual tastes. This personalized touch sets CineBuddy apart by offering a unique and refined
content discovery experience.

🍿 **Authentication:**
CineBuddy prioritizes user security and personalization through a robust authentication system.
This ensures that user accounts are protected, and the recommendations are tailored to the right
individual.

🍿 **Internationalization/Multi-language Feature:**
To cater to a diverse global audience, CineBuddy introduces a multi-language feature with languages like Hindi, English and Spanish. Users can
enjoy the application in their preferred language, making the platform accessible and inclusive.

🍿 **Other Features:**

- **Custom Hooks:**
CineBuddy employs custom hooks to streamline logic and enhance code organization. This
modular approach not only ensures cleaner code but also facilitates future development and
maintenance.

- **Embedded YouTube Videos:**
The integration of embedded YouTube trailers with autoplay and mute features adds a visual and
interactive element to the platform. Users can get a quick preview of movies without leaving the
application.

- **Infinite Scroll:**
Seamless content discovery is made possible through infinite scroll functionality. Users can
explore an extensive content library without the need for manual navigation, enhancing user
engagement.

- ** Performance Boost with Memoization:**
To optimize performance, CineBuddy implements memoization techniques. This enhances data
caching, reducing unnecessary computations and contributing to a smoother and more responsive
user experience.

- **Modular and Extensible Architecture:**
CineBuddy's design philosophy includes a modular and extensible architecture. This ensures that
the application is scalable and can accommodate future features and improvements without
compromising stability.

- **Responsive Design:**
CineBuddy is crafted with a responsive design, ensuring a consistent and enjoyable user
experience across various devices, including desktops, tablets, and smartphones.

- **Protected Routes:**
To safeguard user privacy and personalization, CineBuddy incorporates protected routes. Certain
sections of the application are accessible only to authenticated users, ensuring a secure
environment.


# APIs Used in Cine Buddy 🎥:

CineBuddy integrates several APIs to enrich the user experience, providing a diverse range of movie data and leveraging natural language processing for personalized suggestions. The
following details each API's role in the application.

🎬 **1) The Movie Database (TMDB) API:**
   
a) **Now Playing Movies API:**
API Endpoint: https://api.themoviedb.org/3/movie/now_playing
Purpose: Fetches real-time data about movies currently playing in theaters.
Implementation: Utilized to display the latest and currently screening movies in the primary
movie container on the Browse page.
Key Features: Provides up-to-date information, keeping users informed about the latest releases.

b) **Popular Movies API:**
API Endpoint: https://api.themoviedb.org/3/movie/popular
Purpose: Retrieves a list of popular movies based on user engagement.
Implementation: Used to populate curated lists and suggestions on the Browse page.
Key Features: Enhances content discovery by showcasing movies that have gained popularity
among users.

c) **Top Rated Movies API:**
API Endpoint: https://api.themoviedb.org/3/movie/top_rated
Purpose: Fetches a collection of top-rated movies based on user ratings.
Implementation: Contributes to creating curated lists and recommendations on the Browse
page.
Key Features: Offers users access to critically acclaimed and highly-rated films.

d) **Trending Movies API:**
API Endpoint: https://api.themoviedb.org/3/trending/movie/week
Purpose: Provides information about movies that are currently trending.
Implementation: Used to highlight trending content and offer users a dynamic and constantly
updated selection.
Key Features: Enhances user engagement by showcasing movies that are currently popular and
trending.

e) **Upcoming Movies API:**
API Endpoint: https://api.themoviedb.org/3/movie/upcoming
Purpose: Retrieves details about upcoming movie releases.
Implementation: Enables users to stay informed about upcoming releases, fostering anticipation
and excitement.
Key Features: Keeps users updated on movies scheduled for future release.

🎬 **2) OpenAI GPT API:**

a) **Movie Suggestion Based on User Input:**
API Endpoint: The OpenAI GPT API is typically accessed programmatically, and details
depend on the specific integration and version used.
Purpose: Utilizes the GPT-3.5 model to generate personalized movie recommendations based on
user queries.
Implementation: Integrates natural language understanding to create a conversational search
experience on the GPT page.
Key Features: Enhances user interaction by providing movie suggestions based on user-typed
queries.

🎬 **3) Multi-Language Support:**
   
a) **Language Support API:**
API Endpoint: The language support feature may involve language detection and translation
APIs.
Purpose: Allows users to interact with CineBuddy in multiple languages, including Hindi,
English, and Spanish.
Implementation: Enables language selection and translation for a more inclusive and
personalized experience.
Key Features: Supports diverse user preferences, making the application accessible to a global
audience.

🎬 **4) TMDB API for Movie Details and Trailers:**

a) **Movie Details API:**
API Endpoint: https://api.themoviedb.org/3/movie/{movie_id}
Purpose: Fetches comprehensive details about a specific movie, including synopsis, cast, and
crew.
Implementation: Enhances the user experience by providing in-depth information about
selected movies.
Key Features: Enriches the user's understanding of a movie before watching.

b) **Videos API (Trailers):**
API Endpoint: https://api.themoviedb.org/3/movie/{movie_id}/videos
Purpose: Retrieves video content associated with a movie, including trailers.
Implementation: Embeds YouTube trailers in the application, allowing users to preview movies
directly.
Key Features: Offers an engaging and interactive way for users to explore movies before
viewing.
CineBuddy's integration of these APIs involves fetching real-time data, generating personalized
recommendations, supporting multiple languages, and providing comprehensive details about
movies, all of which contribute to a dynamic and user-centric movie recommendation platform



# Development Steps 📽️-
- Create React App
- Configured Tailwind CSS 
- Header
- Routing
- Login Form (Sign In)
- Sign Up Form
- Form validation
- useRef Hook
- Firebase Setup
- Deploying the app on production
- Created Sign Up User Account 
- Implemented Sign In User API
- Created Redux Store with User Slice
- Implemented Sign Out
- Update User Profile
- Fetch movies from TMDB movies
- Unsubscribed to the onAuthStateChanged callback
- Put hardcoded strinf values in Constants file
- Registered for TMDB API and create an app. After that get an Access token
- Get API Details from TMDB Documentation (Now Playing Movies API) 
- Custom hook for Now playing movies
- Create Movie Slice
- Updated Redux Store with movies data
- Designed the Containers
- Fetched data for Trailer Video using Videos API
- Update Redux Store with trailer video data
- Embedded the Youtube video and made it autoplay
- Styled the Primary Container
- Build Secondary Component
- Built Movie List Component
- Built Movie Card Component
- Used TMDB Image CDN URL
- Added styling with Tailwind CSS For Browse page
- Created usePopularMovies Custom Hook


# Design 📽️ -
- Login/ Sign Up Page
  - Sign In/ Sign Up Form
  - Redirect to Browse Page after authentication 
- Browse (After Authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title, Description, Play button
    - Movie Suggestions
      - Movie Lists * N
- Netflix GPT Page
  - Search Bar
  - Movie Suggestions
 
# Glimpse of the App 📽️ -
![image](https://github.com/Divyaa268/Cine-Buddy/assets/117614772/70fbdead-e8de-4b50-a641-2a85b22721be)

![image](https://github.com/Divyaa268/Cine-Buddy/assets/117614772/f6e669c8-d91b-4f3c-a34c-51b64133e340)

![image](https://github.com/Divyaa268/Cine-Buddy/assets/117614772/7b5bd2e2-af48-4ee3-b7d0-4a4622fce755)

![image](https://github.com/Divyaa268/Cine-Buddy/assets/117614772/c596a843-4d68-4995-97fc-6cc4a32c0405)

![image](https://github.com/Divyaa268/Cine-Buddy/assets/117614772/ca0aa147-340f-4688-8f30-c9a0c245429c)




