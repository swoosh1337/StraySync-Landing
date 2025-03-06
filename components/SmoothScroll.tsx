"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // First, add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Then handle anchor clicks for more precise control
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          // Get the header height to offset the scroll position
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          
          // Calculate the element's position relative to the document
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          
          // Scroll to the element with an offset for the header
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return null; // This component doesn't render anything
} 