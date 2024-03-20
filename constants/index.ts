import siteMetadata from "@/data/siteMetadata";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'contact', label: 'Contact' },
  ];
  
  // FOOTER SECTION
  export const FOOTER_CONTACT_INFO = {
    title: 'Company Info',
    links: [
      { label: 'Address', value: 'Ishaan Constructions Admin Office' },
      { label: 'Phone', value: '+91-9003128155' },
      { label: 'Email', value: 'ishaanconstructions@gmail.com' },
    ],
  };

  export const SOCIALS = {
    title: 'Social',
    links: [
      { label: 'mail', href: `mailto:${siteMetadata.email}` },
      { label: 'linkedin', href: siteMetadata.linkedin }
    ],
  };
