"use client";

/**
 * Opens a map application with the given address.
 * Tries Google Maps first, then falls back to the device's default map app.
 * 
 * @param address The address to show on the map
 */
export const openMaps = (address: string): void => {
  // Encode the address for use in URLs
  const encodedAddress = encodeURIComponent(address);
  
  // Create Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
  // Create native maps URL (for mobile devices)
  const nativeMapsUrl = `maps:q=${encodedAddress}`;
  
  // Check if we're on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // On mobile, try the native maps app first, then fall back to Google Maps in browser
    try {
      window.location.href = nativeMapsUrl;
    } catch (_error) {
      window.open(googleMapsUrl, '_blank');
    }
  } else {
    // On desktop, open Google Maps in a new tab
    window.open(googleMapsUrl, '_blank');
  }
}; 