import React from 'react';

function GoogleMap() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239219.5452756917!2d-48.89450180546875!3d-27.616332500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737af91196f65%3A0x5b76113cc5e8969c!2sSoho%20Centro%20de%20Inova%C3%A7%C3%A3o%20Tecnol%C3%B3gica!5e1!3m2!1spt-BR!2sbr!4v1760214772056!5m2!1spt-BR!2sbr";

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
    </div>
  );
}
export default GoogleMap;