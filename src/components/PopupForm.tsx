// src/components/PopupForm.tsx
"use client";
import React from "react";

interface PopupFormProps {
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  // Close the modal when clicking the overlay.
  const handleOverlayClick = () => onClose();

  // Prevent clicks inside the modal from closing it.
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // When clicking the X, close the modal and refresh the page.
  const handleCloseClick = () => {
    onClose();
    window.location.reload();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleOverlayClick}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-lg"
        onClick={handleModalClick}
      >
        <button
          className="absolute top-2 right-2 text-gray-700 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          onClick={handleCloseClick}
        >
          ✕
        </button>
        <div className="h-[600px] sm:h-[700px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/vPkCsjuA7PYlyMi9XQlm"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "40px",
            }}
            title="CRM Software Registration"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
