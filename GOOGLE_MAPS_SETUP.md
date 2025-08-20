# Google Maps Setup for Sykkelverksted Page

## Setup Instructions

1. **Get a Google Maps API Key:**

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps JavaScript API"
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Update the API Key:**

   - Open `app/sykkelverksted/page.tsx`
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key on line 12:

   ```javascript
   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&libraries=places`
   ```

3. **Update the Address Coordinates:**

   - In the `initMap()` function, update the coordinates to match your actual address:

   ```javascript
   const oslo = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }
   ```

4. **Add the Bike Workshop Image:**
   - Add a bike workshop image to the `public/` directory
   - Name it `bike-workshop.jpg`
   - Recommended size: 1920x800px or similar aspect ratio

## Environment Variables (Recommended)

For better security, you can use environment variables:

1. Create a `.env.local` file in your project root:

   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

2. Update the script src in the page:
   ```javascript
   script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
   ```

## Features

- Interactive Google Maps with custom marker
- Responsive design
- Fallback placeholder when map doesn't load
- Custom map styling
- Mobile-friendly layout

## Notes

- The map will show Oslo coordinates by default
- The marker uses a custom red icon
- The map is styled to hide POI labels for a cleaner look
- The page is fully responsive and works on all devices

