import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} VastuVilla Ventures. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Designed with <span role="img" aria-label="heart">❤️</span> by VastuVilla Ventures & Abhinav
            </p>
          </div>
        </footer>
      );
}
