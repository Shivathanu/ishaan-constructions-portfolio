import siteMetadata from "@/data/siteMetadata";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'contact', label: 'Contact' },
    { href: '/', key: 'rate-us', label: 'Rate Our Service' },
  ];
  
  // FOOTER SECTION
  export const FOOTER_CONTACT_INFO = {
    title: 'Company Info',
    links: [
      { label: 'Address', value: 'No.21, 2nd Street, Singaram Nagar, Mannivakkam, Chennai-48' },
      { label: 'Phone', value: '+91-9003128155' },
      { label: 'Email', value: 'ishaaninfras@gmail.com' },
    ],
  };

  export const SOCIALS = {
    title: 'Contact',
    links: [
      { label: 'mail', href: `mailto:${siteMetadata.email}` },
      // { label: 'linkedin', href: siteMetadata.linkedin }
    ],
  };
